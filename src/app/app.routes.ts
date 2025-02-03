import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {BestPageComponent} from './best-page/best-page.component';
import {RouteNetworkComponent} from './route-network/route-network.component';
import {RoadwaysComponent} from './roadways/roadways.component';
import {MetroComponent} from './metro/metro.component';

export const routes: Routes = [
  {path: 'roadways/best', component: BestPageComponent},
  {path: 'roadways/best/route-network', component: RouteNetworkComponent},
  {path: 'roadways', component: RoadwaysComponent},
  {path: 'metro', component: MetroComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
