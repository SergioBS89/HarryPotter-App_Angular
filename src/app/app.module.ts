import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { WizardComponent } from './components/wizard/wizard.component';
import {HttpClientModule} from '@angular/common/http';
import { RouterLinkActive } from '@angular/router';
import { RouterModule,Routes } from '@angular/router';
import { DescriptionComponent } from './components/wizard/description/description.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HouseComponent } from './components/house/house.component';
import { FormsModule } from '@angular/forms';

const routes : Routes = [
  // {path: '', redirectTo: '/clients', pathMatch: 'full'} THIS IS EXAMPLE TO REDIRECT
  {path: '', component: HomeComponent},
  {path: 'wizards', component: WizardComponent},
  {path: 'desc/:name', component: DescriptionComponent},
  {path: 'house', component: HouseComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WizardComponent,
    DescriptionComponent,
    HeaderComponent,
    FooterComponent,
    HouseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterLinkActive,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
