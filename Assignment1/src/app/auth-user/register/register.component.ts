import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  ngOnInit(): void {
    const form = document.getElementById('registerForm') as HTMLFormElement;
    form.addEventListener('submit', this.onSubmit);
  }

  onSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const registerData = {
      username: formData.get('username'),
      email: formData.get('email'),
      password: formData.get('password')
    };
    console.log('Register data:', registerData);
  }
}
