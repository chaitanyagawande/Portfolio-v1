import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/common/profile';
import { IntroductionService } from 'src/app/services/introduction.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educations:Object[] = [];

  constructor(private intro:IntroductionService) { }

  ngOnInit(): void {
    this.intro.getProfile().subscribe(data=>{
      this.educations = data["Education"];
    });
  }

}
