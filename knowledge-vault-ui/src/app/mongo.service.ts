import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class MongoService {

  private fetchUrl: string = 'https://KnowledgeVault-zuul.stackroute.in/user-registration-service/api/v1/user/'

  constructor(private http: HttpClient) { }

  fetchUserData(name: string): Observable<any> {
    const httpoption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer ' + localStorage.getItem('currentuser')
      })
    };
    return this.http.get(this.fetchUrl+name,httpoption);
  }
}