import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AplistComponent } from './aplist/aplist.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'apList', component:AplistComponent},
    {path:'login', component:LoginComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
];
@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        AplistComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

