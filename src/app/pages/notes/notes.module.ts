import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesRoutingModule } from './notes-routing.module';
import { MatSharedModule } from '../../mat-shared.module';
import { ListNotesComponent } from './list-notes/list-notes.component';
import { NewNoteComponent } from './new-note/new-note.component';


@NgModule({
  declarations: [ListNotesComponent, NewNoteComponent],
  imports: [
    CommonModule,
    MatSharedModule,
    NotesRoutingModule
  ]
})
export class NotesModule { }
