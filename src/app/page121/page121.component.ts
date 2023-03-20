import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../shared/services/repository.service';
import { UserService } from '../shared/services/user.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { Product } from '../historique-bar/historique-bar.component';
import { DialogResultComponent } from '../dialog-result/dialog-result.component';
import * as $ from 'jquery';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-page121',
  templateUrl: './page121.component.html',
  styleUrls: ['./page121.component.scss']
})
export class Page121Component implements OnInit {

  public Title: string;
  public Product: string;
  public Quant: string;
  public Dose: string;
  public Achat: string;
  public NbrUnit: string;
  public DosePerUnit: string;
  public TVA: string;
  public Taux: string;
  public Montant: string;
  public Prix: string;
  public Poids: string;
  public BoutPlein: string;
  public BoutVide: string;
  public Contenu: string;
  public PoidCl: string;
  public Vente: string;
  public PrixVente: string;
  public Htva: string;
  public Ttc: string;
  public Coeficient: string;
  public Voulu: string;
  public Reel: string;
  public Tarifs: string;

  public SelectedTarifId: number;

  public result: any;
  public ProductCategories: ProductCategory[] = [];
  public NewProducts: Product[] = [];

  constructor(private repo: RepositoryService, private userService: UserService, private translate: TranslateService, private router: Router,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.translate.get(['page121.title', 'page121.product', 'page121.quant', 'page121.dose', 'page121.achat', 'page121.nbrUnit', 'page121.dosePerUnit', 'page121.tva',
    'page121.taux', 'page121.montant', 'page121.prix', 'page121.poids', 'page121.boutPlein', 'page121.boutVide', 'page121.contenu', 'page121.poidCl',
    'page121.vente', 'page121.prixVente', 'page121.htva', 'page121.ttc', 'page121.coeficient', 'page121.voulu', 'page1134.reel',
    'page113.button4'])
      .subscribe(translation => {
        this.Title = translation["page121.title"];
        this.Product = translation["page121.product"];
        this.Quant = translation["page121.quant"];
        this.Dose = translation["page121.dose"];
        this.Achat = translation["page121.achat"];
        this.NbrUnit = translation["page121.nbrUnit"];
        this.DosePerUnit = translation["page121.dosePerUnit"];
        this.TVA = translation["page121.tva"];
        this.Taux = translation["page121.taux"];
        this.Montant = translation["page121.montant"];
        this.Prix = translation["page121.prix"];
        this.Poids = translation["page121.poids"];
        this.BoutPlein = translation["page121.boutPlein"];
        this.BoutVide = translation["page121.boutVide"];
        this.Contenu = translation["page121.contenu"];
        this.PoidCl = translation["page121.poidCl"];
        this.Vente = translation["page121.vente"];
        this.PrixVente = translation["page121.prixVente"];
        this.Htva = translation["page121.htva"];
        this.Ttc = translation["page121.ttc"];
        this.Coeficient = translation["page121.coeficient"];
        this.Voulu = translation["page121.voulu"];
        this.Reel = translation["page1134.reel"];
        this.Tarifs = translation["page113.button4"];
      });

    this.SelectedTarifId = 1;
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
    this.repo.getWithParameter('api/InventoryReserv', {params})
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

  ValidProductName(prod, productName) {
    prod.ProductName = productName;
    prod.IsModified = true;
  }

  ValidProductQte(prod, productQte){
    prod.ProductQte = productQte;
    prod.QteStock = productQte;
    prod.IsModified = true;
  }

  ValidNbrUnit(prod, nbrUnit){
    prod.NbrUnit = nbrUnit;
    prod.IsModified = true;
  }

  ValidDosePerUnit(prod, dosePerUnit){
    prod.DosePerUnit = dosePerUnit;
    prod.IsModified = true;
  }

  ValidPrice(prod, price){
    prod.PriceAchat = price;
    prod.IsModified = true;
  }

  ValidWeight(prod, bottleFullWeight, bottleEmptyWeight){
    prod.BottleFullWeight = bottleFullWeight;
    prod.BottleEmptyWeight = bottleEmptyWeight;
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
        this.GetProducts(this.SelectedTarifId);
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

  openDialogCoeficient(name: string, result: any, field: any): void {
    const dialogRef = this.dialog.open(DialogResultComponent, {
      width: '250px',
      data: { name: name, result: result.innerText }
    });
    dialogRef.updatePosition({ top: '100px' });
    dialogRef.afterClosed().subscribe(res => {
      result.CoeficientRate = res;
      field.innerText = res;

      this.repo.post('api/ProductCategory', result)
        .subscribe(res => {
          this.ProductCategories = [];
          this.GetProducts(this.SelectedTarifId);
        });


    });
  }

  openDialogVAT(name: string, result: any, field: any): void {
    const dialogRef = this.dialog.open(DialogResultComponent, {
      width: '250px',
      data: { name: name, result: result.VAT }
    });
    dialogRef.updatePosition({ top: '100px' });
    dialogRef.afterClosed().subscribe(res => {

      result.VAT = res;
      field.innerText = res;

      this.repo.post('api/ProductCategory', result)
        .subscribe(res => {
          this.ProductCategories = [];
          this.GetProducts(this.SelectedTarifId);
        });


    });
  }

  openDialogVATVente(name: string, result: any, field: any): void {
    console.log('vente ' + field.innerText);
    const dialogRef = this.dialog.open(DialogResultComponent, {
      width: '250px',
      data: { name: name, result: result.VATVente }
    });
    dialogRef.updatePosition({ top: '100px' });
    dialogRef.afterClosed().subscribe(res => {

      result.VATVente = res;
      field.innerText = res;

      this.repo.post('api/ProductCategory', result)
        .subscribe(res => {
          this.ProductCategories = [];
          this.GetProducts(this.SelectedTarifId);
        });


    });
  }

  tarifBarChange(result) :void{
    var newid: number = +result.substr(result.length - 1);
    this.SelectedTarifId = newid;
    this.GetProducts(this.SelectedTarifId);
  }

  isNumber(val): boolean { return typeof val === 'number'; }

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
