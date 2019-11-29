import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  login(form) {
    if (form.value.email === 'bob@email.com' && form.value.password === 'bob') {
      this.router.navigateByUrl('/homepage');
    }
  }

  redirectRegister() {
    this.router.navigateByUrl('/register');
  }
}
