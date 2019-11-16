import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DicomViewerComponent } from './views/dicom-viewer/dicom-viewer.component';


const routes: Routes = [
  {
    path: '',
    component: DicomViewerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
