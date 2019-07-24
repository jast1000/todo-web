import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { 
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatGridListModule,
  MatCardModule,
  MatDialogModule,
  MatSnackBarModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatDialogModule,
    MatSnackBarModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatDialogModule,
    MatSnackBarModule,
    MatInputModule
  ]
})
export class MatSharedModule { }
