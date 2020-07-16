import { Component, OnInit } from '@angular/core';
import { IntroductionService } from 'src/app/services/introduction.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  less:boolean = true;
  more:boolean = false;
  show_more:string = "SHOW MORE";
  toggle:boolean = false;

  projects:Object[] = [];
  important_projects:Object[] = [];

  constructor(private intro:IntroductionService) { }

  ngOnInit(): void {
    this.intro.getProfile().subscribe(data=>{
      this.projects = data["Projects"];
      for(var index=0;index<this.projects.length;index++){
        if(index<3){
          this.important_projects.push(this.projects[index]);
        }
      }
    });

  }

  Toggle(){
    this.toggle = !this.toggle;
    if(!this.toggle){
      window.location.href = "#projects";
    }
  }

}
