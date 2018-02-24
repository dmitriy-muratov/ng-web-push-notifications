import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import {catchError} from 'rxjs/operators';

@Injectable()
export class ApiService {

    configUrl = environment.apiUrl;
    apiKey = environment.apiID;

    constructor(private http: HttpClient) {
    }

    getNewData(cityId: number) {
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
        return new ErrorObservable(
            'Something bad happened; please try again later.');
    }

}
