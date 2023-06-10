import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  title = 'ParentChildApp3';
  counter=0;
  increment(){
    this.counter++;
  }
  decrement(){
    this.counter--;
  }
}
