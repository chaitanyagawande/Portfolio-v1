import { Component, OnInit } from '@angular/core';
import { IntroductionService } from 'src/app/services/introduction.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills:Object[] = [];

  constructor(private intro:IntroductionService) { }

  ngOnInit(): void {

    this.intro.getProfile().subscribe(data=>{
      this.skills = data["Skills"];
    });
  }

}
