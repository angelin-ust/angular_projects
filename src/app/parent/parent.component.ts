import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
names="Ang";
parentData="";
age="90";
parentData1="";

clickMe(){
  
  console.log(this.parentData1);
  
  this.parentData=this.names;
  this.parentData1=this.age;
  console.log(this.names);
}

value="";
submitData(value:string){
  this.value=value;
}

}
