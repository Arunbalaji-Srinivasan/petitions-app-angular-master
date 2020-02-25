// Angular
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
// Modules
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import {NgxTypedJsModule} from 'ngx-typed-js';

// Services
import { CatService } from './services/cat.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';
// Components
import { AppComponent } from './app.component';
import { CatsComponent } from './cats/cats.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PetitionFormComponent } from './petition-form/petition-form.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { DragDropFileUploadDirective } from './drag-drop-file-upload.directive';
import { DragDropComponent } from './drag-drop/drag-drop.component';

import { SubscribeComponent } from './subscribe/subscribe.component';
import { NgxPayPalModule } from 'ngx-paypal';

import {ChatModule}  from '../app/chatbot/chat/chat.module';
import {BrowserModule} from '@angular/platform-browser';
import { JointeamComponent } from './jointeam/jointeam.component';
import { PressComponent } from './press/press.component';
import { PartnersComponent } from './partners/partners.component';
import { TermsComponent } from './terms/terms.component';
import { SecurityComponent } from './security/security.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { from } from 'rxjs';

//import { BrowseComponent } from './browse/browse.component';
//import { PopularComponent } from './browse/popular/popular.component';
import { BrowseModule } from './browse/browse.module';
import { ChatDialogComponent } from './chatbot/chat/chat-dialog/chat-dialog.component';
import { GraphsComponent } from './graphs/graphs.component';
import { ChartsModule } from 'ng2-charts'
import { HttpClientModule } from '@angular/common/http';
import { MypetitionsComponent } from './mypetitions/mypetitions.component';
import { PetitionDetailComponent } from './petition-detail/petition-detail.component';
//import { PetitionFormComponent } from './petition-form/petition-form.component';

export function tokenGetter() {
  return sessionStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    AccountComponent,
    AdminComponent,
    JointeamComponent,
    PressComponent,
    PartnersComponent,
    TermsComponent,
    SecurityComponent,
    PrivacyComponent,
    NotFoundComponent,
    SubscribeComponent,
    PetitionFormComponent,
    FooterComponent,
    ContactUsComponent,
    DragDropComponent,
    DragDropFileUploadDirective,
    GraphsComponent,
    PetitionDetailComponent,
    MypetitionsComponent
    // ChatDialogComponent
  //  BrowseComponent
  ],
  imports: [
    AppRoutingModule,
    BrowseModule,
    ChatModule,
    BrowserModule,
    SharedModule,
    NgxPayPalModule,
    NgxTypedJsModule,
    ChartsModule,
    
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        // whitelistedDomains: ['localhost:3000', 'localhost:4200']
      }
    })
  ],
  providers: [
    AuthService,
    AuthGuardLogin,
    AuthGuardAdmin,
    CatService,
    UserService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
