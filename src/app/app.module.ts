import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { WizardComponent } from './components/wizard/wizard.component';
import {HttpClientModule} from '@angular/common/http';
import { RouterLinkActive } from '@angular/router';
import { RouterModule,Routes } from '@angular/router';
import { DescriptionComponent } from './components/wizard/description/description.component';

const routes : Routes = [
  // {path: '', redirectTo: '/clients', pathMatch: 'full'} THIS IS EXAMPLE TO REDIRECT
  {path: '', component: WizardComponent},
  //CAMBIAR NOMBRE DE ESTE COMPONENTE
  {path: 'desc/:name', component: DescriptionComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WizardComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterLinkActive,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
