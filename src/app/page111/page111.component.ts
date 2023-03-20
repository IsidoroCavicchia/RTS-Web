import { Component, OnInit } from '@angular/core';
import { TarifCaisse } from '../shared/Models/TarifCaisse.Model';
import { RepositoryService } from '../shared/services/repository.service';
import { NgForm } from '@angular/forms';
import { UserModel } from '../shared/Models/User.Model';
import { MatDialog } from '@angular/material';
import { DialogResultComponent } from '../dialog-result/dialog-result.component';

@Component({
  selector: 'app-page111',
  templateUrl: './page111.component.html',
  styleUrls: ['./page111.component.scss']
})
export class Page111Component implements OnInit {

  public result: any;
  public caisse: any;
  public caisses: string[] = ['Tarif 1', 'Tarif 2', 'Tarif 3', 'Tarif 4'];
  public users: any;

  selectedUser: any;

    constructor(private repository: RepositoryService, private dialog: MatDialog) {

  }

  ngOnInit() {
    this.repository.get('api/TarifCaisse')
      .subscribe(res => {
        console.log(res);
        this.result = res;
      });

    this.repository.get('api/Caisse')
      .subscribe(res => {
        this.caisse = res;
      });

    this.repository.get('api/User')
      .subscribe(res => {
        this.users = res;
      });

    //console.log(this.users);
  }

  tarifBlur(value: string, id: number, index: number) {
    switch (index) {
      case 1:
        this.result[id - 1].Tarif1 = parseInt(value.slice(1));
        break;
      case 2:
        this.result[id - 1].Tarif2 = parseInt(value.slice(1));
        break;
      case 3:
        this.result[id - 1].Tarif3 = parseInt(value.slice(1));
        break;
      case 4:
        this.result[id - 1].Tarif4 = parseInt(value.slice(1));
        break;
      default:
    }
  }

  infoBlur(value: string, id: number) {
    this.result[id - 1].Information = value;
  }

  validate(value: any) {
    this.repository.put('api/TarifCaisse', this.result)
      .subscribe(res => {
        console.log('Caisse validé');
      });

    this.repository.put('api/Caisse', this.caisse)
      .subscribe(res => {

      });

  }

  SelectedTarif(id: number, tarifName: string) {
    this.caisse[id].Tarif = parseInt(tarifName.slice(-1));
  }

  SelectedUser(id: number, userName: string) {
    this.caisse[id].UserId = userName;
  }

  videText(text: string) {
    text = "";
    }

    openDialog(name: string, result: any): void {
        const dialogRef = this.dialog.open(DialogResultComponent, {
            width: '250px',
            data: { name: name, result: result.innerText }
        });
        dialogRef.updatePosition({ top: '100px' });
        dialogRef.afterClosed().subscribe(res => {
            if (res[0] == '€')
                result.innerText = res;
            else
                result.innerText = '€' + res;
        });
    }

}
