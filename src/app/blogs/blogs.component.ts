import { Component, OnInit } from '@angular/core';
import { IntroductionService } from '../services/introduction.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  blogs:Object[] = [];

  constructor(private intro:IntroductionService) { }

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs(){
    this.intro.getProfile().subscribe(data =>{
      this.blogs = data["Blogs"];
    });
  }

}
