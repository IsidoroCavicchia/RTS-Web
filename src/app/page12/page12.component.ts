import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-page12',
  templateUrl: './page12.component.html',
  styleUrls: ['./page12.component.scss']
})
export class Page12Component implements OnInit {
  public BtnCenterText: string;
  public LbButton2: string;
  public LbButton3: string;
  public LbButton4: string;
  public LbButton7: string;
  public LbButton8: string;

  faMoneyBill = faMoneyBill;

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    $('.SelectRoue').css("background-image", "url(../assets/background_5.png)");
    this.translate.get(['page12.buttonCenter', 'page12.button1', 'page12.button2', 'page12.button3', 'page12.button4', 'page12.button5'])
      .subscribe(translation => {
        this.BtnCenterText = translation['page12.buttonCenter'];
        this.LbButton2 = translation['page12.button1'];
        this.LbButton4 = translation['page12.button2'];
        this.LbButton3 = translation['page12.button3'];
        this.LbButton7 = translation['page12.button4'];
        this.LbButton8 = translation['page12.button5'];
      });
  }

}
