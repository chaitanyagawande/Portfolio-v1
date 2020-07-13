import { Component, OnInit } from '@angular/core';
import { IntroductionService } from 'src/app/services/introduction.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experiences:Object[] = [];

  job_details:string = "";

  constructor(private intro:IntroductionService) { }

  ngOnInit(): void {
    this.intro.getProfile().subscribe(data=>{
      this.experiences = data["Experiences"];
    });
  }

  BuildHTML(job_details:any){
    let job_experience:string = "";
    job_details.forEach(data => {
      job_experience += "<li>"+data+"</li>";
    });
    return job_experience;
  }
}
