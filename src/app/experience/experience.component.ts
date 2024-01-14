import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  profession: string = 'Web Developer';

  experienceList1: any[] = [
    {
      position: 'Development Trainee',
      company: 'TD Synnex',
      location: 'Dnipro, Ukraine',
      startDate: 'May 2019',
      endDate: 'December 2019',
      description: 'Participation in software development and testing projects. Conducting code reviews and providing constructive feedback to team members.'
    },
  ];

  experienceList2: any[] = [
    {
      position: 'Web Application Developer',
      company: 'Dell Technologies',
      location: 'Kharkiv, Ukraine',
      startDate: 'January 2020',
      endDate: 'December 2022',
      description: 'Development and support of web applications using Angular and Node.js technologies. Participating in Agile/Scrum ceremonies for effective project management.'
    },
  ];

  experienceList3: any[] = [
    {
      position: 'Senior Software Engineer',
      company: 'HP Enterprise',
      location: 'Kyiv, Ukraine',
      startDate: 'January 2023',
      endDate: 'December 2023',
      description: 'Developing and maintaining scalable web applications using Angular. Collaborating with cross-functional teams to design and implement new features.'
    }
  ];

  selectedOption: string = 'option1';

  onOptionChange(option: string) {
    this.selectedOption = option;
  }

  constructor() { }

  ngOnInit(): void {
  }

}



