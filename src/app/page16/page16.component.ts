import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-page16',
  templateUrl: './page16.component.html',
  styleUrls: ['./page16.component.scss']
})
export class Page16Component implements OnInit {
  public BtnCenterText: string;
  public LbButton1: string;
  public LbButton2: string;
  public LbButton4: string;
  public LbButton3: string;

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    $('.SelectRoue').css("background-image", "url(../assets/background_4.png)");
    this.translate.get(['page16.buttonCenter', 'page16.button1', 'page16.button2', 'page16.button3', 'page16.button4'])
      .subscribe(translation => {
        this.BtnCenterText = translation['page16.buttonCenter'];
        this.LbButton1 = translation['page16.button1'];
        this.LbButton2 = translation['page16.button2'];
        this.LbButton3 = translation['page16.button3'];
        this.LbButton4 = translation['page16.button4'];
      });
  }

}
