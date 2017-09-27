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
  private groupsUrl ='http://cyclockapi.mbde3on.com/api/group/';
  private groupsUrlAdd = this.groupsUrl + 'AddGroup'; 
  private groupsUrlEdit =this.groupsUrl + 'EditGroup';
  private groupsUrlDelete =this.groupsUrl + 'Delete';
  
  postResponse : any;

  constructor(private _http : Http){
 
}

AddGroup(group:Group){
  var headers = new Headers();
  headers.append('Content-Type', 'application/json');
  this._http.post(this.groupsUrlAdd, 
                         JSON.stringify({GroupName:group.GroupName}),
                         {headers:headers})
  .map((res: Response) => res.json())
  .subscribe((res:Group) => { this.postResponse = res; console.log(res); });
}

DeleteGroup(id:number){
  var headers = new Headers();
  this._http.delete(this.groupsUrlDelete + '/?id='+id, new RequestOptions({
    headers: headers,
    body: Group
 }))
 .subscribe((ok)=>{console.log(ok)});
}



 EditGroup(hero: Group) {
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
 // let url = `${this.groupsUrlEdit}/${hero.GroupID}`;
 let url = `${this.groupsUrlEdit}`; 
  return this._http
             .put(url, JSON.stringify(hero), {headers: headers})
             .map(res => res.json())
             .subscribe((res:Group) => { this.postResponse = res; console.log(res); });
  }
/*
addComment (body: Object): Observable<Group[]> {
  let bodyString = JSON.stringify(body); // Stringify payload
  let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
  let options       = new RequestOptions({ headers: headers }); // Create a request option

  return this._http.post(this.groupsUrlAdd, body, options) // ...using post request
                   .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                   .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
}   

 // Update a comment
 updateComment (body: Object): Observable<Group[]> {
  let bodyString = JSON.stringify(body); // Stringify payload
  let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
  let options       = new RequestOptions({ headers: headers }); // Create a request option

  return this._http.put(`${this.groupsUrlEdit}/${body['id']}`, body, options) // ...using put request
                   .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                   .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
}  
*/
/********* From Hero Editor **************/
/*
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
*/
  /*************************/
  /*
   getGroupsWithPromise(): Promise<Group[]> {
        return this._http.get(this.groupsUrl).toPromise()
		    .then(this.extractData)
			.catch(this.handleErrorPromise);
    }

  addGroupWithPromise(book:Group): Promise<Group> {
	    let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this.groupsUrlAdd, book, options).toPromise()
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
/*
    getGroupById(id : number)
    {
    return this._http.get(this.baseUrl + id).map(res=>res.json());  
    }
    */
}