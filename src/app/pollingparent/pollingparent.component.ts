import { Component } from '@angular/core';

@Component({
  selector: 'app-pollingparent',
  templateUrl: './pollingparent.component.html',
  styleUrls: ['./pollingparent.component.css']
})
export class PollingparentComponent {

  Counter=5;
  countChangedHandler(count: number) {
    this.Counter = count;
    
  }
}
