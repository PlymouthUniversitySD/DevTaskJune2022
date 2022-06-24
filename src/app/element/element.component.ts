import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css'],
})
export class ElementComponent implements OnInit {
  public position!: number;

  constructor(private location: Location, private route: ActivatedRoute) {
    // Pull position from route
		this.route.paramMap.subscribe((params) => {
      this.position = parseInt(params.get('position')!, 10)
    });
  }

  ngOnInit(): void {}

  //In this component, we would like you to display all the selected element's data
  //This should be - position, name, weight and symbol

  goBack():void {
    this.location.back();
  }
}
