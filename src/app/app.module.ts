import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component'; 
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent  
  ],
  imports: [
    BrowserModule, 
    HomeModule,  
    RouterModule.forRoot([
      {path: '', loadChildren: () => import('./home/home.module').then(m =>m.HomeModule) }
    ])  
  ],
  providers: [],
  bootstrap: [AppComponent]  
})
export class AppModule { }
