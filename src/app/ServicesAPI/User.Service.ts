import {Injectable} from '@angular/core';

import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import {User} from './User';

@Injectable()

export class UserService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private usersUrl = 'api/users';  // URL to web api

constructor(private _http : Http){
}

/********* From Hero Editor **************/
  getAllusers(): Promise<User[]> {
    return this._http.get(this.usersUrl)
               .toPromise()
               .then(response => response.json().data as User[])
               .catch(this.handleError);
  }
  delete(id: number): Promise<void> {
    const url = `${this.usersUrl}/${id}`;
    return this._http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  /*************************/
   getUsersWithPromise(): Promise<User[]> {
        return this._http.get(this.usersUrl).toPromise()
		    .then(this.extractData)
			.catch(this.handleErrorPromise);
    }

  addUserWithPromise(book:User): Promise<User> {
	    let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this.usersUrl, book, options).toPromise()
		           .then(this.extractData)
                   .catch(this.handleErrorPromise);
	}		
	private extractData(res: Response) {
	    let body = res.json();
        return body.data || {};
    }
private handleErrorPromise (error: Response | any) {
		console.error(error.message || error);
		return Promise.reject(error.message || error);
    }	
/************************/

}