import { Component, OnInit } from '@angular/core';
import {Pet} from "../pet";

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  pet : Pet = {
    name: "PuPu",
    image: "https://nhattientuu.com/wp-content/uploads/2020/08/hinh-anh-dep-1.jpg"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
