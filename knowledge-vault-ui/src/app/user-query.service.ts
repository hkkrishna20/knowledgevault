import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { ReceivedQuery } from './models/receivedQuery';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})

export class UserQueryService {

    // nlp-pipeline service url-path
    private getRequest = 'http://172.23.239.127:8148/kv/';

  getDisease(medicalCondition: string): any {
    return this.http.get<ReceivedQuery>(this.getRequest + medicalCondition);
  }

  constructor(private http: HttpClient) { }

  postUserQuery(inputText: string) {
    const getUrl = this.getRequest + inputText;
    this.http.get<string>(getUrl, httpOptions)
      .subscribe(
        data => {
         if (data == null) {
          console.log(data);
         }
        }
      );
  }
}
