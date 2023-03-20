import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { RepositoryService } from '../shared/services/repository.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-page1152',
  templateUrl: './page1152.component.html',
  styleUrls: ['./page1152.component.scss']
})
export class Page1152Component implements OnInit {
    
    public Title: string;
    public label1: string;
    public label2: string;

    public user: any;

    public bars: [];

    constructor(private translate: TranslateService, private repo: RepositoryService) { }

    ngOnInit() {
        this.bars = [1,2,3,4,5,6,7,8,9,10];
        this.translate.get(['page1152.title', 'page1152.label1', 'page1152.label2'])
            .subscribe(translation => {
                this.Title = translation['page1152.title'];
                this.label1 = translation['page1152.label1'];
                this.label2 = translation['page1152.label2'];
            })

        let params = new HttpParams().set('roleName', 'Serveur');
        this.repo.getWithParameter('api/UserRole', { params }).subscribe(res => {
            this.user = res;
            console.log(res);
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
