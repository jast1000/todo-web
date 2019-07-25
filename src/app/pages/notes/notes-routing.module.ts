import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListNotesComponent } from './list-notes/list-notes.component';
import { NewNoteComponent } from './new-note/new-note.component';
import { AuthGuard } from '../../auth.guard';

const routes: Routes = [
  { path: '', component: ListNotesComponent, canActivate: [AuthGuard] },
  { path: 'edit-note/:id', component: NewNoteComponent, canActivate: [AuthGuard] },
  { path: 'new-note', component: NewNoteComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
