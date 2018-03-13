webpackJsonp([1],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ChartsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// charts
// https://www.djamware.com/post/598953f880aca768e4d2b12b/creating-beautiful-charts-easily-using-ionic-3-and-angular-4
var ChartsPage = (function () {
    ///////
    function ChartsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // TO DO: plot real data, seperate charts for each
        //chart with sample data
        this.lineChartData = [
            { data: [2000, 4500, 4000, 1500, 2500, 1000, 4000], label: 'RPM' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
        ];
        //chart with RPM data
        this.rpmData = [
            { data: [2000, 4500, 4000, 1500, 2500, 1000, 4000], label: 'RPM' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
        ];
        //chart with speed data
        this.speedData = [
            { data: [50, 60, 120, 80, 80, 101, 66], label: 'Spd' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
        ];
        //chart with distance traveled data
        this.distanceData = [
            { data: [200, 350, 400, 15, 25, 10, 40], label: 'Dist' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
        ];
        this.lineChartLabels = ['', '', '', '', '', '', ''];
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
        this.lineChartLegend = true;
        this.lineChartType = 'line';
    }
    ChartsPage.prototype.randomize = function () {
        var _lineChartData = new Array(this.lineChartData.length);
        for (var i = 0; i < this.lineChartData.length; i++) {
            _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
            for (var j = 0; j < this.lineChartData[i].data.length; j++) {
                _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
            }
        }
        this.lineChartData = _lineChartData;
    };
    // events
    ChartsPage.prototype.chartClicked = function (e) {
        console.log(e);
    };
    ChartsPage.prototype.chartHovered = function (e) {
        console.log(e);
    };
    ChartsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChartsPage');
    };
    ChartsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-charts',template:/*ion-inline-start:"/Users/shanedaniels/programing/year3/semerster2/groupProj/3rd-Year-Project/Mobile_App/ionicApp/src/pages/charts/charts.html"*/'<!--\n  Generated template for the ChartsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Charts</ion-title>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n  \n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      AVG. RPM\n    </ion-card-header>\n    <div class="row">\n        <div class="col-md-6">\n          <div style="display: block;">\n          <canvas baseChart width="300" height="400"\n                      [datasets]="rpmData"\n                      [labels]="lineChartLabels"\n                      [options]="lineChartOptions"\n                      [colors]="lineChartColors"\n                      [legend]="lineChartLegend"\n                      [chartType]="lineChartType"\n                      (chartHover)="chartHovered($event)"\n                      (chartClick)="chartClicked($event)"></canvas>\n          </div>\n        </div>\n      </div>\n  </ion-card>\n  <ion-card>\n      <ion-card-header>\n          Speed\n      </ion-card-header>\n      <div class="row">\n          <div class="col-md-6">\n            <div style="display: block;">\n            <canvas baseChart width="300" height="400"\n                        [datasets]="speedData"\n                        [labels]="lineChartLabels"\n                        [options]="lineChartOptions"\n                        [colors]="lineChartColors"\n                        [legend]="lineChartLegend"\n                        [chartType]="lineChartType"\n                        (chartHover)="chartHovered($event)"\n                        (chartClick)="chartClicked($event)"></canvas>\n            </div>\n          </div>\n        </div>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n          Distance\n        </ion-card-header>\n        <div class="row">\n            <div class="col-md-6">\n              <div style="display: block;">\n              <canvas baseChart width="300" height="400"\n                          [datasets]="distanceData"\n                          [labels]="lineChartLabels"\n                          [options]="lineChartOptions"\n                          [colors]="lineChartColors"\n                          [legend]="lineChartLegend"\n                          [chartType]="lineChartType"\n                          (chartHover)="chartHovered($event)"\n                          (chartClick)="chartClicked($event)"></canvas>\n              </div>\n            </div>\n          </div>\n      </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/shanedaniels/programing/year3/semerster2/groupProj/3rd-Year-Project/Mobile_App/ionicApp/src/pages/charts/charts.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object])
    ], ChartsPage);
    return ChartsPage;
    var _a, _b;
}());

//# sourceMappingURL=charts.js.map

/***/ }),

/***/ 118:
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
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/charts/charts.module": [
		459,
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
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(409);
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




