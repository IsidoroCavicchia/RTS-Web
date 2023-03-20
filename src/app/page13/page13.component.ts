import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-page13',
  templateUrl: './page13.component.html',
  styleUrls: ['./page13.component.scss']
})
export class Page13Component implements OnInit {
  faDatabase = faDatabase;

  public BtnCenterText: string;
  public LbButton1: string;
  public LbButton2: string;
  public LbButton4: string;
  public LbButton3: string;

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    $('.SelectRoue').css("background-image", "url(../assets/background_4bis.png)");
    this.translate.get(['page13.buttonCenter', 'page13.button1', 'page13.button2', 'page13.button3', 'page13.button4'])
      .subscribe(translation => {
        this.BtnCenterText = translation['page13.buttonCenter'];
        this.LbButton1 = translation['page13.button1'];
        this.LbButton2 = translation['page13.button2'];
        this.LbButton3 = translation['page13.button3'];
        this.LbButton4 = translation['page13.button4'];
      });
  }

}
