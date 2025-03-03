import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Advice } from '../../models/advice';

@Injectable({
  providedIn: 'root'
})
export class AdvicesService {

  readonly url = 'https://api.adviceslip.com';
  private http = inject(HttpClient);

  getAdvice(): Observable<Advice> {
    return this.http.get<Advice>(`${this.url}/advice`);
  }
}
