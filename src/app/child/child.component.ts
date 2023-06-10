import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input()
  parentData: string | undefined;
  @Input()
  parentData1: string | undefined;

  @Output()
  public submitData=new EventEmitter<string>();
  submit(){
    this.submitData.emit("Succesfull");
  }
}
