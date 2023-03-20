import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogResultComponent } from '../dialog-result/dialog-result.component';
import { RepositoryService } from '../shared/services/repository.service';

@Component({
  selector: 'app-page1131',
  templateUrl: './page1131.component.html',
  styleUrls: ['./page1131.component.scss']
})
export class Page1131Component implements OnInit {

  public ViewModel : Page1131ViewModel = new Page1131ViewModel();
  public ReaproAutoRate: number[] = [];
  public StockAlarmRate: number[] = []

  constructor(private repo: RepositoryService, private dialog: MatDialog) { }

  ngOnInit() {
    for(var i = 5; i <= 50; i = i+ 5){
      this.ReaproAutoRate.push(i);
    }

    for(var j = 5; j <= 50; j = j + 5){
      this.StockAlarmRate.push(j);
    }

    this.getModel();
  }

  openDialogNewCategory(name: string, result: any, field: any): void {
    const dialogRef = this.dialog.open(DialogResultComponent, {
      width: '250px',
      data: { name: name, result: result.innerText }
    });
    dialogRef.updatePosition({ top: '100px' });
    dialogRef.afterClosed().subscribe(res => {
      if (res == null || res == "" || res == undefined)
        result.innerText = "";
      else
        this.newCategory(res);
        
    });
  }

  openDialogUpdateCategory(name: string, result: any, obj: any, field: any): void {
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
          case 'name':
            obj.ProductCategoryName = res;
            break;
          case 'vat':
            obj.VAT = res;
            break;
          case 'vatVente':
            obj.VATVente = res;
            break;
          case 'coeficient':
            obj.CoeficientRate = res;
            break;
          case 'dosage':
            obj.DosageCl = res;
            break;
        }
      }
        
        
    });
  }

  openDialogUpdateBar(name: string, result: any, obj: any, field: any): void {
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
          case 'renta':
            obj.RentaSeuil = res;
            break;          
        }
      }
        
        
    });
  }

  validViewModel(){
    console.log(this.ViewModel);
    this.repo.post('api/page1131', this.ViewModel)
      .toPromise()
      .then(res => {
        if(res === true){
          this.getModel();
        }
      }).catch();
  }

  getModel(){
    this.repo.get('api/page1131')
      .toPromise()
      .then(res => {
        console.log(res);
        this.ViewModel = res;
        console.log(this.ViewModel);
      }).catch();
  }

  newCategory(categoryName){
    if(categoryName != '' && categoryName != ' ' && categoryName != null){
      var category = new CategoryViewModel();
      category.VAT = 0;
      category.VATVente = 0;
      category.CoeficientRate = 0;
      category.DosageCl = null;
      category.ReaproRate = 0;
      category.AlarmStockRate = 0;
      category.ProductCategoryName = categoryName;
      this.ViewModel.Category.push(category);
    }

  }

}

export class Page1131ViewModel{
  public Category: CategoryViewModel[] = [];
  public Bars: BarViewModel[] = [];
  public Reservs: ReservViewModel[] = [];
  public Serveurs: ServeurViewModel[] = [];
}

export class CategoryViewModel{
  public ProductCategoryId: number;
  public ProductCategoryName: string;
  public VAT: number;
  public VATVente: number;
  public CoeficientRate: number;
  public DosageCl: number;
  public ReaproRate: number;
  public AlarmStockRate: number;
  public IsModified: boolean;
}

export class BarViewModel{
  public BarId: number;
  public BarName: string;
  public IsActive: boolean;
  public User: string;
  public UserId: string;
  public RentaSeuil: number;
  public TarifId: number;
  public IsModified: boolean;
}

export class ReservViewModel{
  public ReservId: number;
  public ReservName: string;
  public UserId: string;
  public IsModified: boolean;
}

export class ServeurViewModel{
  public ServerId: number;
  public ServerName: string;
  public TarifId: number;
  public UserId: string;
}
