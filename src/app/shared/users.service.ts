import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map"

export class User{
  constructor(public id: number, public name: string, public gender: string, public isChecked?: boolean) { }
}

export class xUser{
  constructor(public id: number, public startTime: Date, public endTime:any) { }
}


  let USERS = [
    new User(1,"Tarek Mostafa", "Male"),
    new User(2, "Khaled Jamal", "Male"),
    new User(3,"Mahmoud Sloma", "Male"),
    new User(4, "Osama Nour", "Male"),
    new User(5, "Amani Harb", "Female") 

  ];

  let usersPromise = Promise.resolve(USERS);

@Injectable()
export class UsersService {

    constructor(private _http:Http){
      
  }

  getUser(id: number | string){

      return usersPromise
      .then(users => users.find(user=> user.id === +id));
    };

  getUsers(){ {  

    // getUser(id: number | string){

    //   return 
    //   .then(users => users.find(user=> user.id === +id));
    // }
    
          return [ 
            {"id": 1, "name": "Tarek Mostafa", "firstname": "Tarek", "lastname": "Mostafa", "jobtitle":"HR", "password": "123" , "email": "trkmos@yahoo.com", "isChecked": false},
            {"id": 2, "name": "Khaled Jamal", "firstname": "Khaled", "lastname": "Jamal", "jobtitle":"HR", "password": "123" , "email": "khaledjamalhr@gmail.com", "isChecked": false},
            {"id": 3, "name": "Mahmoud Sloma", "firstname": "Mahmoud", "lastname": "Slouma", "jobtitle":"IT", "password": "123" , "email": "amany.m@gmail.com", "isChecked": false},
            {"id": 4, "name": "Osama Nour", "firstname": "Osama", "lastname": "Nour", "jobtitle":"IT", "password": "123" , "email": "Mrosamanour@gmail.com", "isChecked": false},
            {"id": 5, "name": "Amany Mhmd", "firstname": "Amany", "lastname": "Mhmd", "jobtitle":"IT", "password": "123" , "email": "mslouma@gmail.com", "isChecked": false}
          ]
  // }
  // }


}
  }

  timeSheet= []


  getTimesheets(){
    //Khaled Jamal
    return [
    {
        "username": "Tarek Goda", 
        "date": "08 26, 2017",  
        "timein": "08 26, 2017 09:00:00 GMT+0300", 
        "timeout": "08 26, 2017 09:00:00 GMT+0300", 
        "total": "2 hours, 6 mins" 
    }, {
        "username": "Amani mhmd", 
        "date": "08 26, 2017",  
        "timein": "08 26, 2017 09:00:00 GMT+0300", 
        "timeout": "08 26, 2017 11:15:00 GMT+0300",  
        "total": "4 hours, 22 mins" 
    },{
        "username": "Khaled Jamal", 
        "date": "08 28, 2017",  
        "timein": "09 12, 2017 02:00 PM", 
        "timeout": "", 
        "total": "1 hours, 9 mins" 
    },{
        "username": "Osama Nour", 
        "date": "08 26, 2017",  
        "timein": "08 26, 2017 09:00:00 GMT+0300", 
        "timeout": "08 26, 2017 11:15:00 GMT+0300",  
        "total": "0 hours, 33 mins" 
    },{
        "username": "Mahmoud Slouma", 
        "date": "08 26, 2017",  
        "timein": "08 26, 2017 09:00:00 GMT+0300", 
        "timeout": "08 26, 2017 11:15:00 GMT+0300", 
        "total": "8 hours, 1 mins" }
  
  ]

}

getTimesheet() {
  return this.myUsers
  
}

myUsers:Array<xUser>

}
  
export class TS {
   constructor(public username: string, public date: Date, public timein: Date, public timeout:any, public total: any){}
}

  


