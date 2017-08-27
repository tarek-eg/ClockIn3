import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFilter'
})
export class TimeFilterPipe implements PipeTransform {

  transform(value: any, name: any, date: any): any {
    if(name == "All"){
     
      if(date == null){
        return value
      } else
      {
      return value.filter(x => x.date == date )
      }
    } else {
    return value.filter(x => x.username == name )
  }
  }
}
