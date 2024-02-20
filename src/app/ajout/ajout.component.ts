import { Component } from '@angular/core';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent {
  //Hero :any= { }; // Object to hold new hero details
  hero = {
    name:'',
    power:0,
    image:''
  }

  createHero() {
    this.shared.createNewHero(this.hero).subscribe(

      (res)=>{
        console.log(res);
      },
      (err)=>{
        console.log(err);
        
      }

    )

  }
  
  constructor( public shared:SharedService){}

}
