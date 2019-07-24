import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotesService } from 'src/app/services/notes.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss']
})
export class NewNoteComponent implements OnInit {

  private noteForm: FormGroup;

  constructor(
    private fb: FormBuilder,
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

  ngOnInit() {
  }

  async save() {
    const user = this.authService.getUser();
    const note = this.noteForm.value;
    await this.noteService.saveNote(user.uid, note);
    this.matSnackBar.open('Nota creada', 'Cerrar', { duration: 3000 });
    this.router.navigate(['notes']);
  }

}
