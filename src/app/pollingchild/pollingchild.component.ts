import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pollingchild',
  templateUrl: './pollingchild.component.html',
  styleUrls: ['./pollingchild.component.css']
})
export class PollingchildComponent {

 // @Output()
 // public agree=new EventEmitter<number>()
 // Agree

 @Input() 
  count: number=0;
  @Output() 
  countChanged: EventEmitter<number> =   new EventEmitter();
  increment(){
    this.count++;
    this.countChanged.emit(this.count);

  }
  decrement(){
    this.count--;
    this.countChanged.emit(this.count);
  }
}
