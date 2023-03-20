import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../shared/services/repository.service';
import { ActivatedRoute } from '@angular/router';
import { HttpParams } from '@angular/common/http';

@Component({
    selector: 'app-inventory-bar',
    templateUrl: './inventory-bar.component.html',
    styleUrls: ['./inventory-bar.component.scss']
})
export class InventoryBarComponent implements OnInit {

    public BarId: number;

  public result: Product[] = [];

    constructor(private repo: RepositoryService, private route: ActivatedRoute) { }

    ngOnInit() {
      this.getBar();

      let params = new HttpParams().set('barId', this.BarId.toString());
      this.repo.getArray('api/Product')
            .subscribe(res => {
                this.result = res;
                console.log(this.result);
            })
    }

    getBar(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.BarId = id;
    }

}

export class Product {
  public ProductId: number;
  public ProductName: string;
  public Price: number;
  public Color: string;
  public QteStock: number;
  public ProductCategoryId: number;
  public ProductQte: number;
}
