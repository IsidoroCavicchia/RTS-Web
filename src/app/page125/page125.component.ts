import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Product } from '../historique-bar/historique-bar.component';
import { RepositoryService } from '../shared/services/repository.service';

@Component({
  selector: 'app-page125',
  templateUrl: './page125.component.html',
  styleUrls: ['./page125.component.scss']
})
export class Page125Component implements OnInit {

  public result: any;
  public ProductCategories: ProductCategory[] = [];

  constructor(private repo: RepositoryService, private translate: TranslateService) { }

  ngOnInit() {
    this.GetProducts(1);

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

  GetProducts(tarifId) {
    this.ProductCategories = [];
    let params = new HttpParams().set('tarifId', this.SelectedTarifId);
    this.repo.getWithParameter('api/page122', {params})
      .subscribe(res => {
        this.ProductCategories.TarifBarList = res.TarifBarList;
        this.ProductCategories.TarifBarSelect = res.TarifBarSelect
        for (var i = 0; i < res.Categories.length; i++) {
          var product = new ProductCategory();
          product.ProductCategoryId = res.Categories[i].ProductCategoryId;
          product.ProductCategoryName = res.Categories[i].ProductCategoryName;
          product.CoeficientReal = res.Categories[i].CoeficientReal;
          product.CoeficientRate = res.Categories[i].CoeficientRate;
          product.VAT = res.Categories[i].VAT;
          product.TotalPriceHTVACompta = res.Categories[i].totalPriceHTVACompta;
          product.TVAPriceVente = res.Categories[i].tVAPriceVente;
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

      console.log(this.ProductCategories);
  }

}

export class ProductCategory {
  public ProductCategoryId: number;
  public ProductCategoryName: string;
  public VAT: number;
  public VATVente: number;
  public Products: ProductViewModel[] = [];
  public CoeficientRate: number;
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

