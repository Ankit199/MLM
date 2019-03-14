webpackJsonp([0],{

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductdetailPageModule", function() { return ProductdetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__productdetail__ = __webpack_require__(460);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductdetailPageModule = /** @class */ (function () {
    function ProductdetailPageModule() {
    }
    ProductdetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__productdetail__["a" /* ProductdetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__productdetail__["a" /* ProductdetailPage */]),
            ],
        })
    ], ProductdetailPageModule);
    return ProductdetailPageModule;
}());

//# sourceMappingURL=productdetail.module.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(20);
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
 * Generated class for the ProductdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductdetailPage = /** @class */ (function () {
    function ProductdetailPage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.GoToDashboard = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */]);
        };
    }
    ProductdetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductdetailPage');
    };
    ProductdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-productdetail',template:/*ion-inline-start:"F:\Ankit_New\Personal\mlm\src\pages\productdetail\productdetail.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <ion-icon name="menu" menuToggle class=\'menu-icon\'></ion-icon>\n\n      Product Detail\n\n      <div class="logo"><img src="../../assets/images/contoso_natura_logo.png"></div>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n\n  <h2>Activation Code Details</h2>\n\n    <ion-item>\n\n      <ion-label>Plan Name:</ion-label>\n\n      <ion-select placeholder="Select Plan">\n\n        <ion-option value="PlanA8500">Plan A 8500</ion-option>\n\n        <ion-option value="PlanB4500">Plan B 4500</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-row>\n\n      	<ion-col col-6><button ion-button>Get Details</button></ion-col>\n\n      	<ion-col col-6><button ion-button>Reset</button></ion-col>\n\n      </ion-row>\n\n  </ion-card>\n\n  <ion-card>\n\n  <h2>Unused ePin</h2>\n\n    <table>\n\n      <thead>\n\n        <tr>\n\n          <th>S.No.</th>\n\n          <th>Request No</th>\n\n          <th>Activation Code</th>\n\n          <th>Member Name</th>\n\n          <th>Product Type </th>\n\n          <th>Issue Date</th>\n\n        </tr>\n\n      </thead>\n\n      <tbody>\n\n        <tr>\n\n          <td>1</td>\n\n          <td>KX3408LW1U</td>\n\n          <td>VLU69KS204D8IW</td>\n\n          <td>Contoso Ujala</td>\n\n          <td>Plan A 8500</td>\n\n          <td>27/01/2019</td>\n\n        </tr>\n\n      </tbody>\n\n    </table>\n\n  </ion-card>\n\n  <ion-row>\n\n    <button ion-button>New Register</button>\n\n  </ion-row>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-buttons>\n\n      <button ion-button (click)="GoToDashboard()">Contoso उजाला</button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"F:\Ankit_New\Personal\mlm\src\pages\productdetail\productdetail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ProductdetailPage);
    return ProductdetailPage;
}());

//# sourceMappingURL=productdetail.js.map

/***/ })

});
//# sourceMappingURL=0.js.map