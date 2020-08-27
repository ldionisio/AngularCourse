import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Feedback,ContactType } from '../shared/feedback';
import { map, catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { baseURL } from '../shared/baseurl';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const HttpUploadOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json"  })
}
@Injectable({
  providedIn: 'root'
})

export class FeedbackService {


    constructor(private http: HttpClient,
      private processHTTPMsgService: ProcessHTTPMsgService) { }

  postFeedback(feedback:Feedback):Observable<Feedback>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
     //console.log (feedback);
     //console.log(httpOptions);
     return this.http.post<Feedback>(baseURL + 'feedback/' + feedback, httpOptions)
     .pipe(catchError(this.processHTTPMsgService.handleError));
   }
}