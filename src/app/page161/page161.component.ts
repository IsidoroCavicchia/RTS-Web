import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-page161',
  templateUrl: './page161.component.html',
  styleUrls: ['./page161.component.scss']
})
export class Page161Component implements OnInit {

  public BtnCenterText: string;
  public LbButton1: string;
  public LbButton2: string;

  public barId: number;

  constructor(private translate: TranslateService,
              private route: ActivatedRoute) {
   }

  ngOnInit() {
    $('.SelectRoue').css("background-image", "url(../assets/background_login.png)");

    const id = +this.route.snapshot.paramMap.get('id');
    this.barId = id;

    this.translate.get(['page161.caisse', 'page161.historic'])
    .subscribe(translation => {
      this.BtnCenterText = translation['page161.caisse'] + ' ' + this.barId;
      this.LbButton1 = translation['page161.caisse'];
      this.LbButton2 = translation['page161.historic'];
    });
  }

}
