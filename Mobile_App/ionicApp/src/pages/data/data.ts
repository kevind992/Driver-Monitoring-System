import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-data',
  templateUrl: 'data.html',
})
export class DataPage {

  // selected data
  item:any = this.navParams.data;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let index = 0;
    let label = 0;

    this.item.rpmList.forEach(element => {
      label++;
      this.rpmData[0].data.push(element);
      this.lineChartLabels.push(label)
    });

    index = 0;

    this.item.speedList.forEach(element => {
      this.spdData[0].data.push(element);
    });
  }

  // data arrays
  public rpmData:Array<any> = [
    {data: []}
  ];
  public spdData:Array<any> = [
    {data: []}
  ];

  public lineChartLabels:Array<any> = [];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  public lineChartLegend: boolean = false;
  public lineChartType:string = 'line';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  get date() {
    return (this.item.date);
}

  ionViewDidLoad() {
    //console.log(this.item.rpmList);
    // let index = 0;
    // let label = 0;

    // this.item.rpmList.forEach(element => {
    //   label++;
    //   console.log(element + " " +label);
    //   this.rpmData[0].data.push(element);
    //   this.lineChartLabels.push(label)
    // });

  }

}
