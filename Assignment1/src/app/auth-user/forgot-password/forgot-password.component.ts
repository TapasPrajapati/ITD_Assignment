import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  ngOnInit(): void {
    const form = document.getElementById('forgotPasswordForm') as HTMLFormElement;
    form.addEventListener('submit', this.onSubmit);
  }

  onSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const forgotPasswordData = {
      email: formData.get('email')
    };
    console.log('Forgot password data:', forgotPasswordData);
  }
}
