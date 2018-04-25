webpackJsonp([2],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChartsPage = (function () {
    function ChartsPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        // Arrays for data
        this.lineChartData = [
            { data: [] }
        ];
        this.rpmArray = [
            { data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
        ];
        this.spdArray = [
            { data: [] }
        ];
        this.dstArray = [
            { data: [] }
        ];
        this.lineChartLabels = ['', '', '', '', '', '', '', '', '', '', '', '', '']; //TO DO: add dates here
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            }
        ];
        this.lineChartLegend = false;
        this.lineChartType = 'line';
        // first load overrides hardcoded data
        this.loadLogs();
    }
    ChartsPage.prototype.loadLogs = function () {
        var _this = this;
        this.http.get('http://167.99.202.75/api/data').map(function (data) { return data.json(); }).subscribe(function (data) {
            _this.items = data;
            _this.count = data.length;
            for (var _i = 0, _a = _this.items; _i < _a.length; _i++) {
                var item = _a[_i];
                _this.rpmArray.push(Number(item.repHighestRPM));
                _this.spdArray.push(Number(item.repAvgSpeed));
                _this.dstArray.push(Number(item.repDistance));
            }
        }, function (err) {
            alert('oops! ' + err);
        });
        // temp arrays with new data
        var _rpmData = new Array(this.rpmArray.length);
        var _spdData = new Array(this.spdArray.length);
        var _dstData = new Array(this.dstArray.length);
        // loop over array
        for (var i = 0; i < this.lineChartData.length; i++) {
            _rpmData[i] = { data: new Array(this.rpmArray[i].data.length) };
            _spdData[i] = { data: new Array(this.spdArray[i].data.length) };
            _dstData[i] = { data: new Array(this.dstArray[i].data.length) };
            for (var j = 0; j < this.rpmArray[i].data.length; j++) {
                _rpmData[i].data[j] = this.rpmArray[j]; // replace with data from json
                _spdData[i].data[j] = this.spdArray[j];
                _dstData[i].data[j] = this.dstArray[j];
            }
        }
        // rpm
        this.rpmArray = _rpmData;
        this.spdArray = _spdData;
        this.dstArray = _dstData;
    };
    // events
    ChartsPage.prototype.chartClicked = function (e) {
        console.log(e);
    };
    ChartsPage.prototype.chartHovered = function (e) {
        console.log(e);
    };
    ChartsPage.prototype.ionViewDidLoad = function () {
        // first load overrides hardcoded data
        this.loadLogs();
    };
    ChartsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-charts',template:/*ion-inline-start:"/Users/shanedaniels/programing/year3/semerster2/GroupOBD/3rd-Year-Project/Mobile_App/ionicApp/src/pages/charts/charts.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Log Charts</ion-title>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n  \n\n</ion-header>\n\n\n<ion-content padding>\n    <button ion-button full (click)="loadLogs()">Load Data</button>\n\n  <ion-card>\n    <ion-card-header>\n      Highest RPM\n    </ion-card-header>\n    <div class="row">\n        <div class="col-md-6">\n          <div style="display: block;">\n          <canvas baseChart width="300" height="400"\n                      [datasets]="rpmArray"\n                      [labels]="lineChartLabels"\n                      [options]="lineChartOptions"\n                      [colors]="lineChartColors"\n                      [legend]="lineChartLegend"\n                      [chartType]="lineChartType"\n                      (chartHover)="chartHovered($event)"\n                      (chartClick)="chartClicked($event)">\n            </canvas>\n          </div>\n        </div>\n      </div>\n\n  </ion-card>\n  <ion-card>\n      <ion-card-header>\n          Average Speed\n      </ion-card-header>\n      <div class="row">\n          <div class="col-md-6">\n            <div style="display: block;">\n            <canvas baseChart width="300" height="400"\n                        [datasets]="spdArray"\n                        [labels]="lineChartLabels"\n                        [options]="lineChartOptions"\n                        [colors]="lineChartColors"\n                        [legend]="lineChartLegend"\n                        [chartType]="lineChartType"\n                        (chartHover)="chartHovered($event)"\n                        (chartClick)="chartClicked($event)"></canvas>\n            </div>\n          </div>\n        </div>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n          Distance\n        </ion-card-header>\n        <div class="row">\n            <div class="col-md-6">\n              <div style="display: block;">\n              <canvas baseChart width="300" height="400"\n                          [datasets]="dstArray"\n                          [labels]="lineChartLabels"\n                          [options]="lineChartOptions"\n                          [colors]="lineChartColors"\n                          [legend]="lineChartLegend"\n                          [chartType]="lineChartType"\n                          (chartHover)="chartHovered($event)"\n                          (chartClick)="chartClicked($event)"></canvas>\n              </div>\n            </div>\n          </div>\n      </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/shanedaniels/programing/year3/semerster2/GroupOBD/3rd-Year-Project/Mobile_App/ionicApp/src/pages/charts/charts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], ChartsPage);
    return ChartsPage;
}());

