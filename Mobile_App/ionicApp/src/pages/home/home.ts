
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { DataPage } from '../data/data';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public http:Http, public alertCtrl: AlertController) {
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
    for (let i = 0; i < 5; i++) {
      if (this.items[i].repHighestRPM >= 800) {
        this.rating = true;
        console.log("true");
      }
    }
  }

  doAlert() {
    if (this.rating == true) {
      let alert = this.alertCtrl.create({
        title: 'Driver Rating',
        subTitle: 'Bad Driver!',
        buttons: ['OK']
      });
      alert.present();
    }

    else if (this.rating == false) {
      let alert = this.alertCtrl.create({
        title: 'Driver Rating',
        subTitle: 'Good Driver!',
        buttons: ['OK']
      });
      alert.present();
    }
    
  }
  
  getData(item){
    // push item to DataPage
    this.navCtrl.push(DataPage, item);
  }

  ionViewDidLoad() {
    // this.loadLogs()
  }

}
