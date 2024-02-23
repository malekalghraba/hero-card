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
heros : any ;
  ngOnInit(): void {
    // Au moment de l'initialisation du composant, récupérez les héros depuis le service
   this.app.getHeroes().subscribe(
(res)=>{
  console.log(res);
  this.heros= res ;
})
   
  }
  onDeleteHero(id: any): void {
    this.app.deletehero(id).subscribe(
      () => {
        console.log('Hero deleted successfully');
        // Perform any additional actions after successful deletion.
        this.ngOnInit();
      },
      error => {
        console.error('Error deleting hero:', error);
        // Handle error appropriately.
      }
    )}
   

  constructor(public app:SharedService){}
}
