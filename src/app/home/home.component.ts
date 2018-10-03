import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HomeService } from '../services/home.service';
import { Article } from '../model/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
articals:Article []
  constructor(private homeservice : HomeService) { }

  ngOnInit() {
    this. getall();
  }
  getall(){
this.homeservice.getAll()
.subscribe(
 (data: Article [])=> {
this.articals =data ;
console.log("article",this.articals);
},
error => {
    console.log("Rrror", error);
});

}
}