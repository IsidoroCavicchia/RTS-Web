import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { RepositoryService } from '../shared/services/repository.service';
import { faPlus, faUserMinus, faUserEdit } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-page116',
  templateUrl: './page116.component.html',
  styleUrls: ['./page116.component.scss']
})
export class Page116Component implements OnInit {
  public Title: string;
  public label1: string;

  public users: any;

  faPlus = faPlus;
  faUserMinus = faUserMinus;
  faUserEdit = faUserEdit;

  constructor(private translate: TranslateService, private repository: RepositoryService) { }

  ngOnInit() {
    this.translate.get(['page116.title', 'page116.label1'])
      .subscribe(translation => {
        this.Title = translation['page116.title'];
        this.label1 = translation['page116.label1'];
      });

    this.repository.get('api/User')
      .subscribe(res => {
        this.users = res;
      });

  }

}
