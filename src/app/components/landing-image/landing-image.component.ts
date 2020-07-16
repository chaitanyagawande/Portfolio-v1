import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import { IntroductionService } from 'src/app/services/introduction.service';
import { Profile } from 'src/app/common/profile';

@Component({
  selector: 'app-landing-image',
  templateUrl: './landing-image.component.html',
  styleUrls: ['./landing-image.component.css']
})
export class LandingImageComponent implements OnInit {

  headlines: string[] = [];
  profile: Profile = new Profile();
  connect: Object[] = [];
  ResumeFileName: string = "";
  GetInTouchMail: string = "";


  constructor(private intro: IntroductionService) { }

  ngOnInit(): void {
    this.Summary();
    this.Home();
  }

  Summary() {
    this.intro.getProfile().subscribe(data => {
      this.headlines = data["Summary"];
      let options = {
        strings: this.headlines,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1000,
        showCursor: true,
        cursorChar: "_",
        loop: true
      }

      let nameOption = {
        strings: ["Chaitanya Gawande"],
        typeSpeed: 100,
        backSpeed: -50,
      }
      // var typed = new Typed(".element", options);
      // var typed = new Typed(".name", nameOption);
    });
  }

  Home() {
    this.intro.getProfile().subscribe(data => {
      this.profile = Object.assign(new Profile(), data);
      this.GetInTouchMail = this.profile["GetInTouchEmail"];
      this.ResumeFileName = this.profile["ResumeFileName"];
      let social_media_profile = this.profile["Connect"];
      let social_media_accounts: Object[] = [];
      social_media_profile.forEach(function (social_media) {
        if (social_media["available"] == true) {
          social_media_accounts.push(social_media);
        }
      });
      this.connect = social_media_accounts;
    })
  }

}

