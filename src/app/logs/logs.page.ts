import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.page.html',
  styleUrls: ['./logs.page.scss'],
})
export class LogsPage implements OnInit {
  logs:any[];
  
  constructor() { }

  ngOnInit() {
    this.getLogs();
  }

  getLogs(){

  }

}
