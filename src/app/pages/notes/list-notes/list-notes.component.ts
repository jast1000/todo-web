import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../../services/notes.service';
import { AuthenticationService } from '../../../services/authentication.service';
import { MatDialog, MatDialogConfig, MatSnackBar } from '@angular/material';
import { DeleteNoteDialogComponent } from './delete-note-dialog/delete-note-dialog.component';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.scss']
})
export class ListNotesComponent implements OnInit {

  private notes: any;

  constructor(
    private authService: AuthenticationService,
    private notesService: NotesService,
    private matDialog: MatDialog,
    private matSnackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getNotes();
  }

  async getNotes() {
    const user = this.authService.getUser();
    this.notes = await this.notesService.getNotes(user.uid);
  }

  delete(note: any) {
    const user = this.authService.getUser();

    const config: MatDialogConfig = { width: '250px' };
    const dialog = this.matDialog.open(DeleteNoteDialogComponent, config);

    dialog.afterClosed().subscribe(async result => {
      if (result) {
        await this.notesService.deleteNote(user.uid, note.id);
        await this.getNotes();
        this.matSnackBar.open('Nota elimina', 'Cerrar', { duration: 3000 });
      }
    });
  }

}
