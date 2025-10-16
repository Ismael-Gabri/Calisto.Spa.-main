import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class KpiCardService {
  private apiUrl = 'http://localhost:7230'; // URL base da sua API

  constructor(private http: HttpClient) {}

  GetKpiValues(): Observable<any> {
    return this.http.get(`${this.apiUrl}/v2/kpi`);
  }
}
