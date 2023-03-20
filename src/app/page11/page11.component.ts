import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { faMoneyBill, faMale, faGlassMartini, faTasks } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-page11',
  templateUrl: './page11.component.html',
  styleUrls: ['./page11.component.scss']
})
export class Page11Component implements OnInit {
  public faMoney = faMoneyBill;
  public faMale = faMale;
  public faGlass = faGlassMartini;
  public faTasks = faTasks;

  public BtnCenterText: string;
  public LbButton2: string;
  public LbButton3: string;
  public LbButton4: string;
  public LbButton7: string;
  public LbButton8: string;
  public LbButton9: string;

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    $('.SelectRoue').css("background-image", "url(../assets/background_6.png)");
    this.translate.get(['page11.buttonCenter', 'page11.button1', 'page11.button2', 'page11.button3', 'page11.button4', 'page11.button5',
      'page11.button6'])
      .subscribe(translation => {
        this.BtnCenterText = translation['page11.buttonCenter'];
        this.LbButton2 = translation['page11.button1'];
        this.LbButton3 = translation['page11.button2'];
        this.LbButton4 = translation['page11.button3'];
        this.LbButton7 = translation['page11.button4'];
        this.LbButton8 = translation['page11.button5'];
        this.LbButton9 = translation['page11.button6'];
      });
  }
}
