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

  items;
  count;

  // Arrays for data
  public lineChartData: Array<any> = [
    { data: []}
  ];

  public rpmArray: Array<any> = [
    { data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
  ];

  public spdArray: Array<any> = [
    { data: []}
  ];
  public dstArray: Array<any> = [
    { data: []}
  ];

  loadLogs() {
    this.http.get('http://167.99.202.75/api/data').map(data => data.json()).subscribe(data => {
      this.items = data;
      this.count = data.length;

      for (let item of this.items) {
        this.rpmArray.push(Number(item.repHighestRPM));
        this.spdArray.push(Number(item.repAvgSpeed));
        this.dstArray.push(Number(item.repDistance));
      }

    },
      (err) => {
        alert('oops! ' + err);
      });

    // temp arrays with new data
    let _rpmData: Array<any> = new Array(this.rpmArray.length);
    let _spdData: Array<any> = new Array(this.spdArray.length);
    let _dstData: Array<any> = new Array(this.dstArray.length);

    // loop over array

    for (let i = 0; i < this.lineChartData.length; i++) {
      _rpmData[i] = { data: new Array(this.rpmArray[i].data.length)};
      _spdData[i] = { data: new Array(this.spdArray[i].data.length)};
      _dstData[i] = { data: new Array(this.dstArray[i].data.length)};
      for (let j = 0; j < this.rpmArray[i].data.length; j++) {
        _rpmData[i].data[j] = this.rpmArray[j]; // replace with data from json
        _spdData[i].data[j] = this.spdArray[j];
        _dstData[i].data[j] = this.dstArray[j];
      }
    }
    // rpm
    this.rpmArray = _rpmData;
    this.spdArray = _spdData;
    this.dstArray = _dstData;
  }

  public lineChartLabels: Array<any> = ['', '', '', '', '', '', '', '', '', '', '', '', ''];//TO DO: add dates here
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
  public lineChartLegend: boolean = false;
  public lineChartType: string = 'line';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  ionViewDidLoad() {
    // first load overrides hardcoded data
    this.loadLogs()
  }

}
