import { Component, OnInit } from '@angular/core';
import { IntroductionService } from 'src/app/services/introduction.service';
import { Profile } from 'src/app/common/profile';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  profile: Profile = new Profile();
  connect: Object[] = [];
  footer_name:string = "";

  constructor(private intro:IntroductionService) { }

  ngOnInit(): void {
    this.intro.getProfile().subscribe(data=>{
      this.profile = Object.assign(new Profile(), data);
      let social_media_profile = this.profile["Connect"];
      let social_media_accounts: Object[] = [];
      social_media_profile.forEach(function (social_media) {
        if (social_media["available"] == true) {
          social_media_accounts.push(social_media);
        }
      });
      this.connect = social_media_accounts;
      this.footer_name = this.profile["Logo"];
    });
  }

}
