import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parent_child_app';
  enterName="Angelin";
  enterColour="Blue"
  parentData="";
 parentData1="";




  transferData(){
    this.parentData=this.enterName;
  }
  transferdataColour(){
    this.parentData1=this.enterColour;
  }



  //  about
value="";
sendData(value:string){
  this.value=value;
}


}
