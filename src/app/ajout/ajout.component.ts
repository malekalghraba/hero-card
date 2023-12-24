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
  Hero :any= { }; // Object to hold new hero details
  
  createHero() {
    // Push new hero details to the heroes array
    this.shared.heros.push(this.Hero);

    // Clear input fields after creating a hero
    this.Hero = {};
  }
  
  constructor( public shared:SharedService){}

}
