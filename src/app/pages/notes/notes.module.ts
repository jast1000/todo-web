import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesRoutingModule } from './notes-routing.module';
import { MatSharedModule } from '../../mat-shared.module';
import { ListNotesComponent } from './list-notes/list-notes.component';
import { NewNoteComponent } from './new-note/new-note.component';
import { DeleteNoteDialogComponent } from '../notes/list-notes/delete-note-dialog/delete-note-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListNotesComponent, NewNoteComponent, DeleteNoteDialogComponent],
  imports: [
    CommonModule,
    MatSharedModule,
    NotesRoutingModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    DeleteNoteDialogComponent
  ]
})
export class NotesModule { }
