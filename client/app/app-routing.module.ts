// Angular

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Services
import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';
// Components
import { CatsComponent } from './cats/cats.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {SubscribeComponent} from './subscribe/subscribe.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PetitionFormComponent } from './petition-form/petition-form.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PopularComponent } from './browse/popular/popular.component';
import { ChatModule } from './chatbot/chat/chat.module';
import { from } from 'rxjs';
import { ChatDialogComponent } from './chatbot/chat/chat-dialog/chat-dialog.component';
import {GraphsComponent} from './graphs/graphs.component';
import { BrowseModule } from './browse/browse.module';
import { PetitionDetailComponent } from './petition-detail/petition-detail.component';
import { JointeamComponent } from './jointeam/jointeam.component';
import { PressComponent } from './press/press.component';
import { SecurityComponent } from './security/security.component';
import { TermsComponent } from './terms/terms.component';
import { PartnersComponent } from './partners/partners.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { MypetitionsComponent } from './mypetitions/mypetitions.component';

//import { PetitionFormComponent } from './petition-form/petition-form.component';


const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'start-a-petition', 
    component: CatsComponent 
    // children:
    // [{path: 'file-a-petition', component: PetitionFormComponent}]
   },
   { path: 'contact', component: ContactUsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {path: 'subscribe', component: SubscribeComponent },
  {path:'chatbot',component:ChatDialogComponent},
  { path: 'logout', component: LogoutComponent },
  { path: 'account', component: AccountComponent, canActivate: [AuthGuardLogin] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuardAdmin] },
  { path: 'notfound', component: NotFoundComponent },
  {path: 'file-a-petition/:petitionType', component: PetitionFormComponent},
  {path: 'browse-petitions', loadChildren: './browse/browse.module#BrowseModule'},
  {path:'graphs', component: GraphsComponent},
  {path:'jointeam', component: JointeamComponent},
  {path:'press', component:PressComponent},
  {path:'security', component:SecurityComponent},
  {path:'terms', component:TermsComponent},
  {path:'partners',component:PartnersComponent},
  {path:'privacy', component:PrivacyComponent},
  {path: 'my-petitions', component: MypetitionsComponent},
  {path: 'popular', component: PopularComponent},
  {path:'petition-detail/:_id', component: PetitionDetailComponent},
  { path: '**', redirectTo: '/notfound' },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
