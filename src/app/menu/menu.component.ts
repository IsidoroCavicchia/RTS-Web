import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { UserModel } from '../shared/Models/User.Model';
import { TranslateService } from '@ngx-translate/core';
import { faCog, faMoneyBill, faCreditCard, faLock, faDoorOpen, faMale, faGlassMartini, faDatabase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public user: UserModel;

  faCog = faCog;
  faMoneyBill = faMoneyBill;
  faCreditCard = faCreditCard;
  faLock = faLock;
  faDoorOpen = faDoorOpen;
  faMale = faMale;
  faGlass = faGlassMartini;
  faDatabase = faDatabase;

  public BtnCenterText: string;
  public LbButton1: string;
  public LbButton2: string;
  public LbButton4: string;
  public LbButton3: string;
  public LbButton5: string;
  public LbButton6: string;
  public LbButton7: string;
  public LbButton8: string;
  public LbButton9: string;
  public LbButton10: string;

  constructor(private userService: UserService, private translate: TranslateService) {
  }

  ngOnInit() {
    this.userService.currentUser.subscribe(user => this.user = user);
    console.log(this.user);

    this.translate.get(['page1.buttonCenter', 'page1.button1', 'page1.button2', 'page1.button3', 'page1.button4', 'page1.button5',
      'page1.button6', 'page1.button7', 'page1.button8', 'page1.button9', 'page1.button10'])
      .subscribe(translation => {
        this.BtnCenterText = translation['page1.buttonCenter'];
        this.LbButton1 = translation['page1.button1'];
        this.LbButton2 = translation['page1.button2'];
        this.LbButton4 = translation['page1.button3'];
        this.LbButton3 = translation['page1.button4'];
        this.LbButton5 = translation['page1.button5'];
        this.LbButton6 = translation['page1.button6'];
        this.LbButton7 = translation['page1.button7'];
        this.LbButton8 = translation['page1.button8'];
        this.LbButton9 = translation['page1.button9'];
        this.LbButton10 = translation['page1.button10'];
      });
  }

}
