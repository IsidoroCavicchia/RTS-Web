import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../shared/services/repository.service';
import { ActivatedRoute } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

@Component({
  selector: 'app-historique-bar',
  templateUrl: './historique-bar.component.html',
  styleUrls: ['./historique-bar.component.scss']
})
export class HistoriqueBarComponent implements OnInit {

  public BarId: number;

  public orders: any;

  constructor(private repo: RepositoryService, private route: ActivatedRoute) {
    registerLocaleData(localeFr);
  }

  ngOnInit() {
    this.getBar();

    let params = new HttpParams().set('barId', this.BarId.toString());
    this.repo.getArrayWithParameter('api/HistoriqueBar', { params })
      .subscribe(res => {
        this.orders = res;
        console.log(this.orders);
      });
  }

  getBar(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.BarId = id;
  }

}

export class ProductOrderViewModel {
  public order: Order;
  public productsOrder: ProductOrder[] = [];
}

export class Order {
  public orderId: string;
  public userId: string;
  public orderDate: Date;
  public totalPrice: number;
  public barId: number;
}

export class ProductOrder {
  public productOrderId: number;
  public productId: number;
  public productQte: number;
  public orderId: string;
  public product: Product;
}

export class Product {
  public productId: number;
  public productName: string;
}
