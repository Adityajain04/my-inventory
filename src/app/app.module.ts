import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';


import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'; 
import {MatListModule} from '@angular/material/list'; 
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatTreeModule} from '@angular/material/tree'; 
import {MatMenuModule} from '@angular/material/menu'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatTableModule} from '@angular/material/table'; 
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input'; 
import {MatChipsModule} from '@angular/material/chips'; 
import {MatSortModule} from '@angular/material/sort';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { RolesComponent } from './roles/roles.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RolesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatTreeModule,
    MatMenuModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatChipsModule,
    MatSortModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
