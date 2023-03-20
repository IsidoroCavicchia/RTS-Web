import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { faGlassMartini } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-page113',
  templateUrl: './page113.component.html',
  styleUrls: ['./page113.component.scss']
})
export class Page113Component implements OnInit {
  public LbButton2: string;
  public LbButton3: string;
  public LbButton4: string;
  public LbButton7: string;
  public LbButton8: string;
  public BtnCenterText: string;
  
  public faGlass = faGlassMartini;
  
  constructor(private translate: TranslateService) { }

  ngOnInit() {
    $('.SelectRoue').css("background-image", "url(../assets/background_5.png)");
    this.translate.get(['page113.button1', 'page113.button2', 'page113.button3', 'page113.button4', 'page113.button5', 'page113.buttonCenter'])
      .subscribe(translation => {
        this.BtnCenterText = translation['page113.buttonCenter'];
        this.LbButton2 = translation['page113.button1'];
        this.LbButton3 = translation['page113.button2'];
        this.LbButton4 = translation['page113.button3'];
        this.LbButton7 = translation['page113.button4'];
        this.LbButton8 = translation['page113.button5'];
      })
  }

}
