import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatDialogModule } from '@angular/material'

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { EnvironmentUrlService } from './shared/services/environment-url.service';
import { RepositoryService } from './shared/services/repository.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './User/login/login.component';
import { MenuComponent } from './menu/menu.component';
import { UserService } from './shared/services/user.service';
import { Page11Component } from './page11/page11.component';
import { Page111Component } from './page111/page111.component';
import { Page112Component } from './page112/page112.component';
import { Page113Component } from './page113/page113.component';
import { Page114Component } from './page114/page114.component';
import { Page115Component } from './page115/page115.component';
import { Page116Component } from './page116/page116.component';
import { Page12Component } from './page12/page12.component';
import { Page13Component } from './page13/page13.component';
import { Page14Component } from './page14/page14.component';
import { Page15Component } from './page15/page15.component';
import { Page16Component } from './page16/page16.component';
import { Page1151Component } from './page1151/page1151.component';
import { Page1152Component } from './page1152/page1152.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { DialogResultComponent } from './dialog-result/dialog-result.component';
import { Page18Component } from './page18/page18.component';
import { Page181Component } from './page181/page181.component';
import { CaisseComponent } from './caisse/caisse.component';
import { IncendieComponent } from './incendie/incendie.component';
import { AlertIncendieComponent } from './alert-incendie/alert-incendie.component';
import { SecuriteComponent } from './securite/securite.component';
import { HistoriqueBarComponent } from './historique-bar/historique-bar.component';
import { InventoryBarComponent } from './inventory-bar/inventory-bar.component';
import { AddUserComponent } from './add-user/add-user.component';
import { Page131Component } from './page131/page131.component';
import { Page1315Component } from './page1315/page1315.component';
import { Page121Component } from './page121/page121.component';
import { Page1134Component } from './page1134/page1134.component';
import { Page1812Component } from './page1812/page1812.component';
import { Page1131Component } from './page1131/page1131.component';
import { Page122Component } from './page122/page122.component';
import { Page1132Component } from './page1132/page1132.component';
import { Page1133Component } from './page1133/page1133.component';
import { Page1135Component } from './page1135/page1135.component';
import { Page1311Component } from './page1311/page1311.component';
import { Page13111Component } from './page13111/page13111.component';
import { Page1312Component } from './page1312/page1312.component';
import { Page13121Component } from './page13121/page13121.component';
import { Page13122Component } from './page13122/page13122.component';
import { Page1313Component } from './page1313/page1313.component';
import { Page123Component } from './page123/page123.component';
import { Page124Component } from './page124/page124.component';
import { Page125Component } from './page125/page125.component';
import { Page141Component } from './page141/page141.component';
import { Page142Component } from './page142/page142.component';
import { Page143Component } from './page143/page143.component';
import { Page144Component } from './page144/page144.component';
import { Page145Component } from './page145/page145.component';
import { Page146Component } from './page146/page146.component';
import { Page147Component } from './page147/page147.component';
import { Page1471Component } from './page1471/page1471.component';
import { Page14711Component } from './page14711/page14711.component';
import { Page147111Component } from './page147111/page147111.component';
import { Page14712Component } from './page14712/page14712.component';
import { Page147121Component } from './page147121/page147121.component';
import { Page14713Component } from './page14713/page14713.component';
import { Page147131Component } from './page147131/page147131.component';
import { Page14714Component } from './page14714/page14714.component';
import { Page147141Component } from './page147141/page147141.component';
import { Page14715Component } from './page14715/page14715.component';
import { Page147151Component } from './page147151/page147151.component';
import { Page1472Component } from './page1472/page1472.component';
import { Page14721Component } from './page14721/page14721.component';
import { Page14722Component } from './page14722/page14722.component';
import { Page14723Component } from './page14723/page14723.component';
import { Page14724Component } from './page14724/page14724.component';
import { Page14725Component } from './page14725/page14725.component';
import { Page147211Component } from './page147211/page147211.component';
import { Page147221Component } from './page147221/page147221.component';
import { Page147231Component } from './page147231/page147231.component';
import { Page147241Component } from './page147241/page147241.component';
import { Page147251Component } from './page147251/page147251.component';
import { Page13112Component } from './page13112/page13112.component';
import { Page131211Component } from './page131211/page131211.component';
import { Page131221Component } from './page131221/page131221.component';
import { Page13131Component } from './page13131/page13131.component';
import { Page131311Component } from './page131311/page131311.component';
import { Page13132Component } from './page13132/page13132.component';
import { Page131321Component } from './page131321/page131321.component';
import { Page1314Component } from './page1314/page1314.component';
import { Page132Component } from './page132/page132.component';
import { Page1321Component } from './page1321/page1321.component';
import { Page161Component } from './page161/page161.component';
import { Page1611Component } from './page1611/page1611.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        MenuComponent,
        Page11Component,
        Page111Component,
        Page112Component,
        Page113Component,
        Page114Component,
        Page115Component,
        Page116Component,
        Page12Component,
        Page13Component,
        Page14Component,
        Page15Component,
        Page16Component,
        Page1151Component,
        Page1152Component,
        DialogResultComponent,
        Page18Component,
        Page181Component,
        CaisseComponent,
        IncendieComponent,
        AlertIncendieComponent,
        SecuriteComponent,
        HistoriqueBarComponent,
        InventoryBarComponent,
        AddUserComponent,
        Page131Component,
        Page1315Component,
        Page121Component,
        Page1134Component,
        Page1812Component,
        Page1131Component,
        Page122Component,
        Page1132Component,
        Page1133Component,
        Page1135Component,
        Page1311Component,
        Page13111Component,
        Page1312Component,
        Page13121Component,
        Page13122Component,
        Page1313Component,
        Page123Component,
        Page124Component,
        Page125Component,
        Page141Component,
        Page142Component,
        Page143Component,
        Page144Component,
        Page145Component,
        Page146Component,
        Page147Component,
        Page1471Component,
        Page14711Component,
        Page147111Component,
        Page14712Component,
        Page147121Component,
        Page14713Component,
        Page147131Component,
        Page14714Component,
        Page147141Component,
        Page14715Component,
        Page147151Component,
        Page1472Component,
        Page14721Component,
        Page14722Component,
        Page14723Component,
        Page14724Component,
        Page14725Component,
        Page147211Component,
        Page147221Component,
        Page147231Component,
        Page147241Component,
        Page147251Component,
        Page13112Component,
        Page131211Component,
        Page131221Component,
        Page13131Component,
        Page131311Component,
        Page13132Component,
        Page131321Component,
        Page1314Component,
        Page132Component,
        Page1321Component,
        Page161Component,
        Page1611Component
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularMaterialModule,
        ReactiveFormsModule,
        FormsModule,
        AngularFontAwesomeModule,
        NgSelectModule,
        FontAwesomeModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatDialogModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        BrowserAnimationsModule
    ],
    providers: [
        EnvironmentUrlService,
        RepositoryService,
        UserService
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    entryComponents: [DialogResultComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}
