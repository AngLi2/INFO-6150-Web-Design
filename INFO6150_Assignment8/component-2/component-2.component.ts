import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-component-2',
  templateUrl: './component-2.component.html',
  styleUrls: ['./component-2.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Component2Component{
  FtoCdegree:number
  CtoFdegree:number
  cdegree:number = function(FtoCdegree:number):number{
    this.FtoCdegree = FtoCdegree
    return ((this.FtoCdegree-32)/1.8).toFixed(2)
  }
  fdegree:number = function(CtoFdegree:number):number{
    this.CtoFdegree = CtoFdegree
    return ((this.CtoFdegree*1.8)+32).toFixed(2)
  }
}
