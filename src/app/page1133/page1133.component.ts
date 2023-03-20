import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RepositoryService } from '../shared/services/repository.service';

@Component({
  selector: 'app-page1133',
  templateUrl: './page1133.component.html',
  styleUrls: ['./page1133.component.scss']
})
export class Page1133Component implements OnInit {

  public viewModel: Page1133ViewModel;
  public bars: [];

  constructor(private repo: RepositoryService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getProduct();
    this.bars = [1,2,3,4,5,6,7,8,9,10];

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

  getProduct() :void{
    this.repo.get('api/Page1133')
    .toPromise()
    .then(res => {
      this.viewModel = res;
      console.log(this.viewModel);
        }).catch();
  }

}

export class Page1133ViewModel{
  public Categories: [];
}
