import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(
    private http: HttpClient
  ) { }

  getNotes(userId: string) {
    const url = `${environment.todoAPI}/users/${userId}/notes`;
    return this.http.get(url).toPromise();
  }

  deleteNote(userId: string, noteId: number) {
    const url = `${environment.todoAPI}/users/${userId}/notes/${noteId}`;
    return this.http.delete(url).toPromise();
  }

  saveNote(userId: string, note: any) {
    const url = `${environment.todoAPI}/users/${userId}/notes`;
    return this.http.post(url, note).toPromise();
  }

}
