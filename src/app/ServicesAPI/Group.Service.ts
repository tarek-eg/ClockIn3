import {Injectable} from '@angular/core';

import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import {Group} from './Group';

@Injectable()

export class GroupService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private groupsUrl = 'api/groups';  // URL to web api

    baseUrl:string;
constructor(private _http : Http){
 //this.baseUrl ="http://cyclock.mbde3on.com/";
 //this.baseUrl ="http://localhost:44089/api/group/";
}

/********* From Hero Editor **************/
  getAllGroups(): Promise<Group[]> {
    return this._http.get(this.groupsUrl)
               .toPromise()
               .then(response => response.json().data as Group[])
               .catch(this.handleError);
  }

  update(hero: Group): Promise<Group> {
    const url = `${this.groupsUrl}/${hero.GroupID}`;
    return this._http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  
  delete(id: number): Promise<void> {
    const url = `${this.groupsUrl}/${id}`;
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
   getGroupsWithPromise(): Promise<Group[]> {
        return this._http.get(this.groupsUrl).toPromise()
		    .then(this.extractData)
			.catch(this.handleErrorPromise);
    }

  addGroupWithPromise(book:Group): Promise<Group> {
	    let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this.groupsUrl, book, options).toPromise()
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

   /*  getAllGroups()
    {
    return this._http.get(this.baseUrl ).map(res=>res.json()).catch(this.handleError);  
    } 

    getGroupById(id : number)
    {
    return this._http.get(this.baseUrl + id).map(res=>res.json());  
    }
    */
}