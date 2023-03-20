import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { RepositoryService } from '../shared/services/repository.service';

@Component({
  selector: 'app-page114',
  templateUrl: './page114.component.html',
  styleUrls: ['./page114.component.scss']
})
export class Page114Component implements OnInit {
  public Title: string;
  public caisses: string[] = ['Tarif 1', 'Tarif 2', 'Tarif 3', 'Tarif 4'];
  public tarifWC: any;
  public WC: any;
  public users: any;

  constructor(private translate: TranslateService, private repo: RepositoryService) { }

  ngOnInit() {
    this.translate.get(['page114.title'])
      .subscribe(translation => {
        this.Title = translation['page114.title']
      });

    this.repo.get('api/TarifWC')
      .subscribe(res => {
        this.tarifWC = res;
      });

    this.repo.get('api/WC')
      .subscribe(res => {
        this.WC = res;
      });

    this.repo.get('api/user')
      .subscribe(res => {
        this.users = res;
      });
  }

}
