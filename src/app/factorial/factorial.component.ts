import { Component } from '@angular/core';

@Component({
  selector: 'app-factorial',
  templateUrl: './factorial.component.html',
  styleUrls: ['./factorial.component.css']
})
export class FactorialComponent {
facto:number=1;
  fact(n:number):number{
    for(var i=1;i<=n;i++){
this.facto=this.facto*i;
    }
    return this.facto;
  }
}
