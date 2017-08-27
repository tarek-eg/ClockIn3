import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map"

export class User{
  constructor(public id: number, public name: string, public gender: string) { }
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
            {"id": 1, "name": "Tarek Mostafa", "gender": "Male"},
            {"id": 2, "name": "Khaled Jamal", "gender": "Male"},
            {"id": 3, "name": "Mahmoud Sloma", "gender": "Male"},
            {"id": 4, "name": "Osama Nour", "gender": "Male"},
            {"id": 5, "name": "Amany mhmd", "gender": "Female"}
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
        "date": "2017-08-26", 
        "timein": "9:29", 
        "timeout": "11:35", 
        "total": "2 hours, 6 mins" 
    }, {
        "username": "Amani Harb", 
        "date": "2017-08-26",
        "timein": "8:11", 
        "timeout": "12:01", 
        "total": "4 hours, 22 mins" 
    },{
        "username": "Khaled Jamal", 
        "date": "2017-08-27", 
        "timein": "9:03", 
        "timeout": "15:33", 
        "total": "1 hours, 9 mins" 
    },{
        "username": "Osama Nour", 
        "date": "2017-08-27", 
        "timein": "7:12", 
        "timeout": "19:01", 
        "total": "0 hours, 33 mins" 
    },{
        "username": "Mahmoud Slouma", 
        "date": "2017-08-28",  
        "timein": "11:11", 
        "timeout": "13:00", 
        "total": "8 hours, 1 mins" }
  
  ]
}
}
  

  


