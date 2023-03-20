import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-page14',
  templateUrl: './page14.component.html',
  styleUrls: ['./page14.component.scss']
})
export class Page14Component implements OnInit {
  public Title: string;

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    $('.SelectRoue').css("background-image", "url(../assets/background_6.png)");
    this.translate.get(['page14.title'])
      .subscribe(translate => {
        this.Title = translate['page14.title'];
      });
  }

}
