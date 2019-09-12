import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";

import { AngularFireModule } from "@angular/fire";
import {
  AngularFirestoreModule,
  FirestoreSettingsToken
} from "@angular/fire/firestore";
import { environment } from "../environments/environment";
import { UserLoginComponent } from "./users/user-login/user-login.component";
import { DashboardComponent } from "./users/dashboard/dashboard.component";

import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { ChartsComponent } from './components/charts/charts.component';
import { AddpostComponent } from './components/addpost/addpost.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { PostslistComponent } from './components/postslist/postslist.component';

@NgModule({
  declarations: [AppComponent, UserLoginComponent, DashboardComponent, ChartsComponent, AddpostComponent, UserlistComponent, PostslistComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    CoreModule,
    SharedModule,
    HttpClientModule,
    AngularFirestoreModule,
    NgxAuthFirebaseUIModule.forRoot(environment.firebase),
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
