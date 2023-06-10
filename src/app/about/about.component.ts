import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  @Output()
public sendData=new EventEmitter<string>();

// ngOnInit(){
//   this.sendData.emit("This is for angelin......");
  
// }
onButtonClick() {
  this.sendData.emit("this the child data for angelin");
}

// ......................



}









