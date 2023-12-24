import { Component , OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  constructor(public app:SharedService){}
  ngOnInit(): void {
    // Au moment de l'initialisation du composant, récupérez les héros depuis le service
   
  }

}
