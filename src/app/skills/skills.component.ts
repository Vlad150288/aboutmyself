import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills: string[] = ['Angular', 'TypeScript', 'HTML&CSS', 'JavaScript', 'Adobe Photoshop'];
  knowledges: string[] = ['Web Development', 'Angular Framework', 'Responsive Design', 'Git Version Control', 'RESTful APIs'];
  certificates: string[] = ['Angular Developer Certificate', 'Web Development Certificate', 'Responsive Design Certificate', 'Git Fundamentals Certificate', 'RESTful APIs Certification'];
  bio: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis lacus lobortis, tempor lacus nec, posuere eros. Praesent imperdiet in enim in maximus. In hac habitasse platea dictumst. Phasellus ut ornare augue. Nam in bibendum leo. Vivamus vitae erat bibendum.';


  showBio: boolean = false;

  toggleBio() {
    this.showBio = !this.showBio;
  }

}
