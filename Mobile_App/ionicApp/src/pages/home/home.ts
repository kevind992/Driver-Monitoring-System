
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { DataPage } from '../data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public http:Http) {

  }

  items;

  loadLogs() {
    this.http.get('http://167.99.202.75/api/data').map(data => data.json()).subscribe(data => {
      this.items = data;
      console.log(this.items)
    },
  (err) => {
    alert('oops' + err);
  });
  }

  // populate with json data
  getData(item){


    // push item to DataPage
    this.navCtrl.push(DataPage, item);
  }

  ionViewDidLoad() {
    // TO DO: fix only loads when re-loaded
    this.loadLogs()
    console.log('onLoad test')
  }

}
