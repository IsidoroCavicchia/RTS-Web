import { Component, OnInit } from '@angular/core';
import { faGlassMartini } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { RepositoryService } from '../shared/services/repository.service';

@Component({
    selector: 'app-page18',
    templateUrl: './page18.component.html',
    styleUrls: ['./page18.component.scss']
})
export class Page18Component implements OnInit {

    faGlass = faGlassMartini;

    public Bars: BarViewModel[] = [];

    constructor(private router: Router, private repo: RepositoryService) { }

    ngOnInit() {
        this.repo.get('api/bar')
            .toPromise().then(res => {
                this.Bars = res;
            });
    }

    goToBar(url, id) {
        this.router.navigate([url, id]).then((e) => {
            if (e) {
                console.log('good');
            } else {
                console.log('not good');
            }
        });
    }

    isActive(id){
        return this.Bars[id].IsActive;
    }


}

export class BarViewModel{
    public BarId: number;
    public BarName: string;
    public IsActive: boolean;
    public UserId: string;
}
