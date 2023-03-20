import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { faDatabase, faBeer } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-page115',
  templateUrl: './page115.component.html',
  styleUrls: ['./page115.component.scss']
})
export class Page115Component implements OnInit {
  public BtnCenterText: string;
  public LbButton3: string;
  public LbButton8: string;

  faDatabase = faDatabase;
  faBeer = faBeer;

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    $('.SelectRoue').css("background-image", "url(../assets/background_login.png)");
    this.translate.get(['page115.buttonCenter', 'page115.button1', 'page115.button2'])
      .subscribe(translation => {
        this.BtnCenterText = translation['page115.buttonCenter'];
        this.LbButton3 = translation['page115.button1'];
        this.LbButton8 = translation['page115.button2'];
      })
  }

}
