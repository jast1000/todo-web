import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotesService } from 'src/app/services/notes.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss']
})
export class NewNoteComponent implements OnInit {

  private user: any;
  private note: any;
  private noteForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private noteService: NotesService,
    private authService: AuthenticationService,
    private matSnackBar: MatSnackBar
  ) {
    this.noteForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  async ngOnInit() {
    this.user = this.authService.getUser();
    const noteId = +this.activateRoute.snapshot.paramMap.get('id');
    if (noteId) {
      this.note = await this.noteService.getNote(this.user.uid, noteId);
      const noteValues =  { title: this.note.title, content: this.note.content };
      this.noteForm.setValue(noteValues);
    }
  }

  async save() {
    const note = this.noteForm.value;
    if (this.note) {
      await this.noteService.updateNote(this.user.uid, this.note.id, note);
      this.matSnackBar.open('Nota actualizada', 'Cerrar', { duration: 3000 });
    } else {
      await this.noteService.saveNote(this.user.uid, note);
      this.matSnackBar.open('Nota creada', 'Cerrar', { duration: 3000 });
    }
    this.router.navigate(['notes']);
  }

}
