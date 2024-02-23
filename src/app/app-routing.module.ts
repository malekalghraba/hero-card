import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutComponent } from './ajout/ajout.component';
import { ListComponent } from './list/list.component';
import { ModifComponent } from './modif/modif.component';

const routes: Routes = [


  {path:'ajout', component:AjoutComponent},
  {path:'card', component:ListComponent},
  {path:'modif/:id', component:ModifComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
