
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public http:Http) {

  }

  // items:any;
  items;

  loadLogs() {
    this.http.get('http://178.62.100.184/api/data').map(data => data.json()).subscribe(data => {
      this.items = data;
      console.log(this.items)
      console.log("test")
    },
  (err) => {
    alert('oops' + err);
  });
  }

}
