
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

  private buttonColor: string = "primary";

    someAction() {
        this.buttonColor = "light";
    }

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
      if (this.items[i].repHighestRPM >= 3500) // check if the driver is going over 3500 rpm over the last five records
        this.rating = true;
    }
  }

  doAlert() {
    if (this.rating == true) {
      let alert = this.alertCtrl.create({
        title: 'Driver Rating:',
        subTitle: 'You have exceded 3500 RPM recently.  Keep your RPM down to save on fuel and emissions!',
        buttons: ['OK']
      });
      alert.present();
    }

    else if (this.rating == false) {
      let alert = this.alertCtrl.create({
        title: 'Driver Rating:',
        subTitle: 'You have not exceded 3500 RPM, Keep it up!',
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
