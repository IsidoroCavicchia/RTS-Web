import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../shared/services/user.service';
import { UserModel } from '../shared/Models/User.Model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page1311',
  templateUrl: './page1311.component.html',
  styleUrls: ['./page1311.component.scss']
})
export class Page1311Component implements OnInit {

  public user = new UserModel;

  faDatabase = faDatabase;

  constructor(private userService: UserService, private translate: TranslateService, private router: Router) { }

  ngOnInit() {
    $('.SelectRoue').css("background-image", "url(../assets/background_login.png)");

    }

}
