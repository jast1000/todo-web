import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../../services/notes.service';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.scss']
})
export class ListNotesComponent implements OnInit {

  private notes: any;

  constructor(
    private authService: AuthenticationService,
    private notesService: NotesService
  ) { }

  ngOnInit() {
    this.getNotes();
  }

  async getNotes() {
    const user = this.authService.getUser();
    this.notes = await this.notesService.getNotes(user.uid);
    console.log(this.notes);
  }

}
