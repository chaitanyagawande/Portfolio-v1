import { Component, OnInit } from '@angular/core';
import { IntroductionService } from 'src/app/services/introduction.service';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent implements OnInit {

  certificates:Object[] = [];

  constructor(private intro:IntroductionService) { }

  ngOnInit(): void {

    this.intro.getProfile().subscribe(data =>{
      this.certificates = data["Certificates"];
    });
    
  }

}
