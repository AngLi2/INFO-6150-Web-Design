import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-component-1',
  templateUrl: './component-1.component.html',
  styleUrls: ['./component-1.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Component1Component implements OnInit {
  currentPic = 0;
  constructor() {
    setInterval(() => {
      let id = (this.currentPic + 1) % 3;
      this.currentPic = id;
    }, 3000)
  }

  changebanner(id) {
    console.log(id)
    this.currentPic = id;
  }
  ngOnInit() { }
}
