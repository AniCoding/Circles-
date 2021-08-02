import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counts = [100, 225, 400];
  paintForm = new FormGroup({
    circleCount: new FormControl(),
    color: new FormControl('pink'),
  });
   showCanvas:boolean = false
   
  get getCircleCount () {
    return this.paintForm.value.circleCount;
  }

  get getColor () {
    return this.paintForm.value.color;
  }

  getArrayOfGivenLength (length: number) {
    return new Array(length);
  }

  getSqrtOfNumber (num: number) {
    return Math.sqrt(num);
  }

  onGenerateClick () {
    this.showCanvas = true    
  }

  onCountChange(){
    this.showCanvas=false
  }

  onDeleteClick(){
    this.showCanvas=false
  }
}
  