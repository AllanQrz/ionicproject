import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  apiUrl = 'http://127.0.0.1:8000/api/lesson';
  constructor(private http: HttpClient) { }
  getLesson() {
    return this.http.get<[]>(this.apiUrl);
  }


}
