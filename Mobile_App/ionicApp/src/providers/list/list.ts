// import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
// import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ListProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListProvider {

  data: any;
 
  // constructor(public http: Http) {
    // this.data = null;
  // }

  getList() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
 
      // this.http.get('http://178.62.100.184:27017/')
      //   .map(res => res.json())
      //   .subscribe(data => {
      //     this.data = data;
      //     resolve(this.data);
        // });
    });
  }

}
