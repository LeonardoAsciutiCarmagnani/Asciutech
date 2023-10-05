import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DropdownComponent } from '../app/dropdown/dropdown.component'
import { TesteComponent } from './teste/teste.component';


const routes: Routes = [
  {path: 'test', component:TesteComponent},
  {path: 'dropdown', component:DropdownComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
