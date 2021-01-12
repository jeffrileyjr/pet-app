import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet';

@Component({
  selector: 'pet-info',
  templateUrl: './pet-info.component.html',
  styleUrls: ['./pet-info.component.css']
})
export class PetInfoComponent implements OnInit {

  pet: Pet[] = [
    {
      name: 'Bogart',
      breed: 'Hound-mix'
    },
    {
      name: 'Owen',
      breed: 'Lab and Sheppard'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
