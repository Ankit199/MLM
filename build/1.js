webpackJsonp([1],{

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditprofilePageModule", function() { return EditprofilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editprofile__ = __webpack_require__(459);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditprofilePageModule = /** @class */ (function () {
    function EditprofilePageModule() {
    }
    EditprofilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__editprofile__["a" /* EditprofilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__editprofile__["a" /* EditprofilePage */]),
            ],
        })
    ], EditprofilePageModule);
    return EditprofilePageModule;
}());

//# sourceMappingURL=editprofile.module.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprofilePage; });
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
 * Generated class for the EditprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditprofilePage = /** @class */ (function () {
    function EditprofilePage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.GoToDashboard = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */]);
        };
    }
    EditprofilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditprofilePage');
    };
    EditprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-editprofile',template:/*ion-inline-start:"F:\Ankit_New\Personal\mlm\src\pages\editprofile\editprofile.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <ion-icon name="menu" menuToggle class=\'menu-icon\'></ion-icon>\n\n      Edit Profile\n\n      <div class="logo"><img src="../../assets/images/contoso_natura_logo.png"></div>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n\n    <h2>Sponsor</h2>\n\n    <ion-row>\n\n      <ion-col col-4><strong>Sponsor Code:</strong></ion-col>\n\n      <ion-col col-8>WEM4560</ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n  <ion-card>\n\n    <h2>Personal Details</h2>\n\n    <ion-item>\n\n      <ion-label>Full Name:</ion-label>\n\n      <ion-input placeholder="Enter your name"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Mobile:</ion-label>\n\n      <ion-input placeholder="Enter your Mobile"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>State:</ion-label>\n\n      <ion-select placeholder="Select State">\n\n        <ion-option value="UP">UP</ion-option>\n\n        <ion-option value="MP">MP</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Distract:</ion-label>\n\n      <ion-select placeholder="Select Distract">\n\n        <ion-option value="Lucknow">Lucknow</ion-option>\n\n        <ion-option value="Kanpur">Kanpur</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>City:</ion-label>\n\n      <ion-input placeholder="Enter your city"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Address:</ion-label>\n\n      <ion-input placeholder="Enter your address"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Pin:</ion-label>\n\n      <ion-input placeholder="Enter your PIN"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Aadhar No.:</ion-label>\n\n      <ion-input placeholder="Enter your Aadhar No."></ion-input>\n\n    </ion-item>\n\n  </ion-card>\n\n  <ion-card>\n\n    <h2>Bank Details</h2>\n\n    <ion-item>\n\n      <ion-label>Account No.:</ion-label>\n\n      <ion-input placeholder="Enter your account"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Bank Name:</ion-label>\n\n      <ion-input placeholder="Enter your bank name"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Branch Name:</ion-label>\n\n      <ion-input placeholder="Enter your branch name"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>IFSC Code:</ion-label>\n\n      <ion-input placeholder="Enter your IFSC Code"></ion-input>\n\n    </ion-item>\n\n  </ion-card>\n\n  <ion-row>\n\n    <ion-col col-6>\n\n      <button ion-button>Submit</button>\n\n    </ion-col>\n\n    <ion-col col-6>\n\n      <button ion-button>Reset</button>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-buttons>\n\n      <button ion-button>View Join Package</button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"F:\Ankit_New\Personal\mlm\src\pages\editprofile\editprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], EditprofilePage);
    return EditprofilePage;
}());

//# sourceMappingURL=editprofile.js.map

/***/ })

});
//# sourceMappingURL=1.js.map