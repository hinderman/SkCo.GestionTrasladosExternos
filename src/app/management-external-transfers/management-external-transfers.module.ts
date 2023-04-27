import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContributionsMainComponent } from './contributions-main/contributions-main.component';
import { RouterModule, Routes } from '@angular/router';
import { ManagementExternalTransfers } from './management-external-transfers.component';
import { ContributionsSecondaryComponent } from './contributions-secondary/contributions-secondary.component';
import { ContributionsFileComponent } from './contributions-file/contributions-file.component';

const routes: Routes = [
  {
    path: '**',
    component: ManagementExternalTransfers
  }
];

@NgModule({
  declarations: [
    ContributionsMainComponent,
    ManagementExternalTransfers,
    ContributionsSecondaryComponent,
    ContributionsFileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ManagementExternalTransfersModule { }
