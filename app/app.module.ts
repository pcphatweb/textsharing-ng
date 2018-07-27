import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
// import { HighlightDirective } from 'ng-highlight';
import { HighlightModule } from 'ngx-highlightjs';
import { MarkdownModule } from 'ngx-markdown';
import { RouterModule, Routes } from '@angular/router';
// import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { NavComponent } from './component/nav/nav.component';
import { FooterComponent } from './component/footer/footer.component';
import { ContainerHomeComponent } from './component/container-home/container-home.component';
import { ContainerDetailComponent } from './component/container-detail/container-detail.component';
import { ContainerLoginComponent } from './component/container-login/container-login.component';
import { ContainerRegisterComponent } from './component/container-register/container-register.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { AppRoutingModule } from './/app-routing.module';
import { ContainerEditComponent } from './component/container-edit/container-edit.component';

const appRoutes: Routes = [
  { path:'', redirectTo: './', pathMatch: 'full' },
  { path: './', component: ContainerHomeComponent },
  { path: 'login', component: ContainerLoginComponent },
  { path: 'register', component: ContainerRegisterComponent },
  { path: 'detail/:id', component: ContainerDetailComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    ContainerHomeComponent,
    ContainerDetailComponent,
    ContainerLoginComponent,
    ContainerRegisterComponent,
    WelcomeComponent,
    ContainerEditComponent,
    // HighlightDirective
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true, useHash: false } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HighlightModule.forRoot( {theme : 'agate'} ),
    MarkdownModule.forRoot()
  ],
  // providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
