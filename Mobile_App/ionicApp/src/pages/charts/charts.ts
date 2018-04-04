import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

// charts
import { ChartsModule } from 'ng2-charts';
//npm install --save @types/jquery

import * as $ from "jquery";

/**
 * Generated class for the ChartsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 // charts
 // https://www.djamware.com/post/598953f880aca768e4d2b12b/creating-beautiful-charts-easily-using-ionic-3-and-angular-4

@IonicPage()
@Component({
  selector: 'page-charts',
  templateUrl: 'charts.html',
})
export class ChartsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {

  }

  // items:any;
  items;

  loadLogs() {
    this.http.get('http://167.99.82.134/api/data').map(data => data.json()).subscribe(data => {
      // if(!itemListResponse.has("id");
      this.items = data;
      console.log(this.items)
    },
  (err) => {
    alert('oops! ' + err);
  });
  }

//   try {
//     itemListResponse = <Item[]>JSON.parse(responseArray);
 
//     if(!itemListResponse.has("id") ||
//        !itemListResponse.has("type") ||
//        !itemListResponse.has("state")){
 
//        throw "Invalid Item";
//     }
//  } catch (e){
 
//  }

  // TO DO: plot real data
  rpmArray: number[] = [1500, 2000, 3500];
  spdArray: number[] = [30, 35, 60, 40];
  dstArray: number[] = [4000, 5000, 200];

  public fillarr(){
    $.getJSON("test.php?c=10",function(data){
      this.rpmArray = this.rpmArray.concat(data);
    });
}
  

  //chart with RPM data
  public rpmData:Array<any> = [
    {data: this.rpmArray, label: 'RPM'}
  ];
  //chart with speed data
  public speedData:Array<any> = [
    {data: this.spdArray, label: 'Spd'}
  ];
  //chart with distance traveled data
  public distanceData:Array<any> = [
    {data: this.dstArray, label: 'Dist'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    // {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  ];

  // TO DO: update for dates maybe
  public lineChartLabels:Array<any> = ['', '', '', '', '', '', ''];
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
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
  
  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
  
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
  
  public chartHovered(e:any):void {
    console.log(e);
  }
  ///////

  // constructor(public navCtrl: NavController, public navParams: NavParams) {
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChartsPage');
  }

}
