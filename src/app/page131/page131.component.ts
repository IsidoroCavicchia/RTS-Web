import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../shared/services/user.service';
import { UserModel } from '../shared/Models/User.Model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page131',
  templateUrl: './page131.component.html',
  styleUrls: ['./page131.component.scss']
})
export class Page131Component implements OnInit {
  public user = new UserModel;

  public BtnCenterText: string;
  public LbButton1: string;
  public LbButton2: string;
  public LbButton4: string;
  public LbButton3: string;
  public LbButton5: string;

  faDatabase = faDatabase;

  constructor(private userService: UserService, private translate: TranslateService, private router: Router) { }

  ngOnInit() {
    $('.SelectRoue').css("background-image", "url(../assets/background_5.png)");
    this.translate.get(['page131.buttonCenter', 'page131.button1', 'page131.button2', 'page131.button3', 'page131.button4', 'page131.button5'])
      .subscribe(translation => {
        this.BtnCenterText = translation['page131.buttonCenter'];
        this.LbButton1 = translation['page131.button1'];
        this.LbButton2 = translation['page131.button2'];
        this.LbButton4 = translation['page131.button3'];
        this.LbButton3 = translation['page131.button4'];
        this.LbButton5 = translation['page131.button5'];
      });

    //this.userService.currentUser.subscribe(user => {
    //  this.user = user;

    //  if (this.user == null) {
    //    alert('Veuillez vous connectez!!!');
    //    this.router.navigate(['']);
    //  }
    //});
  }

}
