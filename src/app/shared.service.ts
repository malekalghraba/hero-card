import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http:HttpClient) { }
  private url='http://127.0.0.1:3000/';
  
 
  createNewHero(hero :any){
    return this.http.post(this.url + 'hero/ajout',hero);
  }
  getHeroes() {
    return this.http.get(this.url + 'hero/all'); // Update the URL accordingly
  }
 deletehero(id:any){
  return this.http.delete(this.url + 'hero/supprimer/' + id);
 }
 getHero(id:any) {
  return this.http.get(this.url + 'hero/getbyid/' + id);
}
putHero(id: any , hero: any){
  return this.http.put(this.url + 'hero/update/' + id , hero);
}
}
