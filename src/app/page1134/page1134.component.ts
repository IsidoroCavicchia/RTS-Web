import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { RepositoryService } from '../shared/services/repository.service';
import { UserService } from '../shared/services/user.service';
import { Product } from '../historique-bar/historique-bar.component';
import { DialogResultComponent } from '../dialog-result/dialog-result.component';

@Component({
  selector: 'app-page1134',
  templateUrl: './page1134.component.html',
  styleUrls: ['./page1134.component.scss']
})
export class Page1134Component implements OnInit {

  public Title: string;
  public Product: string;
  public Quant: string;
  public Dose: string;
  public Coeficient: string;
  public Consigne: string;
  public Reel: string;

  public result: any;
  public ProductCategories: ProductCategory[] = [];
  public TarifBars: TarifBar[] = [];

  constructor(private repo: RepositoryService, private userService: UserService, private translate: TranslateService, private router: Router,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.Title = "Tarifs";

    this.translate.get(['page121.title', 'page121.product', 'page121.quant', 'page121.dose', 'page1134.coeficient',
                'page1134.consigne', 'page1134.reel'])
    .subscribe(translation => {
      this.Product = translation["page121.product"];
      this.Quant = translation["page121.quant"];
      this.Dose = translation["page121.dose"];
      this.Coeficient = translation["page1134.coeficient"];
      this.Consigne = translation["page1134.consigne"];
      this.Reel = translation["page1134.reel"];
    });

    this.GetProducts();

    (function() {
      var target = $("#target")[0]; // <== Getting raw element
      $("#source").scroll(function() {
        target.scrollTop = this.scrollTop;
      });
    })();

    (function() {
      var target = $("#source")[0]; // <== Getting raw element
      $("#target").scroll(function() {
        target.scrollTop = this.scrollTop;
      });
    })();
  }

  GetProducts() {
    this.ProductCategories = [];
    this.TarifBars = [];
    this.repo.get('api/TarifBar')
      .subscribe(res => {
        for(var i = 0; i <res.TarifBars.length; i++){
          this.TarifBars.push(res.TarifBars[i]);
        }
      });
    this.repo.get('api/InventoryReserv')
      .subscribe(res => {
        for (var i = 0; i < res.Categories.length; i++) {
          var product = new ProductCategory();
          product.ProductCategoryId = res.Categories[i].ProductCategoryId;
          product.ProductCategoryName = res.Categories[i].ProductCategoryName;
          product.VAT = res.Categories[i].VAT;
          product.VATVente = res.Categories[i].VATVente;
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

  ValidTarifCompta(prod, tarifCompta) : string{
    prod.TarifCompta = tarifCompta.innerText;
    prod.IsModified = true;
    return tarifCompta + " €";
  }

  ValidTarif1(prod, tarif1) : string{
    prod.Tarif1 = tarif1.innerText;
    prod.IsModified = true;
    return tarif1 + " €";
  }

  ValidTarif2(prod, tarif2) : string{
    prod.Tarif2 = tarif2.innerText;
    prod.IsModified = true;
    return tarif2 + " €";
  }

  ValidTarifVIP(prod, tarifVIP) : string{
    prod.TarifVIP = tarifVIP.innerText;
    prod.IsModified = true;
    return tarifVIP + " €";
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

}

export class TarifBarViewModel{
  public TarifBars: TarifBar[];
  //public TarifBarProduct: any;
}

export class TarifBar{
  public TarifBarId: number;
  public TarifBarName: string;
}

export class ProductCategory {
  public ProductCategoryId: number;
  public ProductCategoryName: string;
  public VAT: number;
  public VATVente: number;
  public Products: ProductViewModel[] = [];
}

export class ProductInventoryViewModel {
  public ProductCategories: ProductCategory[] = [];
  public TarifBarList: TarifBarViewModel[] = [];
  public TarifBarSelect: TarifBarViewModel;
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
  public NbrUnit: number;
  public DosePerUnit: number;
  public Montant: number;
  public PriceAchat: number
  public PriceAchatDose: number;
  public IsModified: boolean;
  public BottleEmptyWeight: number;
  public BottleFullWeight: number;
  public WeightContenu: number;
  public WeightCl: number;
  public TarifCompta: number;
  public Tarif1: number;
  public Tarif2: number;
  public TarifVIP: number;
}