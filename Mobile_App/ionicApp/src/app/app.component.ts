import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ChartsPage } from '../pages/charts/charts';

// charts
import { ChartsModule } from 'ng2-charts';

// @Component({
//   templateUrl: 'app.html'
// })
@Component({
  template: `
    <ion-tabs>
      <ion-tab tabIcon="car" [root]="tab1"></ion-tab>
      <ion-tab tabIcon="clipboard" [root]="tab2"></ion-tab>
    </ion-tabs>`
})

export class MyApp {
  tab1: any;
  tab2: any;
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    this.tab1 = HomePage;
    this.tab2 = ChartsPage;

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Charts', component: ChartsPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
