import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule


 // Import your components
@Component({
  selector: 'app-first', // Ensure the selector matches what you use in the template (e.g., <app-first></app-first>)
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  newHero: any = {}; // Object to hold new hero details
  heroes: any[] = []; // Array to store hero objects

  createHero() {
    // Push new hero details to the heroes array
    this.heroes.push({
      name: this.newHero.name || 'Default Name',
      power: this.newHero.power || 'Default Power',
      image: this.newHero.image || 'https://via.placeholder.com/150' // Default image URL
    });

    // Clear input fields after creating a hero
    this.newHero = {};
  }
}