import { Injectable } from '@angular/core';


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
}
  

  


