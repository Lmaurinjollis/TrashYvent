import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})
export class EventPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectHome() {
    this.router.navigateByUrl('/homepage');
  }
}
