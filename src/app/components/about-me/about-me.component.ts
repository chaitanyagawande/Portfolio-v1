import { Component, OnInit } from '@angular/core';
import { IntroductionService } from 'src/app/services/introduction.service';
import { Profile } from 'src/app/common/profile';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  profile:Profile = new Profile();
  profile_pic:string;
  about_me_html:string;

  constructor(private intro:IntroductionService) { }

  ngOnInit(): void {
    this.Introduction();
  }

  Introduction(){
    this.intro.getProfile().subscribe(data =>{
      this.profile = Object.assign(new Profile(),data);
      this.profile_pic = this.profile["Profile_Picture"];
      this.about_me_html = this.profile["About_Me"];
    });
  }
 
}
