import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DialogResultComponent } from '../dialog-result/dialog-result.component';
import { Product } from '../historique-bar/historique-bar.component';
import { RepositoryService } from '../shared/services/repository.service';

@Component({
  selector: 'app-page1812',
  templateUrl: './page1812.component.html',
  styleUrls: ['./page1812.component.scss']
})
export class Page1812Component implements OnInit {

  public Title: string;
  public Product: string;
  public Quant: string;
  public Dose: string;
  public DosageCLGR: string;
  public PriceVenteTTC: string;
  public IdealStock: string;
  public InitialStock: string;
  public StockMovement: string;
  public BoutPleines: string;
  public DoseRestante: string;
  public Entry: string;
  public Out: string;

  public BarId: number;
  public SelectedTarifId: number;

  public result: any;
  public ProductCategories: ProductCategory[] = [];
  public TarifBarList: any;
  public NewProducts: Product[] = [];

  constructor(private repo: RepositoryService, private dialog: MatDialog, private route: ActivatedRoute, private translate: TranslateService) { }

  ngOnInit() {
    this.translate.get(['page121.title', 'page121.product', 'page121.quant', 'page121.dose', 'page1812.dosageCLGR', 'page1812.priceVenteTTC', 'page1812.idealStock',
      'page1812.initialStock', 'page1812.stockMovement', 'page1812.boutPleines', 'page1812.doseRestante', 'page1812.entry', 'page1812.out'])
      .subscribe(translation => {
        this.Title = translation["page121.title"];
        this.Product = translation["page121.product"];
        this.Quant = translation["page121.quant"];
        this.Dose = translation["page121.dose"];
        this.DosageCLGR = translation["page1812.dosageCLGR"];
        this.PriceVenteTTC = translation["page1812.priceVenteTTC"];
        this.IdealStock = translation["page1812.idealStock"];
        this.InitialStock = translation["page1812.initialStock"];
        this.StockMovement = translation["page1812.stockMovement"];
        this.BoutPleines = translation["page1812.boutPleines"];
        this.DoseRestante = translation["page1812.doseRestante"];
        this.Entry = translation["page1812.entry"];
        this.Out = translation["page1812.out"];
      });

      this.SelectedTarifId = 1

    this.getBar();
    this.getProducts(1);

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

  getProducts(tarifId): void{
    let params = new HttpParams().set('barId', this.BarId).set('tarifId', this.SelectedTarifId);
    this.repo.getWithParameter('api/Page1812', {params})
    .subscribe(res => {
      console.log(res);
      this.TarifBarList = res.TarifBarList;
      for (var i = 0; i < res.Categories.length; i++) {
        var product = new ProductCategory();
        product.ProductCategoryId = res.Categories[i].ProductCategoryId;
        product.ProductCategoryName = res.Categories[i].ProductCategoryName;
        product.CoeficientReal = res.Categories[i].CoeficientReal;
        product.CoeficientRate = res.Categories[i].CoeficientRate;

        if(res.Categories[i].DosageCl != null){
          product.DosageCl = res.Categories[i].DosageCl;
        }
        else
          product.DosageCl = 0;

        product.VAT = res.Categories[i].VAT;
        product.TotalPriceHTVACompta = res.Categories[i].totalPriceHTVACompta;
        product.TVAPriceVente = res.Categories[i].tVAPriceVente;
        product.VATVente = res.Categories[i].VATVente;
        product.Products = res.Categories[i].Products;
        this.ProductCategories.push(product);
        console.log(this.ProductCategories);

        for (var j = this.ProductCategories[i].Products.length; j < 50; j++) {
          var emptyProduct = new Product();
          emptyProduct.UniteType = null;
          emptyProduct.ProductName = "";
          emptyProduct.ProductCategoryId = res.Categories[i].ProductCategoryId;

          this.ProductCategories[i].Products.push(emptyProduct);
        }
      }
    });
  }

  getBar(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.BarId = id;
  } 

  openDialogUpdate(name: string, result: any, obj: any, field: any): void {
    const dialogRef = this.dialog.open(DialogResultComponent, {
      width: '250px',
      data: { name: name, result: result.innerText }
    });
    dialogRef.updatePosition({ top: '100px' });
    dialogRef.afterClosed().subscribe(res => {
      if (res == null || res == "" || res == undefined)
        result.innerText = "";
      else{
        result.innerText = res;
        obj.IsModified = true;

        switch(field){
          case "idealStock":
            obj.IdealStock = res;
            break;
        }
      }        
    });
  }

  ValidBar() : void{
    console.log(this.ProductCategories);
    var viewModel = {
      barId: this.BarId,
      tarifId: this.SelectedTarifId,
      // viewModel: this.ProductCategories
    }

    this.repo.post('api/Page1812', viewModel)
          .subscribe(res => {

          });
  }

  tarifBarChange(result) :void{
    var newid: number = +result.substr(result.length - 1);
    this.SelectedTarifId = newid;
    this.getProducts(this.SelectedTarifId);
  }

}

export class ProductCategory {
  public ProductCategoryId: number;
  public ProductCategoryName: string;
  public VAT: number;
  public VATVente: number;
  public Products: ProductViewModel[] = [];
  public CoeficientRate: number;
  public DosageCl: number;
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
  public TotalPriceHTVACompta: number;
  public TVAPriceVente: number;
  public CoeficientReal: number;
  public DosageCl: number;
}

export class TarifBarViewModel{
  public TarifBarId: number;
  public TarifBarName: string;
}

export class ProductInventoryViewModel {
  public ProductCategories: ProductCategory[] = [];
  public TarifBarList: TarifBarViewModel[] = [];
  public TarifBarSelect: TarifBarViewModel;
}
