import {Injectable} from '@angular/core';

import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import {Shift} from './Shift';

@Injectable()

export class ShiftService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private ShiftsUrl = 'api/Shifts';  // URL to web api

    baseUrl:string;
constructor(private _http : Http){
 //this.baseUrl ="http://cyclock.mbde3on.com/";
 //this.baseUrl ="http://localhost:44089/api/Shift/";
}

/********* From Hero Editor **************/
  getAllShifts(): Promise<Shift[]> {
    return this._http.get(this.ShiftsUrl)
               .toPromise()
               .then(response => response.json().data as Shift[])
               .catch(this.handleError);
  }

  update(hero: Shift): Promise<Shift> {
    const url = `${this.ShiftsUrl}/${hero.ShiftID}`;
    return this._http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  
  delete(id: number): Promise<void> {
    const url = `${this.ShiftsUrl}/${id}`;
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
   getShiftsWithPromise(): Promise<Shift[]> {
        return this._http.get(this.ShiftsUrl).toPromise()
		    .then(this.extractData)
			.catch(this.handleErrorPromise);
    }

  addShiftWithPromise(book:Shift): Promise<Shift> {
	    let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this.ShiftsUrl, book, options).toPromise()
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

   /*  getAllShifts()
    {
    return this._http.get(this.baseUrl ).map(res=>res.json()).catch(this.handleError);  
    } 

    getShiftById(id : number)
    {
    return this._http.get(this.baseUrl + id).map(res=>res.json());  
    }
    */
}