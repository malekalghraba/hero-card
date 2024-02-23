import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-modif',
  templateUrl: './modif.component.html',
  styleUrls: ['./modif.component.css']
})
export class ModifComponent implements OnInit {
  hero: any;
  id:any;
  constructor(public app: SharedService,  private act: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.id = this.act.snapshot.paramMap.get('id');
      this.app.getHero(this.id).subscribe(
        (res) => {
          console.log(res);
          this.hero = res;
        }
      );
    
  }

  onupdateHero(){
    this.app.putHero(this.id, this.hero)
    .subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/list']);
        
      },
      err=>{
        console.log(err);
        
      }
    );
    this.ngOnInit();
  }


}
