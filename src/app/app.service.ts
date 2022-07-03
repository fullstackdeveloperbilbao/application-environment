import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  character = new BehaviorSubject('demo');

  constructor(private http: HttpClient) {}

  getCharacter(url: string) {
    this.http
      .get<{ name: string; gender: string; hair_color: string }>(url)
      .subscribe((response) => {
        this.character.next(response.name);
      });
  }
}
