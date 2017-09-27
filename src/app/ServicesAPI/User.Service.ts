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
  private usersUrl ='http://cyclockapi.mbde3on.com/api/User/';//'api/groups';  // URL to web api
  private usersUrlAdd = this.usersUrl + 'AddUser'; 
  private usersUrlEdit =this.usersUrl + 'EditUser';
  private usersUrlDelete =this.usersUrl + 'DeleteUser';
  
  postResponse : any;
constructor(private _http : Http){
}


AddUser(user:User){
  var headers = new Headers();
  headers.append('Content-Type', 'application/json');
  this._http.post(this.usersUrlAdd, 
                         JSON.stringify({UserName:user.UserName , GroupID:user.GroupID 
                          , LoginName:user.LoginName , Password:user.Password , UserColor:user.UserColor 
                          , UserLogo:user.UserLogo , HourRate:user.HourRate 
                          , IsAdmin:user.IsAdmin , IsDeleted:user.IsDeleted}),
                         {headers:headers})
  .map((res: Response) => res.json())
  .subscribe((res:User) => { this.postResponse = res; console.log(res); });
}

EditGroup(user: User) {
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
 let url = `${this.usersUrlEdit}`; 
  return this._http
             .put(url, JSON.stringify(user), {headers: headers})
             .map(res => res.json())
             .subscribe((res:User) => { this.postResponse = res; console.log(res); });
  }

DeleteUser(id:number){
  var headers = new Headers();
  this._http.delete(this.usersUrlDelete + '/?id='+id, new RequestOptions({
    headers: headers,
    body: User
 }))
 .subscribe((ok)=>{console.log(ok)});
}

// Tarek
getAllUsers():Observable<User[]>{
  return  this._http.get(this.usersUrl)
    .map(res => res.json())
    .catch(this.handleError); 
}


/* Handle errors Tarek*/
private handleError(err){
  let errMessage: string;

  if (err instanceof Response){
      let body = err.json() || '';
      let error = body.error || JSON.stringify(body);
      errMessage = `${err.status} - ${err.statusText || ''} ${error}`;
  }else{
      errMessage = err.message ? err.message : err.toString();
  }
  return Observable.throw(errMessage)
}
// Old Not Gold

/********* From Hero Editor **************/
/*  getAllusers(): Promise<User[]> {
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
*/
  /*************************/
  /*
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
    */
/************************/

}