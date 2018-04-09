import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

// charts
import { ChartsModule } from 'ng2-charts';
//npm install --save @types/jquery

import * as $ from "jquery";
import { NgForOf } from '@angular/common';

// charts
// https://www.djamware.com/post/598953f880aca768e4d2b12b/creating-beautiful-charts-easily-using-ionic-3-and-angular-4

@IonicPage()
@Component({
  selector: 'page-charts',
  templateUrl: 'charts.html',
})
export class ChartsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {

  }

  // items:any;
  items;

  // Arrays for data
  rpmArray: number[] = [];
  // spdArray: number[] = [];
  dstArray: number[] = [];

  public lineChartData: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' }
  ];

  public spdArray: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' }
  ];

  loadLogs() {
    this.http.get('http://167.99.202.75/api/data').map(data => data.json()).subscribe(data => {
      this.items = data;

      for (let item of this.items) {
        this.rpmArray.push(Number(item.repHighestRPM));
        this.spdArray.push(Number(item.repAvgSpeed));
        this.dstArray.push(Number(item.repDistance));
      }

    },
      (err) => {
        alert('oops! ' + err);
      });


      //TO DO:change to all three
    let _lineChartData: Array<any> = new Array(this.lineChartData.length);
    // temp arrays with new data
    // let _rpmData: Array<any> = new Array(this.rpmArray.length);
    let _spdData: Array<any> = new Array(this.spdArray.length);
    // let _dstData: Array<any> = new Array(this.dstArray.length);

    // loop over each array
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
      _spdData[i] = { data: new Array(this.spdArray[i].data.length), label: this.spdArray[i].label };
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = this.rpmArray[j]; // replace with data from json
        _spdData[i].data[j] = this.spdArray[j];
      }
    }
    // rpm
    this.lineChartData = _lineChartData;
    this.spdArray = _spdData;

  }
  //chart with RPM data
  // public rpmData: Array<any> = [
  //   { data: this.rpmArray, label: 'RPM' }
  // ];
  // //chart with speed data
  // public speedData:Array<any> = [
  //   {data: this.spdArray, label: 'Spd'}
  // ];
  // //chart with distance traveled data
  // public distanceData:Array<any> = [
  //   {data: this.dstArray, label: 'Dist'},
  //   {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
  //   // {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  // ];

  public lineChartLabels: Array<any> = ['', '', '', '', '', '', ''];//TO DO: add dates here
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
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
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChartsPage');
    this.loadLogs()
  }

}
