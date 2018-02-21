import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoadingModule } from 'ngx-loading';

import { HttpsService } from './services/https.service';
import { NOTIFY_PROVIDERS } from '@ngrx/notify';
// import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';


import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EditModalComponent } from './components/modals/edit-modal/edit-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    EditModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LoadingModule
    // Ng4LoadingSpinnerModule 
  ],
  providers: [ HttpsService ], // SERVICES
  bootstrap: [AppComponent]
})
export class AppModule { }
