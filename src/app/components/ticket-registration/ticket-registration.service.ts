import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TicketRegistrationService {
  private apiUrl = 'http://localhost:7230';

  constructor(private http: HttpClient, private router: Router) {}

  CreateTicket(credentials: {
    title: string;
    description: string;
  }): Observable<any> {
    const token = localStorage.getItem('token'); // pega o token do storage

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json', // opcional, mas recomendado
    });

    console.log('Token:', token);

    this.router.navigate(['/list']).then(() => {
      window.location.reload();
    });

    return this.http.post(`${this.apiUrl}/ticket`, credentials, { headers });
  }
}
