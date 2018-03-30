import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-component-3',
  templateUrl: './component-3.component.html',
  styleUrls: ['./component-3.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Component3Component {
    date = function(inputdate):string{
      return getRangeDate(-inputdate)
    }

    currentdate = getRangeDate(0)
    var getRangeDate = function(range: number): string {
      const formatDate = (time: any) => {
        const Dates = new Date(time);
        const year: number = Dates.getFullYear();
        const month: any = (Dates.getMonth() + 1) < 10 ? '0' + (Dates.getMonth() + 1) : (Dates.getMonth() + 1);
        const day: any = Dates.getDate() < 10 ? '0' + Dates.getDate() : Dates.getDate();
        return year + '-' + month + '-' + day;
      };
      const now = formatDate(new Date().getTime());
      const resultArr: Array<any> = [];
      let changeDate: string;
      changeDate = formatDate(new Date().getTime() + (1000 * 3600 * 24 * range));
      return (changeDate);

  }
}
