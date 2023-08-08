import { Component } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    query: '',
  };

  onFormSubmit() {
    // Perform any actions with the form data here (e.g., sending it to a server).
    console.log(this.formData);
  }
}
