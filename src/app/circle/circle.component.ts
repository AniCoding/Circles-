import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {

  @Input() background = 'white';
  color: string = this.background;

  onCircleItemClick() {
   this.color = this.background;
  }

}
