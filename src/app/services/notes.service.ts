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

}
