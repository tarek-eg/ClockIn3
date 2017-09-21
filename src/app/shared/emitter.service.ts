import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'


@Injectable()
export class EmitterService {

    private closeSidebarSource = new Subject();
    closeSidebar$ = this.closeSidebarSource.asObservable();

    closeSidebar(){
        this.closeSidebarSource.next()
    }
}

  


