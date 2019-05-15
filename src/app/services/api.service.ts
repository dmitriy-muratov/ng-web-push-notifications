import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';

import {throwError, Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';

import {environment} from '../../environments/environment';

@Injectable()
export class ApiService {

    configUrl = environment.apiUrl;
    apiKey = environment.apiID;

    constructor(private http: HttpClient) {
    }

    getForecast$(cityId: number): Observable<any> {
      const options = new HttpParams()
        .set('id', cityId.toString())
        .set('APPID', this.apiKey)
        .set('units', 'metric');
      return this.http.get(`${this.configUrl}`, {params: options})
        .pipe(
            catchError(this.handleError)
        );
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        } else {
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }

        return throwError(error);
    }

}
