import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Product } from '../caisse/caisse.component';
import { ProductCategory } from '../page121/page121.component';
import { RepositoryService } from '../shared/services/repository.service';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-page1314',
  templateUrl: './page1314.component.html',
  styleUrls: ['./page1314.component.scss']
})
export class Page1314Component implements OnInit {

  Title: string = "Réserve Centrale";

  public result: any;
  public ProductCategories: ProductCategory[] = [];
  public NewProducts: Product[] = [];

  constructor(private repo: RepositoryService, private userService: UserService, private translate: TranslateService, private router: Router) { }

  ngOnInit() {
    this.GetProducts();

    (function () {
      var target = $("#target")[0]; // <== Getting raw element
      $("#source").scroll(function () {
        target.scrollTop = this.scrollTop;
      });
    })();

    (function () {
      var target = $("#source")[0]; // <== Getting raw element
      $("#target").scroll(function () {
        target.scrollTop = this.scrollTop;
      });
    })();
  }

  GetProducts() {
    this.ProductCategories = [];
    /*let params = new HttpParams().set('tarifId', this.SelectedTarifId);*/
    this.repo.get('api/InventoryReserv')
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
