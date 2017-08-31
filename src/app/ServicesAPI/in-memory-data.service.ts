import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const groups = [
      { GroupID: 1,  GroupName: 'Cyclers' },
      { GroupID: 2, GroupName: 'UFO' },
      { GroupID: 3, GroupName: 'Pioneers' }
    ];
    

     const users = [
      { UserID: 1,  UserName: 'Amany' },
      { UserID: 2, UserName: 'Slouma' },
      { UserID: 3, UserName: 'Khaled' }
    ];
   
    const Shifts = [
      { UserID: 1,  ShiftID: '1' },
     
    ];
    return {groups,users,Shifts};
  }
}
