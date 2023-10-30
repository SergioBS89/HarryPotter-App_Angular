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
import { FormsModule } from '@angular/forms';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { ObjectsComponent } from './components/objects/objects.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { ReproductorComponent } from './components/reproductor/reproductor.component';
import { DescriptionObjectComponent } from './components/objects/description/descriptionObject.component';
import { CreaturesComponent } from './components/creatures/creatures.component';
import { DescriptionCreatures } from './components/creatures/description/description.creatures';

const routes : Routes = [
  // {path: '', redirectTo: '/clients', pathMatch: 'full'} THIS IS EXAMPLE TO REDIRECT
  // Home-routes
  {path: '', component: HomeComponent},
  {path: 'wiz-cat', component: HomeComponent},
  {path: 'obj-cat', component: HomeComponent},
  {path: 'cre-cat', component: HomeComponent},
  {path: 'pla-cat', component: HomeComponent},
  // Wizards-routes
  {path: 'wizards/:page', component: WizardComponent},
  {path: 'desc/:name', component: DescriptionComponent},
  {path: 'mortifagos/:page', component: WizardComponent},
  {path: 'ani-fantastics/:page', component: WizardComponent},
  {path: 'students/:page', component: WizardComponent},
  {path: 'teachers/:page', component: WizardComponent},
  {path: 'others/:page', component: WizardComponent},
  // Objects-routes
  {path: 'horocruxes', component: ObjectsComponent},
  {path: 'quiddich', component: ObjectsComponent},
  {path: 'reliques', component: ObjectsComponent},
  {path: 'magic', component: ObjectsComponent},
  {path: 'wanders/:page', component: ObjectsComponent},
  {path: 'others-objects/:page', component: ObjectsComponent},
  {path: 'desc-wan/:name', component: DescriptionObjectComponent},
  {path: 'desc-hor/:name', component: DescriptionObjectComponent},
  {path: 'desc-qui/:name', component: DescriptionObjectComponent},
  {path: 'desc-oth/:name', component: DescriptionObjectComponent},
  {path: 'desc-rel/:name', component: DescriptionObjectComponent},
   // Creatures-routes
   {path: 'creatures/:page', component: CreaturesComponent},
   {path: 'no-danger/:page', component: CreaturesComponent},
   {path: 'danger/:page', component: CreaturesComponent},
   {path: 'desc-crea/:name', component: DescriptionCreatures}
  
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WizardComponent,
    DescriptionComponent,
    HeaderComponent,
    FooterComponent,
    PaginatorComponent,
    ObjectsComponent,
    SearcherComponent,
    ReproductorComponent,
    DescriptionObjectComponent,
    CreaturesComponent,
    DescriptionCreatures
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
