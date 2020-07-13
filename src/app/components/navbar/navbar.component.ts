import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { IntroductionService } from 'src/app/services/introduction.service';
import { Profile } from 'src/app/common/profile';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  profile:Profile = new Profile();
  menu:Object[] = []; 
  connect:Object[] = [];

  constructor(private intro:IntroductionService) { }

  ngOnInit(): void {
    this.Navigation();
  }

  @HostListener('window:scroll', ['$event'])
  @HostListener('window:onscroll',['$event'])

  onWindowScroll(e) {
    let element = document.querySelector('.uk-navbar-container');
    if (window.pageYOffset > element.clientHeight) {
      element.classList.remove('uk-navbar-transparent');
      element.classList.add('uk-background-default');
      element.classList.add('uk-box-shadow-small');
    } else {
      element.classList.add('uk-navbar-transparent');
      element.classList.remove('uk-box-shadow-small');
      element.classList.remove('uk-background-default');
    }
  }
  
  Navigation(){
    this.intro.getProfile().subscribe(data =>{
      this.profile = Object.assign(new Profile(),data);
      this.menu = this.profile["Menu"];
      let menus = this.profile["Menu"];
      let menu_array:Object[] = [];
      menus.forEach(menu =>{
        if(menu["present"]==true){
          menu_array.push(menu);
        }
      });
      this.menu = menu_array;

      let social_media_profile = this.profile["Connect"];
      let social_media_accounts:Object[] = [];
      social_media_profile.forEach(function(social_media){
          if(social_media["available"]==true){
            social_media_accounts.push(social_media);
          }
      });
      this.connect = social_media_accounts;
    })
  }

  Lowercase(link:string){
    return "#"+link.toLowerCase();
  }



}
