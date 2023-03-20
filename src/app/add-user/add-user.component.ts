import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { DialogResultComponent } from '../dialog-result/dialog-result.component';
import { RepositoryService } from '../shared/services/repository.service';

@Component({
  selector: 'addUser',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  public BtnCenterLabel: string;

  public Result: any;

  public Username = new FormControl('');
  public Password = new FormControl('');
  public ConfirmPassword = new FormControl('');
  public Name = new FormControl('');

  username: string;
  password: string;
  confirmPassword: string;
  name: string;

  constructor(private translate: TranslateService, private dialog: MatDialog, private repo: RepositoryService) { }

  ngOnInit() {
    $('.SelectRoue').css("background-image", "url(../assets/background_4.png)");
    this.translate.get(["addUser.buttonCenter"])
      .subscribe(translation => {
        this.BtnCenterLabel = translation["addUser.buttonCenter"];
      });
  }

  AddUser() {
    if (this.Password.value == this.ConfirmPassword.value) {
      var user = new UserViewModel();

      user.Pseudo = this.Username.value;
      user.Password = this.Password.value;
      user.Name = this.Name.value;

      this.repo.post("api/user", user).subscribe(res => {
        this.Result = res;
      })

      console.log(this.Result);

    }
    else {
      alert("Veuillez vérifier votre mot de passe");
    }
  }

  openDialog(name: string, result: any, field: any): void {
    const dialogRef = this.dialog.open(DialogResultComponent, {
      width: '250px',
      data: { name: name, result: result.value }
    });
    dialogRef.updatePosition({ top: '100px' });
    dialogRef.afterClosed().subscribe(res => {
      result.value = res;
      field.value = res;
    });
  }

}

export class UserViewModel {
  public Pseudo: string;
  public Password: string;
  public Name: string;
}
