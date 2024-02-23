import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
 

  handleImageInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const file: File = (inputElement.files as FileList)[0];
    
    if (file) {
      const formData = new FormData();
      formData.append('image', file);

      this.http.post<any>('your-upload-endpoint', formData).subscribe(
        (response) => {
          console.log('Image uploaded successfully!', response);
          // Handle response as needed
        },
        (error) => {
          console.error('Error uploading image:', error);
          // Handle error as needed
        }
      );
    }}
  
  constructor( public shared:SharedService, private http: HttpClient){}

}
