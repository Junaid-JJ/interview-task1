import { TrendingComponent } from './components/trending/trending.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GiphyDisplayComponent } from './components/giphy-display/giphy-display.component';


const routes: Routes = [
  {path: '', component: TrendingComponent},

  {path: 'search', component: GiphyDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