var HomePage = (function () {
    function HomePage(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
    }
    HomePage.prototype.loadLogs = function () {
        var _this = this;
        this.http.get('http://178.62.100.184/api/data').map(function (data) { return data.json(); }).subscribe(function (data) {
            _this.items = data;
            console.log(_this.items);
            console.log("test");
        }, function (err) {
            alert('oops' + err);
        });
    };
    HomePage.prototype.ionViewDidLoad = function () {
        // TO DO: fix only loads when re-loaded
        this.loadLogs();
        console.log('onLoad test');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/shanedaniels/programing/year3/semerster2/groupProj/3rd-Year-Project/Mobile_App/ionicApp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Logs</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button full (click)="loadLogs()">Load Data</button>\n  \n  <ion-list>\n    <ion-card>\n      <ion-card-header>\n        <!-- {{item.date}} -->\n        [Trip Date]\n      </ion-card-header>\n      <ion-card-content ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n          <ion-item-group>\n            <ion-item-divider color="light">{{item.type}}</ion-item-divider>\n            <!-- <div class="item-note" item-end>\n              {{item.type}}\n            </div> -->\n              <div class="item-note" item-end>\n                <br>\n                {{item.value}}\n              </div>\n          </ion-item-group>\n          \n      </ion-card-content>\n      <!-- <div class="item item-divider">\n      </div> -->\n    </ion-card>\n\n\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/shanedaniels/programing/year3/semerster2/groupProj/3rd-Year-Project/Mobile_App/ionicApp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(358);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_charts_charts__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_charts__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_charts__);
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
                __WEBPACK_IMPORTED_MODULE_6__pages_charts_charts__["a" /* ChartsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/charts/charts.module#ChartsPageModule', name: 'ChartsPage', segment: 'charts', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9_ng2_charts__["ChartsModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_charts_charts__["a" /* ChartsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_charts_charts__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/shanedaniels/programing/year3/semerster2/groupProj/3rd-Year-Project/Mobile_App/ionicApp/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/shanedaniels/programing/year3/semerster2/groupProj/3rd-Year-Project/Mobile_App/ionicApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 440:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 212,
	"./af.js": 212,
	"./ar": 213,
	"./ar-dz": 214,
	"./ar-dz.js": 214,
	"./ar-kw": 215,
	"./ar-kw.js": 215,
	"./ar-ly": 216,
	"./ar-ly.js": 216,
	"./ar-ma": 217,
	"./ar-ma.js": 217,
	"./ar-sa": 218,
	"./ar-sa.js": 218,
	"./ar-tn": 219,
	"./ar-tn.js": 219,
	"./ar.js": 213,
	"./az": 220,
	"./az.js": 220,
	"./be": 221,
	"./be.js": 221,
	"./bg": 222,
	"./bg.js": 222,
	"./bm": 223,
	"./bm.js": 223,
	"./bn": 224,
	"./bn.js": 224,
	"./bo": 225,
	"./bo.js": 225,
	"./br": 226,
	"./br.js": 226,
	"./bs": 227,
	"./bs.js": 227,
	"./ca": 228,
	"./ca.js": 228,
	"./cs": 229,
	"./cs.js": 229,
	"./cv": 230,
	"./cv.js": 230,
	"./cy": 231,
	"./cy.js": 231,
	"./da": 232,
	"./da.js": 232,
	"./de": 233,
	"./de-at": 234,
	"./de-at.js": 234,
	"./de-ch": 235,
	"./de-ch.js": 235,
	"./de.js": 233,
	"./dv": 236,
	"./dv.js": 236,
	"./el": 237,
	"./el.js": 237,
	"./en-au": 238,
	"./en-au.js": 238,
	"./en-ca": 239,
	"./en-ca.js": 239,
	"./en-gb": 240,
	"./en-gb.js": 240,
	"./en-ie": 241,
	"./en-ie.js": 241,
	"./en-il": 242,
	"./en-il.js": 242,
	"./en-nz": 243,
	"./en-nz.js": 243,
	"./eo": 244,
	"./eo.js": 244,
	"./es": 245,
	"./es-do": 246,
	"./es-do.js": 246,
	"./es-us": 247,
	"./es-us.js": 247,
	"./es.js": 245,
	"./et": 248,
	"./et.js": 248,
	"./eu": 249,
	"./eu.js": 249,
	"./fa": 250,
	"./fa.js": 250,
	"./fi": 251,
	"./fi.js": 251,
	"./fo": 252,
	"./fo.js": 252,
	"./fr": 253,
	"./fr-ca": 254,
	"./fr-ca.js": 254,
	"./fr-ch": 255,
	"./fr-ch.js": 255,
	"./fr.js": 253,
	"./fy": 256,
	"./fy.js": 256,
	"./gd": 257,
	"./gd.js": 257,
	"./gl": 258,
	"./gl.js": 258,
	"./gom-latn": 259,
	"./gom-latn.js": 259,
	"./gu": 260,
	"./gu.js": 260,
	"./he": 261,
	"./he.js": 261,
	"./hi": 262,
	"./hi.js": 262,
	"./hr": 263,
	"./hr.js": 263,
	"./hu": 264,
	"./hu.js": 264,
	"./hy-am": 265,
	"./hy-am.js": 265,
	"./id": 266,
	"./id.js": 266,
	"./is": 267,
	"./is.js": 267,
	"./it": 268,
	"./it.js": 268,
	"./ja": 269,
	"./ja.js": 269,
	"./jv": 270,
	"./jv.js": 270,
	"./ka": 271,
	"./ka.js": 271,
	"./kk": 272,
	"./kk.js": 272,
	"./km": 273,
	"./km.js": 273,
	"./kn": 274,
	"./kn.js": 274,
	"./ko": 275,
	"./ko.js": 275,
	"./ky": 276,
	"./ky.js": 276,
	"./lb": 277,
	"./lb.js": 277,
	"./lo": 278,
	"./lo.js": 278,
	"./lt": 279,
	"./lt.js": 279,
	"./lv": 280,
	"./lv.js": 280,
	"./me": 281,
	"./me.js": 281,
	"./mi": 282,
	"./mi.js": 282,
	"./mk": 283,
	"./mk.js": 283,
	"./ml": 284,
	"./ml.js": 284,
	"./mr": 285,
	"./mr.js": 285,
	"./ms": 286,
	"./ms-my": 287,
	"./ms-my.js": 287,
	"./ms.js": 286,
	"./mt": 288,
	"./mt.js": 288,
	"./my": 289,
	"./my.js": 289,
	"./nb": 290,
	"./nb.js": 290,
	"./ne": 291,
	"./ne.js": 291,
	"./nl": 292,
	"./nl-be": 293,
	"./nl-be.js": 293,
	"./nl.js": 292,
	"./nn": 294,
	"./nn.js": 294,
	"./pa-in": 295,
	"./pa-in.js": 295,
	"./pl": 296,
	"./pl.js": 296,
	"./pt": 297,
	"./pt-br": 298,
	"./pt-br.js": 298,
	"./pt.js": 297,
	"./ro": 299,
	"./ro.js": 299,
	"./ru": 300,
	"./ru.js": 300,
	"./sd": 301,
	"./sd.js": 301,
	"./se": 302,
	"./se.js": 302,
	"./si": 303,
	"./si.js": 303,
	"./sk": 304,
	"./sk.js": 304,
	"./sl": 305,
	"./sl.js": 305,
	"./sq": 306,
	"./sq.js": 306,
	"./sr": 307,
	"./sr-cyrl": 308,
	"./sr-cyrl.js": 308,
	"./sr.js": 307,
	"./ss": 309,
	"./ss.js": 309,
	"./sv": 310,
	"./sv.js": 310,
	"./sw": 311,
	"./sw.js": 311,
	"./ta": 312,
	"./ta.js": 312,
	"./te": 313,
	"./te.js": 313,
	"./tet": 314,
	"./tet.js": 314,
	"./tg": 315,
	"./tg.js": 315,
	"./th": 316,
	"./th.js": 316,
	"./tl-ph": 317,
	"./tl-ph.js": 317,
	"./tlh": 318,
	"./tlh.js": 318,
	"./tr": 319,
	"./tr.js": 319,
	"./tzl": 320,
	"./tzl.js": 320,
	"./tzm": 321,
	"./tzm-latn": 322,
	"./tzm-latn.js": 322,
	"./tzm.js": 321,
	"./ug-cn": 323,
	"./ug-cn.js": 323,
	"./uk": 324,
	"./uk.js": 324,
	"./ur": 325,
	"./ur.js": 325,
	"./uz": 326,
	"./uz-latn": 327,
	"./uz-latn.js": 327,
	"./uz.js": 326,
	"./vi": 328,
	"./vi.js": 328,
	"./x-pseudo": 329,
	"./x-pseudo.js": 329,
	"./yo": 330,
	"./yo.js": 330,
	"./zh-cn": 331,
	"./zh-cn.js": 331,
	"./zh-hk": 332,
	"./zh-hk.js": 332,
	"./zh-tw": 333,
	"./zh-tw.js": 333
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
webpackContext.id = 440;

/***/ })

},[334]);
//# sourceMappingURL=main.js.map