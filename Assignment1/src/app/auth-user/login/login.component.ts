import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    const form = document.getElementById('loginForm') as HTMLFormElement;
    form.addEventListener('submit', this.onSubmit);
  }

  onSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const loginData = {
      username: formData.get('username'),
      password: formData.get('password')
    };
    console.log('Login data:', loginData);
  }
}
