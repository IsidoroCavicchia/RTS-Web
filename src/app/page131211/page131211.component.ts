import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RepositoryService } from '../shared/services/repository.service';
import { Product } from '../caisse/caisse.component';
import { MatDialog } from '@angular/material';
import { DialogResultComponent } from '../dialog-result/dialog-result.component';

@Component({
  selector: 'app-page131211',
  templateUrl: './page131211.component.html',
  styleUrls: ['./page131211.component.scss']
})
export class Page131211Component implements OnInit {

  public Title: string;
  public Product: string;
  public Quant: string;
  public Dose: string;
  public Casier: string;
  public Bouteilles: string;
  public TotalBout: string;
  public NewProductName: string[] = [];
  public NewProductQte: number[] = [];
  public NewUniteType: string[] = [];

  public result: any;
  public ProductCategories: ProductCategory[] = [];
  public NewProducts: Product[] = [];

  public ReservId: number;

  constructor(private repo: RepositoryService, private userService: UserService, private translate: TranslateService, private router: Router,
    private dialog: MatDialog, private route: ActivatedRoute) { }

  ngOnInit() {
    this.translate.get(['page1315.title', 'page1315.product', 'page1315.quant', 'page1315.dose', 'page1315.casier', 'page1315.bouteilles', 'page1315.totalBout'])
      .subscribe(translation => {
        this.Title = translation["page1315.title"];
        this.Product = translation["page1315.product"];
        this.Quant = translation["page1315.quant"];
        this.Dose = translation["page1315.dose"];
        this.Casier = translation["page1315.casier"];
        this.Bouteilles = translation["page1315.bouteilles"];
        this.TotalBout = translation["page1315.totalBout"];
      });

    this.GetProducts();
    this.getReserv();
  }

  getReserv(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.ReservId = id;
}

  GetProducts() {
    this.ProductCategories = [];
    this.repo.getArray('api/InventoryReserv')
      .subscribe(res => {
        for (var i = 0; i < res.Categories.length; i++) {
          var product = new ProductCategory();
          product.ProductCategoryId = res.Categories[i].ProductCategoryId;
          product.ProductCategoryName = res.Categories[i].ProductCategoryName;
          product.Products = res.Categories[i].Products;
          this.ProductCategories.push(product);
          for (var j = product.Products.length; j < 50; j++) {
            var emptyProduct = new Product();
            emptyProduct.UniteType = null;
            emptyProduct.ProductName = "";
            emptyProduct.ProductCategoryId = res.Categories[i].ProductCategoryId;
            this.ProductCategories[i].Products.push(emptyProduct);
          }
        }
      });
  }

  ValidProduct(prod, productName, productQte, productCassier: number, productBottle: number) {
    prod.ProductName = productName;
    prod.ProductQte = productQte;
    prod.QteStock = productQte;
    prod.Cassier = productCassier;
    prod.Bottle = productBottle;
    prod.TotalBout = (Number(prod.Cassier) * Number(prod.NbrUnit)) + Number(productBottle);
    prod.IsModified = true;
  }

  SaveProduct() {
    var viewModel = new ProductInventoryViewModel();
    for (var i = 0; i < this.ProductCategories.length; i++) {
      var isModified = false;
      for (var j = 0; j < this.ProductCategories[i].Products.length; j++) {
        if (this.ProductCategories[i].Products[j].IsModified == true) {
          isModified = true;
        }
      }
      if (isModified)
        viewModel.ProductCategories.push(this.ProductCategories[i]);
    }

    for (var y = 0; y < viewModel.ProductCategories.length; y++) {
      viewModel.ProductCategories[y].Products = viewModel.ProductCategories[y].Products.filter(p => p.IsModified == true);
      }

    this.repo.post('api/InventoryReserv', viewModel)
      .subscribe(res => {
        this.ProductCategories = [];
        this.GetProducts();
      });
  }

  openDialog(name: string, result: any, field: any): void {
    const dialogRef = this.dialog.open(DialogResultComponent, {
      width: '250px',
      data: { name: name, result: result.innerText }
    });
    dialogRef.updatePosition({ top: '100px' });
    dialogRef.afterClosed().subscribe(res => {
      if (res == null || res == "" || res == undefined)
        result.innerText = "";
      else
        result.innerText = res;
    });
  }
}

export class ProductCategory {
  public ProductCategoryId: number;
  public ProductCategoryName: string;
  public Products: ProductViewModel[] = [];
}

export class ProductViewModel {
  public ProductId: number;
  public ProductName: string;
  public Price: number;
  public Color: string;
  public QteStock: number;
  public ProductCategoryId: number;
  public ProductQte: number;
  public UniteType: boolean;
  public Cassier: number;
  public Bottle: number;
  public TotalBout: number;
  public IsModified: boolean;
}

export class ProductInventoryViewModel {
  public ProductCategories: ProductCategory[] = [];
}
