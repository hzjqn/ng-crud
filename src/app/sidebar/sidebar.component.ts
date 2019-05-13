import { Component, OnInit } from '@angular/core';
import Session from '../session';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  session : Session;

  constructor(private sessionService: SessionService) { }

  
  getSession(){
    return this.sessionService.getSessionData()
    .subscribe(data => {
      this.session = data;
    });
  }
  ngOnInit() {
    this.getSession();
  }

  ngOnDestroy(): void {
    return this.getSession().unsubscribe();
  }

}
