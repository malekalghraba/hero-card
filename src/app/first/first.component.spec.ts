import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnDestroy} from '@angular/core';
import { Directive, ElementRef, Input, OnInit } from '@angular/core';

import { interval, Subscription } from 'rxjs';


@Component({

  selector: 'first-root',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit{


  constructor() { }

  ngOnInit(): void {
    // Initialization tasks can be performed here
  }

}