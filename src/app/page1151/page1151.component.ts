import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { RepositoryService } from '../shared/services/repository.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-page1151',
  templateUrl: './page1151.component.html',
  styleUrls: ['./page1151.component.scss']
})
export class Page1151Component implements OnInit {
  public Title: string;
  public label1: string;
  public label2: string;
  public label3: string;

  public attribReservs: any;

  public bars: [];

  constructor(private translate: TranslateService, private repo: RepositoryService) { }

  ngOnInit() {
    this.bars = [1,2,3,4,5,6,7,8,9,10];
    this.translate.get(['page1151.title', 'page1151.label1', 'page1151.label2', 'page1151.label3'])
      .subscribe(translation => {
        this.Title = translation['page1151.title'];
        this.label1 = translation['page1151.label1'];
        this.label2 = translation['page1151.label2'];
        this.label3 = translation['page1151.label3'];
      });

    this.repo.get('api/AttribReserv')
      .subscribe(res => {
        this.attribReservs = res;
        console.log(this.attribReservs);
      });

    // requires jquery library
    $(document).ready(function () {
      $(".main-table").clone(true).appendTo('#table-scroll').addClass('clone');
    });

    (function() {
      var target = $("#target")[0]; // <== Getting raw element
      $("#source").scroll(function() {
        target.scrollTop = this.scrollTop;
      });
    })();

    (function() {
      var target = $("#source")[0]; // <== Getting raw element
      $("#target").scroll(function() {
        target.scrollTop = this.scrollTop;
      });
    })();
  }

}
