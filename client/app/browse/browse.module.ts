import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowseRoutingModule} from './browse-routing.module';
import { PopularComponent } from './popular/popular.component';
import {BrowseComponent} from './browse.component';
import { RecentComponent } from './recent/recent.component';
import { VictoriesComponent } from './victories/victories.component';
import { FooterComponent } from '../footer/footer.component';
import { PetitionDetailComponent } from '../petition-detail/petition-detail.component';


@NgModule({
  declarations: [
      PopularComponent,
      BrowseComponent,
      RecentComponent,
      VictoriesComponent
      //PetitionDetailComponent
      //FooterComponent
  ],
  imports: [
    CommonModule,
    BrowseRoutingModule
  ]
})
export class BrowseModule { }
