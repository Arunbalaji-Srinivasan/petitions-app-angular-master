import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowseComponent } from './browse.component';
import { Routes, RouterModule } from '@angular/router';
import { PopularComponent } from './popular/popular.component';
import { RecentComponent} from './recent/recent.component';
import {VictoriesComponent} from './victories/victories.component';
import { PetitionDetailComponent } from '../petition-detail/petition-detail.component';
const routes: Routes = [
  {
    path: '', 
    component: BrowseComponent,
    children:[
     // {path: '', component: BrowseComponent},
      {path: 'popular', component: PopularComponent},
      //{path:'petition-detail', component: PetitionDetailComponent},
      {path: 'recent', component: RecentComponent},
      {path: 'victories', component: VictoriesComponent}
    ]
  },
  
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class BrowseRoutingModule { }
