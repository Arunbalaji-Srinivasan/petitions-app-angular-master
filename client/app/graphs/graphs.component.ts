import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.scss']
})
export class GraphsComponent {
    public pieChartLabels:string[] = ['Animals', 'HumanRights', 'Health','Economic Justice','Politics','Enviornment','Women Rights','Local'];
    public pieChartData:number[] = [40, 20, 20 ,10,10, 20,10,10];
    public pieChartType:string = 'pie';
   
    // events
    public chartClicked(e:any):void {
      console.log(e);
    }
   
    public chartHovered(e:any):void {
      console.log(e);
    }
  }


