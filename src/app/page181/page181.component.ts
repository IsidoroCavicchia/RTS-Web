import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { faGlassMartini } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../shared/services/user.service';
import { UserModel } from '../shared/Models/User.Model';

@Component({
    selector: 'app-page181',
    templateUrl: './page181.component.html',
    styleUrls: ['./page181.component.scss']
})
export class Page181Component implements OnInit {
    public user = new UserModel;
    public BarId: number;
    public LbBtn1: string;
    public LbBtn2: string;
    public LbBtn3: string;

    faGlass = faGlassMartini;

    constructor(private route: ActivatedRoute, private translate: TranslateService, private router: Router, private userService: UserService) {
        this.translate.get(['page181.button1', 'page181.button2', 'page181.button3'])
            .subscribe(translation => {
                this.LbBtn1 = translation['page181.button1'];
                this.LbBtn2 = translation['page181.button2'];
                this.LbBtn3 = translation['page181.button3'];
            });


        this.userService.currentUser.subscribe(user => {
            this.user = user
        });
    }

    ngOnInit() {
        this.getBar();
    }

    getBar(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.BarId = id;
    }

    goToCaisse(url, id) {
        this.router.navigate([url, id]).then((e) => {
            if (e) {
                console.log('good');
            } else {
                console.log('not good');
            }
        });
    }

}
