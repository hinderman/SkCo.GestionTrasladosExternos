import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'management-external-transfers',
    loadChildren: () => import('./management-external-transfers/management-external-transfers.module').then(x => x.ManagementExternalTransfersModule)
  },
  {
    path: '**',
    redirectTo: 'management-external-transfers'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
