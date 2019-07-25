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

  getNote(userId: string, noteId: number) {
    const url = `${environment.todoAPI}/users/${userId}/notes/${noteId}`;
    return this.http.get(url).toPromise();
  }

  getNotes(userId: string) {
    const url = `${environment.todoAPI}/users/${userId}/notes`;
    return this.http.get(url).toPromise();
  }

  saveNote(userId: string, note: any) {
    const url = `${environment.todoAPI}/users/${userId}/notes`;
    return this.http.post(url, note).toPromise();
  }

  updateNote(userId: string, noteId: number, note: any) {
    const url = `${environment.todoAPI}/users/${userId}/notes/${noteId}`;
    return this.http.put(url, note).toPromise();
  }

  deleteNote(userId: string, noteId: number) {
    const url = `${environment.todoAPI}/users/${userId}/notes/${noteId}`;
    return this.http.delete(url).toPromise();
  }

}
