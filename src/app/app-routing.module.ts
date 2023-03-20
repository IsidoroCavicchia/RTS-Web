import { NgModule } from '@angular/core';
import { LoginComponent } from './User/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
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
import { Page147211Component } from './page147211/page147211.component';
import { Page14722Component } from './page14722/page14722.component';
import { Page147221Component } from './page147221/page147221.component';
import { Page14723Component } from './page14723/page14723.component';
import { Page147231Component } from './page147231/page147231.component';
import { Page14724Component } from './page14724/page14724.component';
import { Page147241Component } from './page147241/page147241.component';
import { Page14725Component } from './page14725/page14725.component';
import { Page147251Component } from './page147251/page147251.component';
import { Page16Component } from './page16/page16.component';
import { Page15Component } from './page15/page15.component';
import { Page1151Component } from './page1151/page1151.component';
import { Page1152Component } from './page1152/page1152.component';
import { Page18Component } from './page18/page18.component';
import { Page181Component } from './page181/page181.component';
import { CaisseComponent } from './caisse/caisse.component';
import { IncendieComponent } from './incendie/incendie.component';
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
import { Page1132Component } from './page1132/page1132.component';
import { Page1133Component } from './page1133/page1133.component';
import { Page1135Component } from './page1135/page1135.component';
import { Page122Component } from './page122/page122.component';
import { Page123Component } from './page123/page123.component';
import { Page124Component } from './page124/page124.component';
import { Page125Component } from './page125/page125.component';
import { Page1311Component } from './page1311/page1311.component';
import { Page13111Component } from './page13111/page13111.component';
import { Page13112Component } from './page13112/page13112.component';
import { Page1312Component } from './page1312/page1312.component';
import { Page13121Component } from './page13121/page13121.component';
import { Page131211Component } from './page131211/page131211.component';
import { Page13122Component } from './page13122/page13122.component';
import { Page131221Component } from './page131221/page131221.component';
import { Page1313Component } from './page1313/page1313.component';
import { Page13131Component } from './page13131/page13131.component';
import { Page131311Component } from './page131311/page131311.component';
import { Page13132Component } from './page13132/page13132.component';
import { Page131321Component } from './page131321/page131321.component';
import { Page132Component } from './page132/page132.component';
import { Page1321Component } from './page1321/page1321.component';
import { Page1314Component } from './page1314/page1314.component';
import { Page161Component } from './page161/page161.component';
import { Page1611Component } from './page1611/page1611.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'Menu', component: MenuComponent },
  { path: '11', component: Page11Component },
  { path: '111', component: Page111Component },
  { path: '112', component: Page112Component },
  { path: '113', component: Page113Component },
  {path: '1134', component: Page1134Component},
  { path: '114', component: Page114Component },
  { path: '115', component: Page115Component },
  { path: '1151', component: Page1151Component },
  { path: '1152', component: Page1152Component },
  { path: '116', component: Page116Component },
  { path: '12', component: Page12Component },
  { path: '121', component: Page121Component },
  { path: '13', component: Page13Component },
  { path: '131', component: Page131Component },
  { path: '1315', component: Page1315Component },
  { path: '14', component: Page14Component },
  { path: '15', component: Page15Component },
  { path: '16', component: Page16Component },
  { path: '18', component: Page18Component },
  { path: '181/:id', component: Page181Component },
  { path: 'caisse/:id', component: CaisseComponent },
  { path: 'incendie/:id', component: IncendieComponent },
  { path: 'securite/:id', component: SecuriteComponent },
  { path: 'historique/:id', component: HistoriqueBarComponent },
  { path: 'inventory/:id', component: InventoryBarComponent },
  { path: 'addUser', component: AddUserComponent },
  { path: '1812/:id', component: Page1812Component },
  { path: '1131', component: Page1131Component },
  { path: '122', component: Page122Component},
  { path: '1132', component: Page1132Component},
  {path: '1133', component: Page1133Component},
  {path: '1135', component: Page1135Component},
  {path: '1311', component: Page1311Component},
  {path: '13111', component: Page13111Component},
  {path: '13112', component: Page13112Component},
  {path: '1312', component: Page1312Component},
  {path: '13121', component: Page13121Component},
  {path: '131211/:id', component: Page131211Component},
  {path: '13122', component: Page13122Component},
  {path: '131221/:id', component: Page131221Component},
  {path: '1313', component: Page1313Component},
  {path: '13131', component: Page13131Component},
  {path: '131311/:id', component: Page131311Component},
  {path: '13132', component: Page13132Component},
  {path: '131321/:id', component: Page131321Component},
  {path: '123', component: Page123Component},
  {path: '124', component: Page124Component},
  {path: '125', component: Page125Component},
  {path: '141', component: Page141Component},
  {path: '142', component: Page142Component},
  {path: '143', component: Page143Component},
  {path: '144', component: Page144Component},
  {path: '145', component: Page145Component},
  {path: '146', component: Page146Component},
  {path: '147', component: Page147Component},
  {path: '1471', component: Page1471Component},
  {path: '14711', component: Page14711Component},
  {path: '147111/:id', component: Page147111Component},
  {path: '14712', component: Page14712Component},
  {path: '147121/:id', component: Page147121Component},
  {path: '14713', component: Page14713Component},
  {path: '147131/:id', component: Page147131Component},
  {path: '14714', component: Page14714Component},
  {path: '147141/:id', component: Page147141Component},
  {path: '14715', component: Page14715Component},
  {path: '147151/:id', component: Page147151Component},
  {path: '1472', component: Page1472Component},
  {path: '14721', component: Page14721Component},
  {path: '147211/:id', component: Page147211Component},
  {path: '14722', component: Page14722Component},
  {path: '147221/:id', component: Page147221Component},
  {path: '14723', component: Page14723Component},
  {path: '147231/:id', component: Page147231Component},
  {path: '14724', component: Page14724Component},
  {path: '147241/:id', component: Page147241Component},
  {path: '14725', component: Page14725Component},
  { path: '147251/:id', component: Page147251Component },
  { path: '132/:id', component: Page132Component },
  { path: '1321/:id', component: Page1321Component },
  { path: '1314', component: Page1314Component },
  { path: '161/:id', component: Page161Component },
  { path: '1611/:id', component: Page1611Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
