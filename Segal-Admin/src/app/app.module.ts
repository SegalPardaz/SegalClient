import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { PanelModule } from './panel/panel.module';
import { adminRoutes } from './routes/routes.routing';


@NgModule({
  declarations: [		
    AppComponent,
   ],
  imports: [
    BrowserModule,
    AuthModule,
    PanelModule,
    AppRoutingModule,
    RouterModule.forRoot(adminRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
