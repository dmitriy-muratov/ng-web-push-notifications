import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import {catchError} from 'rxjs/operators';

@Injectable()
export class ApiService {

    configUrl = environment.apiUrl;

    constructor(private http: HttpClient) {
    }

    getNewData() {
        return this.http.get(this.configUrl)
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
