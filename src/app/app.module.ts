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
import { MarksComponent } from './components/marks/marks.component';
import { WizardsCategories } from './components/wizard/wizards-categories/wizards-categories.component';
import { ObjectsComponent } from './components/objects/objects.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { ReproductorComponent } from './components/reproductor/reproductor.component';

const routes : Routes = [
  // {path: '', redirectTo: '/clients', pathMatch: 'full'} THIS IS EXAMPLE TO REDIRECT
  // Home-routes
  {path: '', component: HomeComponent},
  {path: 'wiz-list', component: HomeComponent},
  {path: 'obj-list', component: HomeComponent},
  {path: 'cre-list', component: HomeComponent},
  {path: 'pla-list', component: HomeComponent},
  // Wizards-routes
  {path: 'wizards/:page', component: WizardComponent},
  {path: 'desc/:name', component: DescriptionComponent},
  {path: 'mortifagos/:page', component: WizardsCategories},
  {path: 'ani-fantastics/:page', component: WizardsCategories},
  {path: 'students/:page', component: WizardsCategories},
  {path: 'teachers/:page', component: WizardsCategories},
  {path: 'others/:page', component: WizardsCategories},
  // Objects-routes
  {path: 'objects', component: ObjectsComponent},
  {path: 'horocruxes', component: ObjectsComponent},
  {path: 'quiddich', component: ObjectsComponent},
  {path: 'reliques', component: ObjectsComponent},
  {path: 'magic', component: ObjectsComponent},
  {path: 'wanders', component: ObjectsComponent},
  {path: 'others-objects/:page', component: ObjectsComponent}
  
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
    MarksComponent,
    WizardsCategories,
    ObjectsComponent,
    SearcherComponent,
    ReproductorComponent
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
