import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RepositoryService } from '../shared/services/repository.service';
import { HttpParams } from '@angular/common/http';
import { UserService } from '../shared/services/user.service';
import { UserModel } from '../shared/Models/User.Model';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

@Component({
  selector: 'app-caisse',
  templateUrl: './caisse.component.html',
  styleUrls: ['./caisse.component.scss']
})
export class CaisseComponent implements OnInit {
  public user = new UserModel;
  public ProductCategory: ProductCategory[] = [];
  public Products: Product[] = [];
  public Command: CommandProduct[] = [];
  public BarId: number;
  public Title: number;
  public Today = new Date();

  public isSelected: boolean;
  public SelectItem: string;
  public selectedName: string;

  public CommandSelected: CommandProduct;

  public TotalResum: string = "";
  public result: any;

  constructor(private route: ActivatedRoute, private repo: RepositoryService, private userService: UserService,
    private router: Router) {

    registerLocaleData(localeFr);

    setInterval(() => {
      this.Today = new Date();
    }, 1);
  }

  ngOnInit() {
    this.userService.currentUser.subscribe(user => {
      this.user = user;

      if (this.user == null) {
        alert('Veuillez vous connectez!!!');
        this.router.navigate(['']);
      }
    });
    this.Title = 0;
    this.getBar();

    this.repo.getArray('api/ProductCategory')
      .subscribe(res => {
        this.result = res;

        for (var j = 0; j < res.length; j++) {
          this.ProductCategory[j].ProductCategoryId = this.result[j].ProductCategoryId;
          this.ProductCategory[j].ProductCategoryName = this.result[j].ProductCategoryName;
        }
      });

    this.SelectCategory('1');

    for (var i = 0; i < 20; i++) {
      var tmp = new ProductCategory();

      if (i < 4)
        tmp.Color = "#E9D7FF";
      else if (i < 8)
        tmp.Color = "#D9E6F1";
      else if (i < 12)
        tmp.Color = "#E2F1DA";
      else if (i < 16)
        tmp.Color = "#FFF2CC";
      else if (i < 20)
        tmp.Color = "#FBE6D6";

      this.ProductCategory.push(tmp);
    }

  }

  getBar(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.BarId = id;
  }

  ValidBar(): void {
    this.Title++;
  }

  AddProductToTotal(productId): void {
    if (productId > 0) {
      let ifExist: boolean = false;
      var prod = this.Products.find(p => p.ProductId == productId)
      if (prod.QteStock > 0) {
        var com = new CommandProduct();
        com.quantite = 1;
        com.Product = prod;
        com.Product.ProductCategoryId = prod.ProductCategoryId;

        for (var i = 0; i < this.Command.length; i++) {
          if (this.Command[i].Product.ProductId == productId) {
            ifExist = true;
            this.Command[i].quantite++;
            this.Title += this.Command[i].Product.Price;
          }
        }

        if (!ifExist) {
          this.Command.push(com);
          this.Title += prod.Price;
        }
      }
    }

  }

  DeleteCommand() {
    if (this.CommandSelected != null) {
      this.Title = this.Title - (this.CommandSelected.quantite * this.CommandSelected.Product.Price);
      this.CommandSelected.quantite = 0;
    } else {
      this.Command = [];
      this.Title = 0;
    }
  }

  SelectCategory(id): void {
    this.Products = [];

    let params = new HttpParams().set('category', id);
    this.repo.getArrayWithParameter('api/Product', { params })
      .subscribe(pro => {
        this.result = pro;

        for (var c = 0; c < 50; c++) {
          if (this.result[c] != null) {
            this.Products[c].ProductId = this.result[c].ProductId;
            this.Products[c].ProductName = this.result[c].ProductName;
            this.Products[c].Price = this.result[c].Price;
            this.Products[c].QteStock = this.result[c].QteStock;
            this.Products[c].ProductCategoryId = this.result[c].ProductCategoryId;
          }
        }
      });

    for (var p = 0; p < 50; p++) {
      var product = new Product();

      if (p < 10)
        product.Color = "#E9D7FF";
      else if (p < 20)
        product.Color = "#D9E6F1";
      else if (p < 30)
        product.Color = "#E2F1DA";
      else if (p < 40)
        product.Color = "#FFF2CC";
      else if (p < 50)
        product.Color = "#FBE6D6";

      this.Products.push(product);
    }
  }

  ValidOrder(): void {
    if (this.user != null) {
      console.log('Commande en cours!!!');
      var order = new Order();
      order.UserId = this.user.UserId;
      order.BarId = this.BarId;

      for (var i = 0; i < this.Command.length; i++) {
        this.Command[i].Product.ProductQte = this.Command[i].quantite;
        order.Products.push(this.Command[i]);
      }
      console.log(order);
      this.repo.post('api/Order', order).subscribe(res => {
        if (alert) {
          this.Command = [];
          this.Title = 0;
        }

        alert('Résultat de la commande : ' + res)
      });
    }
    else {
      alert('Veuillez vous connectez!!!');
      this.router.navigate(['']);
    }
  }

  selectItem(com): void {
    if (this.selectedName == com.Product.ProductName) {
      this.selectedName = "";
      if (com.quantite == 0) {
        var tmp = this.Command.indexOf(this.Command.find(c => c.Product.ProductId == com.Product.ProductId));
        this.Command.splice(tmp, 1);
        this.CommandSelected = null;
      }
    } else {
      this.isSelected = true;
      this.CommandSelected = com;
      this.selectedName = com.Product.ProductName;
    }
  }

  AddQte(number) {
    if (this.CommandSelected != null) {
      var tmp = this.CommandSelected.quantite.toString();
      tmp = tmp + number;
      this.Title = this.Title - (this.CommandSelected.quantite * this.CommandSelected.Product.Price);
      this.CommandSelected.quantite = Number(tmp);
      this.Title += (this.CommandSelected.quantite * this.CommandSelected.Product.Price);
    }

  }
}

export class ProductCategory {
  public ProductCategoryId: number;
  public ProductCategoryName: string;
  public Color: string;
}

export class Product {
  public ProductId: number;
  public ProductName: string;
  public Price: number;
  public Color: string;
  public QteStock: number;
  public ProductCategoryId: number;
  public ProductQte: number;
  public UniteType: boolean;
}

export class CommandProduct {
  public quantite: number;
  public Product: Product;
}

export class Order {
  public UserId: string;
  public Products: CommandProduct[] = [];
  public BarId: number;
}