//# sourceMappingURL=charts.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataPage = (function () {
    function DataPage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // selected data
        this.item = this.navParams.data;
        // data arrays
        this.rpmData = [
            { data: [] }
        ];
        this.spdData = [
            { data: [] }
        ];
        this.lineChartLabels = [];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = false;
        this.lineChartType = 'line';
        var index = 0;
        var label = 0;
        this.item.rpmList.forEach(function (element) {
            label++;
            _this.rpmData[0].data.push(element);
            _this.lineChartLabels.push(label);
        });
        index = 0;
        this.item.speedList.forEach(function (element) {
            _this.spdData[0].data.push(element);
        });
    }
    // events
    DataPage.prototype.chartClicked = function (e) {
        console.log(e);
    };
    DataPage.prototype.chartHovered = function (e) {
        console.log(e);
    };
    Object.defineProperty(DataPage.prototype, "date", {
        get: function () {
            return (this.item.date);
        },
        enumerable: true,
        configurable: true
    });
    DataPage.prototype.ionViewDidLoad = function () {
        //console.log(this.item.rpmList);
        // let index = 0;
        // let label = 0;
        // this.item.rpmList.forEach(element => {
        //   label++;
        //   console.log(element + " " +label);
        //   this.rpmData[0].data.push(element);
        //   this.lineChartLabels.push(label)
        // });
    };
    DataPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-data',template:/*ion-inline-start:"/Users/shanedaniels/programing/year3/semerster2/GroupOBD/3rd-Year-Project/Mobile_App/ionicApp/src/pages/data/data.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>data</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding >\n\n    <ion-title >{{date}}</ion-title>\n\n    <ion-card>\n        <ion-card-header>\n          RPM\n        </ion-card-header>\n        <div class="row">\n            <div class="col-md-6">\n              <div style="display: block;">\n              <canvas baseChart width="300" height="400"\n                          [datasets]="rpmData"\n                          [labels]="lineChartLabels"\n                          [options]="lineChartOptions"\n                          [colors]="lineChartColors"\n                          [legend]="lineChartLegend"\n                          [chartType]="lineChartType"\n                          (chartHover)="chartHovered($event)"\n                          (chartClick)="chartClicked($event)">\n                </canvas>\n              </div>\n            </div>\n          </div>\n      </ion-card>\n\n      <ion-card>\n          <ion-card-header>\n            Speed\n          </ion-card-header>\n          <div class="row">\n              <div class="col-md-6">\n                <div style="display: block;">\n                <canvas baseChart width="300" height="400"\n                            [datasets]="spdData"\n                            [labels]="lineChartLabels"\n                            [options]="lineChartOptions"\n                            [colors]="lineChartColors"\n                            [legend]="lineChartLegend"\n                            [chartType]="lineChartType"\n                            (chartHover)="chartHovered($event)"\n                            (chartClick)="chartClicked($event)">\n                  </canvas>\n                </div>\n              </div>\n            </div>\n        </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/shanedaniels/programing/year3/semerster2/GroupOBD/3rd-Year-Project/Mobile_App/ionicApp/src/pages/data/data.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], DataPage);
    return DataPage;
}());

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 120:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/charts/charts.module": [
		460,
		1
	],
	"../pages/data/data.module": [
		461,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 162;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_data__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(navCtrl, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.buttonColor = "primary";
        this.rating = false;
        this.loadLogs();
    }
    HomePage.prototype.someAction = function () {
        this.buttonColor = "light";
    };
    HomePage.prototype.loadLogs = function () {
        var _this = this;
        this.http.get('http://167.99.202.75/api/data').map(function (data) { return data.json(); }).subscribe(function (data) {
            _this.items = data;
            _this.items.reverse();
            // check last 5
            _this.checkRating();
        }, function (err) {
            alert('oops' + err);
        });
    };
    HomePage.prototype.checkRating = function () {
        for (var i = 0; i < 5; i++) {
            if (this.items[i].repHighestRPM >= 3500)
                this.rating = true;
        }
    };
    HomePage.prototype.doAlert = function () {
        if (this.rating == true) {
            var alert_1 = this.alertCtrl.create({
                title: 'Driver Rating:',
                subTitle: 'You have exceded 3500 RPM recently.  Keep your RPM down to save on fuel and emissions!',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else if (this.rating == false) {
            var alert_2 = this.alertCtrl.create({
                title: 'Driver Rating:',
                subTitle: 'You have not exceded 3500 RPM, Keep it up!',
                buttons: ['OK']
            });
            alert_2.present();
        }
    };
    HomePage.prototype.getData = function (item) {
        // push item to DataPage
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__data_data__["a" /* DataPage */], item);
    };
    HomePage.prototype.ionViewDidLoad = function () {
        // this.loadLogs()
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/shanedaniels/programing/year3/semerster2/GroupOBD/3rd-Year-Project/Mobile_App/ionicApp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Trip Logs</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="main">\n\n  <!-- put rating here -->\n  <!-- <button ion-button block color="dark" (click)="doAlert()">Show Rating</button> -->\n  <!-- <ion-card class="rating-card">\n      <ion-item class="rating-item">\n          Bad driver: {{rating}}\n      </ion-item>\n  </ion-card> -->\n  <button *ngIf="!rating" ion-button full color="secondary" (click)="doAlert()">You are an eco driver</button>\n  <button *ngIf="rating" ion-button full color="danger" (click)="doAlert()">You are not an eco driver!</button>\n\n    <ion-card class="reports-card" ion-item *ngFor="let item of items" (click)="getData(item)">\n      <ion-card-header>\n        {{item.date}}\n      </ion-card-header>\n\n          <ion-item>\n              <ion-icon name="ios-speedometer" item-start large></ion-icon>\n              <h2>Highest RPM:</h2>\n              <p>{{item.repHighestRPM}} RPM</p>\n          </ion-item>\n\n          <ion-item>\n            <ion-icon name="ios-car" item-start large></ion-icon>\n            <h2>Average Speed:</h2>\n            <p>{{item.repAvgSpeed}} KPH</p>\n          </ion-item>\n\n            \n          <ion-item>\n            <ion-icon name="ios-navigate" item-start large></ion-icon>\n            <h2>Distance Traveled:</h2>\n            <p>{{item.repDistance}} K</p>\n          </ion-item>\n          <ion-icon name="ios-arrow-forward" item-end></ion-icon>\n\n    </ion-card>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/shanedaniels/programing/year3/semerster2/GroupOBD/3rd-Year-Project/Mobile_App/ionicApp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(360);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_charts_charts__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_data_data__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_charts__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_charts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// charts

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_charts_charts__["a" /* ChartsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_data_data__["a" /* DataPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/charts/charts.module#ChartsPageModule', name: 'ChartsPage', segment: 'charts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/data/data.module#DataPageModule', name: 'DataPage', segment: 'data', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10_ng2_charts__["ChartsModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_charts_charts__["a" /* ChartsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_data_data__["a" /* DataPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_charts_charts__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// @Component({
//template:/*ion-inline-start:"/Users/shanedaniels/programing/year3/semerster2/GroupOBD/3rd-Year-Project/Mobile_App/ionicApp/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/shanedaniels/programing/year3/semerster2/GroupOBD/3rd-Year-Project/Mobile_App/ionicApp/src/app/app.html"*/
// })
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        this.tab1 = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.tab2 = __WEBPACK_IMPORTED_MODULE_5__pages_charts_charts__["a" /* ChartsPage */];
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Charts', component: __WEBPACK_IMPORTED_MODULE_5__pages_charts_charts__["a" /* ChartsPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "\n    <ion-tabs>\n      <ion-tab tabIcon=\"car\" [root]=\"tab1\"></ion-tab>\n      <ion-tab tabIcon=\"clipboard\" [root]=\"tab2\"></ion-tab>\n    </ion-tabs>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 441:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 214,
	"./af.js": 214,
	"./ar": 215,
	"./ar-dz": 216,
	"./ar-dz.js": 216,
	"./ar-kw": 217,
	"./ar-kw.js": 217,
	"./ar-ly": 218,
	"./ar-ly.js": 218,
	"./ar-ma": 219,
	"./ar-ma.js": 219,
	"./ar-sa": 220,
	"./ar-sa.js": 220,
	"./ar-tn": 221,
	"./ar-tn.js": 221,
	"./ar.js": 215,
	"./az": 222,
	"./az.js": 222,
	"./be": 223,
	"./be.js": 223,
	"./bg": 224,
	"./bg.js": 224,
	"./bm": 225,
	"./bm.js": 225,
	"./bn": 226,
	"./bn.js": 226,
	"./bo": 227,
	"./bo.js": 227,
	"./br": 228,
	"./br.js": 228,
	"./bs": 229,
	"./bs.js": 229,
	"./ca": 230,
	"./ca.js": 230,
	"./cs": 231,
	"./cs.js": 231,
	"./cv": 232,
	"./cv.js": 232,
	"./cy": 233,
	"./cy.js": 233,
	"./da": 234,
	"./da.js": 234,
	"./de": 235,
	"./de-at": 236,
	"./de-at.js": 236,
	"./de-ch": 237,
	"./de-ch.js": 237,
	"./de.js": 235,
	"./dv": 238,
	"./dv.js": 238,
	"./el": 239,
	"./el.js": 239,
	"./en-au": 240,
	"./en-au.js": 240,
	"./en-ca": 241,
	"./en-ca.js": 241,
	"./en-gb": 242,
	"./en-gb.js": 242,
	"./en-ie": 243,
	"./en-ie.js": 243,
	"./en-il": 244,
	"./en-il.js": 244,
	"./en-nz": 245,
	"./en-nz.js": 245,
	"./eo": 246,
	"./eo.js": 246,
	"./es": 247,
	"./es-do": 248,
	"./es-do.js": 248,
	"./es-us": 249,
	"./es-us.js": 249,
	"./es.js": 247,
	"./et": 250,
	"./et.js": 250,
	"./eu": 251,
	"./eu.js": 251,
	"./fa": 252,
	"./fa.js": 252,
	"./fi": 253,
	"./fi.js": 253,
	"./fo": 254,
	"./fo.js": 254,
	"./fr": 255,
	"./fr-ca": 256,
	"./fr-ca.js": 256,
	"./fr-ch": 257,
	"./fr-ch.js": 257,
	"./fr.js": 255,
	"./fy": 258,
	"./fy.js": 258,
	"./gd": 259,
	"./gd.js": 259,
	"./gl": 260,
	"./gl.js": 260,
	"./gom-latn": 261,
	"./gom-latn.js": 261,
	"./gu": 262,
	"./gu.js": 262,
	"./he": 263,
	"./he.js": 263,
	"./hi": 264,
	"./hi.js": 264,
	"./hr": 265,
	"./hr.js": 265,
	"./hu": 266,
	"./hu.js": 266,
	"./hy-am": 267,
	"./hy-am.js": 267,
	"./id": 268,
	"./id.js": 268,
	"./is": 269,
	"./is.js": 269,
	"./it": 270,
	"./it.js": 270,
	"./ja": 271,
	"./ja.js": 271,
	"./jv": 272,
	"./jv.js": 272,
	"./ka": 273,
	"./ka.js": 273,
	"./kk": 274,
	"./kk.js": 274,
	"./km": 275,
	"./km.js": 275,
	"./kn": 276,
	"./kn.js": 276,
	"./ko": 277,
	"./ko.js": 277,
	"./ky": 278,
	"./ky.js": 278,
	"./lb": 279,
	"./lb.js": 279,
	"./lo": 280,
	"./lo.js": 280,
	"./lt": 281,
	"./lt.js": 281,
	"./lv": 282,
	"./lv.js": 282,
	"./me": 283,
	"./me.js": 283,
	"./mi": 284,
	"./mi.js": 284,
	"./mk": 285,
	"./mk.js": 285,
	"./ml": 286,
	"./ml.js": 286,
	"./mr": 287,
	"./mr.js": 287,
	"./ms": 288,
	"./ms-my": 289,
	"./ms-my.js": 289,
	"./ms.js": 288,
	"./mt": 290,
	"./mt.js": 290,
	"./my": 291,
	"./my.js": 291,
	"./nb": 292,
	"./nb.js": 292,
	"./ne": 293,
	"./ne.js": 293,
	"./nl": 294,
	"./nl-be": 295,
	"./nl-be.js": 295,
	"./nl.js": 294,
	"./nn": 296,
	"./nn.js": 296,
	"./pa-in": 297,
	"./pa-in.js": 297,
	"./pl": 298,
	"./pl.js": 298,
	"./pt": 299,
	"./pt-br": 300,
	"./pt-br.js": 300,
	"./pt.js": 299,
	"./ro": 301,
	"./ro.js": 301,
	"./ru": 302,
	"./ru.js": 302,
	"./sd": 303,
	"./sd.js": 303,
	"./se": 304,
	"./se.js": 304,
	"./si": 305,
	"./si.js": 305,
	"./sk": 306,
	"./sk.js": 306,
	"./sl": 307,
	"./sl.js": 307,
	"./sq": 308,
	"./sq.js": 308,
	"./sr": 309,
	"./sr-cyrl": 310,
	"./sr-cyrl.js": 310,
	"./sr.js": 309,
	"./ss": 311,
	"./ss.js": 311,
	"./sv": 312,
	"./sv.js": 312,
	"./sw": 313,
	"./sw.js": 313,
	"./ta": 314,
	"./ta.js": 314,
	"./te": 315,
	"./te.js": 315,
	"./tet": 316,
	"./tet.js": 316,
	"./tg": 317,
	"./tg.js": 317,
	"./th": 318,
	"./th.js": 318,
	"./tl-ph": 319,
	"./tl-ph.js": 319,
	"./tlh": 320,
	"./tlh.js": 320,
	"./tr": 321,
	"./tr.js": 321,
	"./tzl": 322,
	"./tzl.js": 322,
	"./tzm": 323,
	"./tzm-latn": 324,
	"./tzm-latn.js": 324,
	"./tzm.js": 323,
	"./ug-cn": 325,
	"./ug-cn.js": 325,
	"./uk": 326,
	"./uk.js": 326,
	"./ur": 327,
	"./ur.js": 327,
	"./uz": 328,
	"./uz-latn": 329,
	"./uz-latn.js": 329,
	"./uz.js": 328,
	"./vi": 330,
	"./vi.js": 330,
	"./x-pseudo": 331,
	"./x-pseudo.js": 331,
	"./yo": 332,
	"./yo.js": 332,
	"./zh-cn": 333,
	"./zh-cn.js": 333,
	"./zh-hk": 334,
	"./zh-hk.js": 334,
	"./zh-tw": 335,
	"./zh-tw.js": 335
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 441;

/***/ })

},[336]);
//# sourceMappingURL=main.js.map