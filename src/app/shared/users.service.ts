import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map"

export class User{
  constructor(public id: number, public name: string, public gender: string) { }
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

//   let usersPromise = Promise.resolve(USERS);

@Injectable()
export class UsersService {

    constructor(private _http:Http){
      
  }

  getUsers(){ {  

    // getUser(id: number | string){

    //   return 
    //   .then(users => users.find(user=> user.id === +id));
    // }
    
          return [ 
            {"id": 1, "name": "Tarek Mostafa", "firstname": "Tarek", "lastname": "Mostafa", "jobtitle":"HR", "password": "T123456" , "email": "trkmos@yahoo.com"},
            {"id": 2, "name": "Khaled Jamal", "firstname": "Khaled", "lastname": "Jamal", "jobtitle":"HR", "password": "K123456" , "email": "khaledjamalhr@gmail.com"},
            {"id": 3, "name": "Mahmoud Sloma", "firstname": "Mahmoud", "lastname": "Slouma", "jobtitle":"IT", "password": "M123456" , "email": "amany.m@gmail.com"},
            {"id": 4, "name": "Osama Nour", "firstname": "Osama", "lastname": "Nour", "jobtitle":"IT", "password": "O123456" , "email": "Mrosamanour@gmail.com"},
            {"id": 5, "name": "Amany mhmd", "firstname": "Amany", "lastname": "Harb", "jobtitle":"IT", "password": "A123456" , "email": "mslouma@gmail.com"}
          ]
  // }
  // }


}
  }

  getTimesheets(){
    //Khaled Jamal
    return [
    {
        "username": "Tarek Goda", 
        "date": "2013-02-08 09:30:26",  
        "timein": "2013-02-08 09:30:26", 
        "timeout": "2013-02-08 09:40:26", 
        "total": "2 hours, 6 mins" 
    }, {
        "username": "Amani Harb", 
        "date": "08 26, 2017 09:00:00 GMT+0300",  
        "timein": "08 26, 2017 09:00:00 GMT+0300", 
        "timeout": "08 26, 2017 11:15:00 GMT+0300",  
        "total": "4 hours, 22 mins" 
    },{
        "username": "Khaled Jamal", 
        "date": "08 26, 2017 09:00:00 GMT+0300",  
        "timein": "08 26, 2017 09:00:00 GMT+0300", 
        "timeout": "", 
        "total": "1 hours, 9 mins" 
    },{
        "username": "Osama Nour", 
        "date": "08 26, 2017 09:00:00 GMT+0300",  
        "timein": "08 26, 2017 09:00:00 GMT+0300", 
        "timeout": "08 26, 2017 11:15:00 GMT+0300",  
        "total": "0 hours, 33 mins" 
    },{
        "username": "Mahmoud Slouma", 
        "date": "08 26, 2017 09:00:00 GMT+0300",  
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
  

  


