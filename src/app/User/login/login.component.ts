import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { RepositoryService } from '../../shared/services/repository.service';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
import { UserModel } from '../../shared/Models/User.Model';
import { MatDialog } from '@angular/material';
import { DialogResultComponent } from '../../dialog-result/dialog-result.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public BtnCenterText: string;
  public LbUsername: string;
  public LbPassword: string;
  public Username = new FormControl('');
  public Password = new FormControl('');
  public result: any;

  username: string;
  password: string;

  constructor(private translate: TranslateService, private repository: RepositoryService, private router: Router, private userService: UserService,
    public dialog: MatDialog) { }

  ngOnInit() {
    $('.SelectRoue').css("background-image", "url(../assets/background_login.png)");
    this.translate.get(['page0.button1', 'page0.button2', 'page0.buttonCenter'])
      .subscribe(translation => {
        this.BtnCenterText = translation['page0.buttonCenter'];
        this.LbUsername = translation['page0.button1'];
        this.LbPassword = translation['page0.button2'];
      });
  }

  test() {
    alert(this.Username.value + " " + this.Password.value);
  }

  login() {
    alert('connection en cours');
    this.test();
    this.repository.post('api/login', {
      "Username": this.Username.value,
      "Password": this.Password.value
    }).subscribe(res => {
      this.result = res;
      if (res != null) {
        this.userService.getUser(this.result);
        alert(this.result);
        this.router.navigate(['/Menu'], { state: res });
      }
      else {
        alert('Impossible de se connecter');
      }
    });
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
