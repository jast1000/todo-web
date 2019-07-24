import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-delete-note-dialog',
  templateUrl: './delete-note-dialog.component.html',
  styleUrls: ['./delete-note-dialog.component.scss']
})
export class DeleteNoteDialogComponent implements OnInit {

  public data = { result: true };

  constructor(
    private matDialog: MatDialogRef<DeleteNoteDialogComponent>
  ) { }

  ngOnInit() {
  }

  close() {
    this.matDialog.close(false);
  }

}
