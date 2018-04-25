
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
    this.loadLogs();
    
  }

  items: any;
  rating = false;

  loadLogs() {
    this.http.get('http://167.99.202.75/api/data').map(data => data.json()).subscribe(data => {
      this.items = data;
      this.items.reverse();

      // check last 5
      this.checkRating();
    },
  (err) => {
    alert('oops' + err);
  });
  
  }

  checkRating() {
    this.items.forEach(item => {
      
    });
    this.items.forEach(element => {
      if (element.repHighestRPM > 3500) {
        this.rating = true;
        console.log("true");
      }
      else {
        this.rating = false;
        console.log("false");
      }
      
    });

    // for (let item of this.items) {
    //   // if (item.repHighestRPM > 3500) {
    //   //       this.rating = true;
    //   //       console.log("true");
    //   //     }
    //   //     else {
    //   //       this.rating = false;
    //   //       console.log("false");
    //   //     }
    // }
    
  }
  getData(item){
    // push item to DataPage
    this.navCtrl.push(DataPage, item);
  }

  ionViewDidLoad() {
    // this.loadLogs()
  }

}
