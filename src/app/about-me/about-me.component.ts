import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  name: string = 'Jon Snow';
  age: number = 35;
  dateOfBirth: string = '24.12.1988';
  education: string = 'Institute';
  gender: string = 'Male';
  maritalStatus: string = 'Unmarried'
  phone: string = '+38 (098) 888-88-88';
  mail: string = 'gmailgmail@gmail.com';
  country: string = 'Ukraine'
  city: string = 'Kryvyi Rih';
  desiredSalary: number = 180000;
  languageSkills: string[] = ['Ukainian', 'Russian', 'English B1'];
  computerSkills: string[] = ['HTML&CSS', 'JavaScript', 'Angular', 'Adobe Photoshop'];
  bio: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis lacus lobortis, tempor lacus nec, posuere eros. Praesent imperdiet in enim in maximus. In hac habitasse platea dictumst. Phasellus ut ornare augue. Nam in bibendum leo. Vivamus vitae erat bibendum.';
  userPhoto: string = 'assets/images/Jon.jpg';

  showBio: boolean = false;

  toggleBio() {
    this.showBio = !this.showBio;
  }
}
