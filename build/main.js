webpackJsonp([1],{

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonfunctionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import moment from 'moment';
/*
  Generated class for the CommonfunctionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CommonfunctionProvider = /** @class */ (function () {
    function CommonfunctionProvider(alertCtrl, loadingCtrl) {
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.isMissed = false;
        console.log('Hello CommonfunctionsProvider Provider');
    }
    CommonfunctionProvider.prototype.createAlert = function (title, subtitle) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subtitle,
            buttons: ['OK']
        });
        return alert;
    };
    CommonfunctionProvider.prototype.presentLoadingDefault = function () {
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        return loading;
    };
    CommonfunctionProvider.prototype.syncLoadingDefault = function () {
        var loading = this.loadingCtrl.create({
            content: 'Please wait, Synchronizing Data....'
        });
        return loading;
    };
    CommonfunctionProvider.prototype.date_format = function (date, timeZoneOffset, format) {
        var formattedDate = '';
        timeZoneOffset = -timeZoneOffset;
        if (date) {
            var todaysDate = __WEBPACK_IMPORTED_MODULE_2_moment___default()().format("MM-DD-YYYY");
            var todayDateTime = __WEBPACK_IMPORTED_MODULE_2_moment___default()().format("MM-DD-YYYY hh:mmA");
            var givenDate = __WEBPACK_IMPORTED_MODULE_2_moment___default()(date).format("MM-DD-YYYY");
            var givenDateTime = __WEBPACK_IMPORTED_MODULE_2_moment___default()(date).format("MM-DD-YYYY hh:mmA");
            if (todaysDate == givenDate) {
                if (format == 'MMM DD, YYYY') {
                    formattedDate = timeZoneOffset ? 'Today' : __WEBPACK_IMPORTED_MODULE_2_moment___default()(date).format("hh:mm A");
                }
                else if (format == 'hh:mm A') {
                    formattedDate = timeZoneOffset ? __WEBPACK_IMPORTED_MODULE_2_moment___default()(date).zone(timeZoneOffset).format("hh:mm A") : __WEBPACK_IMPORTED_MODULE_2_moment___default()(date).format("hh:mm A");
                }
                else {
                    formattedDate = timeZoneOffset ? 'Today - ' + __WEBPACK_IMPORTED_MODULE_2_moment___default()(date).zone(timeZoneOffset).format("hh:mm A") : __WEBPACK_IMPORTED_MODULE_2_moment___default()(date).format("hh:mm A");
                }
            }
            else {
                if (format == 'MMM DD, YYYY') {
                    formattedDate = timeZoneOffset ? __WEBPACK_IMPORTED_MODULE_2_moment___default()(date).zone(timeZoneOffset).format("MMM DD, YYYY") : __WEBPACK_IMPORTED_MODULE_2_moment___default()(date).format("MMM DD, YYYY");
                }
                else if (format == 'hh:mm A') {
                    formattedDate = timeZoneOffset ? __WEBPACK_IMPORTED_MODULE_2_moment___default()(date).zone(timeZoneOffset).format("hh:mm A") : __WEBPACK_IMPORTED_MODULE_2_moment___default()(date).format("hh:mm A");
                }
                else {
                    formattedDate = timeZoneOffset ? __WEBPACK_IMPORTED_MODULE_2_moment___default()(date).zone(timeZoneOffset).format("MMM DD, YYYY hh:mm A") : __WEBPACK_IMPORTED_MODULE_2_moment___default()(date).format("MMM DD, YYYY hh:mm A");
                }
            }
            return formattedDate;
        }
        else {
            return formattedDate;
        }
    };
    CommonfunctionProvider.prototype.b64toBlob = function (b64Data) {
        var contentType = b64Data.split(',')[0].split(':')[1].split(';')[0] || '';
        var sliceSize = 256;
        var byteCharacters = atob(b64Data.split(',')[1]);
        var byteArrays = [];
        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);
            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            var byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        return new Blob(byteArrays, { type: contentType });
    };
    CommonfunctionProvider.prototype.presentLoadingForSpeak = function () {
        var loading = this.loadingCtrl.create({
            content: 'Please speak...'
        });
        return loading;
    };
    CommonfunctionProvider.prototype.dataURItoBlob = function (dataURI) {
        // convert base64/URLEncoded data component to raw binary data held in a string
        var byteString = atob(dataURI.split(',')[1]);
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        var bb = new Blob([ab], {
            "type": "image/jpeg"
        });
        return bb;
    };
    CommonfunctionProvider.prototype.dataURItoBlobDocuments = function (dataURI) {
        var contentType = dataURI.split(',')[0].split(':')[1].split(';')[0] || '';
        console.log(contentType);
        // convert base64/URLEncoded data component to raw binary data held in a string
        var byteString = atob(dataURI.split(',')[1]);
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        var bb = new Blob([ab], {
            "type": contentType
        });
        return bb;
    };
    CommonfunctionProvider.prototype.dataURItoBlobVideo = function (dataURI) {
        var contentType = dataURI.split(',')[0].split(':')[1].split(';')[0] || '';
        console.log(contentType);
        // convert base64/URLEncoded data component to raw binary data held in a string
        var byteString = atob(dataURI.split(',')[1]);
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        var bb = new Blob([ab], {
            "type": contentType
        });
        return bb;
    };
    CommonfunctionProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], CommonfunctionProvider);
    return CommonfunctionProvider;
}());

//# sourceMappingURL=commonfunction.js.map

/***/ }),

/***/ 124:
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
webpackEmptyAsyncContext.id = 124;

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewpackagePageModule", function() { return ViewpackagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewpackage__ = __webpack_require__(319);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ViewpackagePageModule = /** @class */ (function () {
    function ViewpackagePageModule() {
    }
    ViewpackagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__viewpackage__["a" /* ViewpackagePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__viewpackage__["a" /* ViewpackagePage */]),
            ],
        })
    ], ViewpackagePageModule);
    return ViewpackagePageModule;
}());

//# sourceMappingURL=viewpackage.module.js.map

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiserviceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings_settings__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiserviceProvider = /** @class */ (function () {
    function ApiserviceProvider(_http, settings) {
        var _this = this;
        this._http = _http;
        this.settings = settings;
        this.url = "http://api.contosonatura.com/api/";
        this.dologin /* Member Login */ = function (objlogin) {
            _this.refreshSettings();
            return _this._http.post(_this.url +
                ("UserLogin/Login/?loginId=" + objlogin.user + "&password=" + objlogin.pass), {});
        };
        this.getReward /* Reward list */ = function (fkid) {
            _this.refreshSettings();
            return _this._http.post(_this.url + ("Rewards/MemberRewards/?MemId=" + fkid), {});
        };
        this.getstates = function () {
            return _this._http.post(_this.url + "Registration/StateMaster/", {});
        };
        this.getCitybyStID = function (stid) {
            _this.refreshSettings();
            return _this._http.post(_this.url + ("Registration/CityMaster/?StateId=" + stid), {});
        };
        this.validatesponser = function (loginid) {
            _this.refreshSettings();
            return _this._http.post(_this.url + ("Registration/ValidateUser/?loginID=" + loginid), {});
        };
        this.regmember = function (obj) {
            _this.refreshSettings();
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set("Content-Type", "application/json; charset=utf-8");
            var murl = _this.url + "Registration/MemberRegistration/";
            console.log("Registration api method Hir " + obj);
            return _this._http.post(murl, JSON.stringify(obj), { headers: headers });
        };
        this.validateepin = function (epin) {
            _this.refreshSettings();
            return _this._http.post(_this.url + ("Registration/ValidateEpin/?ePinNo=" + epin), {});
        };
        this.getProduct = function () {
            _this.refreshSettings();
            return _this._http.post(_this.url + "ProductDetails/ProductMaster/", {});
        };
        this.getDownline = function (obj) {
            _this.refreshSettings();
            return _this._http.post(_this.url +
                ("Registration/AllDownLine/?fromDate=" + obj.fdate + "&toDate=" + obj.tdate + "&loginId=" + obj.loginId + "&status=" + obj.status + "&fK_ProductID=" + obj.Fkpid), {});
        };
        this.chanagepassword = function (obj) {
            _this.refreshSettings();
            return _this._http.post(_this.url +
                ("UserLogin/ChangePassword/?loginId=" + obj.LoginID + "&oldPassword=" + obj.oldPassword + "&newPassword=" + obj.newPassword + "&updatedBy=" + obj.fkid), {});
        };
        this.GuestRegistration = function (objguest) {
            _this.refreshSettings();
            return _this._http.post(_this.url +
                ("GuestRegistration/TempRegistration/?Name=" + objguest.name + "&mobile=" + objguest.password), {});
        };
        this.countPins = function (objpincount) {
            _this.refreshSettings();
            return _this._http.post(_this.url +
                ("ProductDetails/GetTotalEpin/?MemId=" + objpincount.fkid + "&ProductId=" + objpincount.pid), {});
        };
        this.validatepinid = function (loginid) {
            _this.refreshSettings();
            return _this._http.post(_this.url + ("Registration/ValidateUser/?loginID=" + loginid), {});
        };
        this.transferpin = function (objmodelpin) {
            _this.refreshSettings();
            return _this._http.post(_this.url +
                ("ProductDetails/TransferEpin/?MemId=" + objmodelpin.fkid + "&ToMemId=" + objmodelpin.tmid + "&ProductId=" + objmodelpin.pid + "&noOfePin=" + objmodelpin.pin), {});
        };
        this.pintransferreport = function (obj) {
            _this.refreshSettings();
            var furl = "ProductDetails/TransferEpinDetails/?LoginId=" + obj.loginID + "&toLoginId=" + obj.TOloginID + "&status=" + obj.status + "&fromDate=" + obj.fdate + "&toDate=" + obj.tdate + "&ProductId=" + obj.product;
            console.log("report" + furl);
            return _this._http.post(_this.url + furl, {});
        };
        this.epindetail = function (objdetail) {
            _this.refreshSettings();
            var furl = "ProductDetails/ProductDetails/?MemId=" + objdetail.fkid + "&ProductId=" + objdetail.pid + "&isRegistered=" + objdetail.pin;
            console.log("epindetail" + furl);
            return _this._http.post(_this.url + furl, {});
        };
        this.redeem /** Redeem skip rewards */ = function (obj) {
            _this.refreshSettings();
            var furl = "Rewards/UpdateRewardStatus/?MemId=" + obj.fkid + "&SetRewardId=1&action=" + obj.rewardstatus;
            return _this._http.post(_this.url + furl, {});
        };
        this.epinrequest = function (objpinrequest) {
            _this.refreshSettings();
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set("Content-Type", "application/json; charset=utf-8");
            var furl = "ProductDetails/UserEpinReques/";
            return _this._http.post(_this.url + furl, JSON.stringify(objpinrequest), {
                headers: headers
            });
        };
        this.forgotpasswoord = function (obj) {
            _this.refreshSettings();
            var furl = "UserLogin/PasswordRecovery/?loginId=" + obj.mid + "&Mobile=" + obj.mobile;
            return _this._http.post(_this.url + furl, {});
        };
        this.GuestproductRegistration = function (objguest) {
            _this.refreshSettings();
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set("Content-Type", "application/json; charset=utf-8");
            var furl = "GuestProductRequest/ProductRequest/";
            return _this._http.post(_this.url + furl, objguest, { headers: headers });
        };
        this.guestProductTrack = function (guestid) {
            _this.refreshSettings();
            return _this._http.post(_this.url + ("DeliveryDetails/TrackDeliveryDetails/?MemId=" + guestid), {});
        };
        this.ViewProfile = function (memid) {
            _this.refreshSettings();
            return _this._http.post(_this.url + ("Registration/GetMemberProfile/?MemId=" + memid), {});
        };
        this.updateProfille = function (objprofile) {
            _this.refreshSettings();
            return _this._http
                .post(_this.url + "Registration/UpdateMemberProfile/", objprofile)
                .toPromise();
        };
        console.log("Hello ApiserviceProvider Provider");
    }
    ApiserviceProvider.prototype.refreshSettings = function () {
        this.settingsconfig = this.settings.getallSettings();
        console.log("********* Stting Log *******");
        console.table(this.settingsconfig);
    };
    ApiserviceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_0__settings_settings__["a" /* SettingsProvider */]])
    ], ApiserviceProvider);
    return ApiserviceProvider;
}());

//# sourceMappingURL=apiservice.js.map

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the SettingsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SettingsProvider = /** @class */ (function () {
    function SettingsProvider(storage, defaults) {
        this.storage = storage;
        this.SETTINGS_KEY = '_settings';
        this._defaults = defaults;
    }
    SettingsProvider.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.SETTINGS_KEY).then(function (value) {
            if (value) {
                _this.settings = value;
                return _this._mergeDefaults(_this._defaults);
            }
            else {
                return _this.setAll(_this._defaults).then(function (val) {
                    _this.settings = val;
                });
            }
        });
    };
    SettingsProvider.prototype.clearSettings = function () {
        this.settings = '';
    };
    SettingsProvider.prototype._mergeDefaults = function (defaults) {
        for (var k in defaults) {
            if (!(k in this.settings)) {
                this.settings[k] = defaults[k];
            }
        }
        return this.setAll(this.settings);
    };
    SettingsProvider.prototype.merge = function (settings) {
        for (var k in settings) {
            this.settings[k] = settings[k];
        }
        return this.save();
    };
    SettingsProvider.prototype.setValue = function (key, value) {
        this.settings[key] = value;
        return this.storage.set(this.SETTINGS_KEY, this.settings);
    };
    SettingsProvider.prototype.setAll = function (value) {
        return this.storage.set(this.SETTINGS_KEY, value);
    };
    SettingsProvider.prototype.getValue = function (key) {
        return this.storage.get(this.SETTINGS_KEY)
            .then(function (settings) {
            return settings[key];
        });
    };
    SettingsProvider.prototype.save = function () {
        return this.setAll(this.settings);
    };
    SettingsProvider.prototype.getallSettings = function () {
        return this.settings;
    };
    SettingsProvider.prototype.allClear = function () {
        return this.storage.clear();
    };
    SettingsProvider.prototype.removeKey = function (keyArray) {
        var _this = this;
        return this.storage.get(this.SETTINGS_KEY)
            .then(function (settings) {
            keyArray.forEach(function (key) {
                delete settings[key];
                _this.settings = settings;
                return _this.save();
            });
        });
    };
    SettingsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], Object])
    ], SettingsProvider);
    return SettingsProvider;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/bonuspoint/bonuspoint.module": [
		302
	],
	"../pages/changepassword/changepassword.module": [
		308
	],
	"../pages/contactus/contactus.module": [
		167
	],
	"../pages/dashboard/dashboard.module": [
		171
	],
	"../pages/downline/downline.module": [
		312
	],
	"../pages/editprofile/editprofile.module": [
		172
	],
	"../pages/forgotpassword/forgotpassword.module": [
		322
	],
	"../pages/guestdashboard/guestdashboard.module": [
		304
	],
	"../pages/gustregistration/gustregistration.module": [
		310
	],
	"../pages/login/login.module": [
		325
	],
	"../pages/pindetails/pindetails.module": [
		324
	],
	"../pages/pinrequest/pinrequest.module": [
		318
	],
	"../pages/pintransfer/pintransfer.module": [
		327
	],
	"../pages/pintransferreport/pintransferreport.module": [
		336
	],
	"../pages/plan/plan.module": [
		335
	],
	"../pages/productdetail/productdetail.module": [
		477,
		0
	],
	"../pages/profile/profile.module": [
		328
	],
	"../pages/register/register.module": [
		330
	],
	"../pages/rules/rules.module": [
		331
	],
	"../pages/uphaar/uphaar.module": [
		333
	],
	"../pages/viewpackage/viewpackage.module": [
		125
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 166;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusPageModule", function() { return ContactusPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contactus__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ContactusPageModule = /** @class */ (function () {
    function ContactusPageModule() {
    }
    ContactusPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contactus__["a" /* ContactusPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contactus__["a" /* ContactusPage */]),
            ],
        })
    ], ContactusPageModule);
    return ContactusPageModule;
}());

//# sourceMappingURL=contactus.module.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(18);
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
 * Generated class for the ContactusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactusPage = /** @class */ (function () {
    function ContactusPage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.GoToDashboard = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */]);
        };
    }
    ContactusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactusPage');
    };
    ContactusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-contactus',template:/*ion-inline-start:"F:\Ankit_New\Personal\mlm\src\pages\contactus\contactus.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <ion-icon name="menu" menuToggle class=\'menu-icon\'></ion-icon>\n\n      सम्पर्क करें\n\n      <div class="logo"><img src="../../assets/images/contoso_natura_logo.png"></div>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="has-header has-footer">\n\n  <h2>अधिकृत जानकारी हेतु सम्पर्क करें</h2>\n\n  <ion-row>\n\n    <ion-col col-6>\n\n      <ion-card>\n\n        <p>राकेश विश्वकर्मा</p>\n\n        <ion-icon name="call"></ion-icon>\n\n        +91-9795 933 389<br>\n\n        <ion-icon name="pin"></ion-icon>\n\n        मऊ, आज़मगढ़, बलिया, गाजीपुर </ion-card>\n\n    </ion-col>\n\n    <ion-col col-6>\n\n      <ion-card>\n\n        <p>रूपेश श्रीवास्तव</p>\n\n        <ion-icon name="call"></ion-icon>\n\n        +91-9795 933 389<br>\n\n        <ion-icon name="pin"></ion-icon>\n\n        अमेठी, सुल्तानपुर, बाराबंकी अयोध्या, अम्बेडकर नगर</ion-card>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n\n    <ion-col col-6>\n\n      <ion-card>\n\n        <p>प्रदीप सिंह</p>\n\n        <ion-icon name="call"></ion-icon>\n\n        +91-7607 779 035<br>\n\n        <ion-icon name="pin"></ion-icon>\n\n        प्रतापगढ़, प्रयागराज, जौनपुर, फतेहपुर, रायबरेली</ion-card>\n\n    </ion-col>\n\n    <ion-col col-6>\n\n      <ion-card>\n\n        <p>शान मोहम्मद</p>\n\n        <ion-icon name="call"></ion-icon>\n\n        +91-7849 860 009<br>\n\n        <ion-icon name="pin"></ion-icon>\n\n        मिर्जापुर, भदोही, रार्बट्सगंज </ion-card>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n\n    <ion-col col-6>\n\n      <ion-card>\n\n        <p>अखिलेश</p>\n\n        <ion-icon name="call"></ion-icon>\n\n        +91-7905 414 746<br>\n\n        <ion-icon name="pin"></ion-icon>\n\n        चंदौली, वाराणसी </ion-card>\n\n    </ion-col>\n\n    <ion-col col-6>\n\n      <ion-card>\n\n        <p>भवानी प्रताप सिंह</p>\n\n        <ion-icon name="call"></ion-icon>\n\n        +91-9473 637 010<br>\n\n        <ion-icon name="pin"></ion-icon>\n\n        लखनऊ, हरदोई, उन्नाव, सीतापुर, लखीमपुर </ion-card>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-buttons>\n\n      <button ion-button (click)="GoToDashboard()">Contoso उजाला</button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"F:\Ankit_New\Personal\mlm\src\pages\contactus\contactus.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ContactusPage);
    return ContactusPage;
}());

//# sourceMappingURL=contactus.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DashboardPageModule = /** @class */ (function () {
    function DashboardPageModule() {
    }
    DashboardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dashboard__["a" /* DashboardPage */]),
            ],
        })
    ], DashboardPageModule);
    return DashboardPageModule;
}());

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditprofilePageModule", function() { return EditprofilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editprofile__ = __webpack_require__(173);
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

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_commonfunction_commonfunction__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_apiservice_apiservice__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__ = __webpack_require__(18);
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
    function EditprofilePage(alertCtrl, navCtrl, navParams, api, comn) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.comn = comn;
        this.infouser = [];
        this.sub = "";
        this.infousers = "";
        this.states = [];
        this.city = [];
        /** State AND City Bind Begin*/
        this.getstaes = function () {
            var loading = _this.comn.presentLoadingDefault();
            loading.present();
            _this.api.getstates().subscribe(function (res) {
                loading.dismiss();
                _this.states = res;
            }, function (err) {
                loading.dismiss();
                console.log("registration page " + err);
            });
        };
        this.getcity = function (st) {
            var loading = _this.comn.presentLoadingDefault();
            loading.present();
            _this.api.getCitybyStID(st.PK_StateId).subscribe(function (res) {
                loading.dismiss();
                _this.city = res;
            }, function (error) {
                loading.dismiss();
                console.log(error);
            });
        };
        this.GoToDashboard = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard__["a" /* DashboardPage */]);
        };
        this.ViewProfile = function (memid) {
            var loading = _this.comn.presentLoadingDefault();
            loading.present();
            _this.api.ViewProfile(memid).subscribe(function (res) {
                loading.dismiss();
                _this.infouser = res;
                _this.getcity({ PK_StateId: _this.infouser[0].StateId });
            }, function (err) {
                loading.dismiss();
                console.log(err);
            });
        };
        this.updateProfile = function () {
            var loading = _this.comn.presentLoadingDefault();
            loading.present();
            console.log("*********** Update Profile Data **********");
            console.table(_this.infouser);
            var Update = {
                MemId: _this.infousers,
                StateId: _this.infouser[0].StateId,
                address: _this.infouser[0].Address,
                city: _this.infouser[0].CityId,
                pinCode: _this.infouser[0].PinCode,
                memberBankName: _this.infouser[0].MemberBankName,
                memberBranch: _this.infouser[0].MemberBranch,
                memberAccNo: _this.infouser[0].MemberAccNo,
                bankAccName: _this.infouser[0].FirstName,
                iFSCCode: _this.infouser[0].IFSCCode,
                aadharNo: _this.infouser[0].AddharNo,
                displayName: _this.infouser[0].FirstName,
                mobile: _this.infouser[0].PMobile,
                updatedBy: _this.infousers
            };
            _this.api
                .updateProfille(Update)
                .then(function (res) {
                loading.dismiss();
                if (res) {
                    _this.showConfirmAlert();
                }
                else {
                    var alert_1 = _this.comn.createAlert("Alert !", "Some Problem occured please try again later!.");
                    alert_1.present();
                }
            })
                .catch(function (err) {
                loading.dismiss();
                console.log(err);
            });
        };
        this.showConfirmAlert = function () {
            var alert = _this.alertCtrl.create({
                title: "Success !",
                message: "Profile updated successfully! ",
                buttons: [
                    {
                        text: "OK",
                        handler: function () {
                            _this.navCtrl.pop();
                        }
                    }
                ]
            });
            alert.present();
        };
        this.reset = function () {
            _this.navCtrl.pop();
        };
        this.getstaes();
        this.infousers =
            this.navParams.get("fk_memid") == undefined
                ? ""
                : this.navParams.get("fk_memid");
        if (this.infousers !== "") {
            this.ViewProfile(this.infousers);
        }
        else {
            this.navCtrl.pop();
        }
    }
    /** State AND City Bind CLose */
    EditprofilePage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad EditprofilePage");
    };
    EditprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: "page-editprofile",template:/*ion-inline-start:"F:\Ankit_New\Personal\mlm\src\pages\editprofile\editprofile.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <ion-icon name="menu" menuToggle class=\'menu-icon\'></ion-icon>\n\n      Edit Profile\n\n      <div class="logo"><img src="../../assets/images/contoso_natura_logo.png"></div>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content *ngIf="infouser.length>0">\n\n  <ion-card>\n\n    <h2>Sponsor</h2>\n\n    <ion-row>\n\n      <ion-col col-4><strong>Sponsor Code:</strong></ion-col>\n\n      <ion-col col-8>WEM4560</ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n  <ion-card>\n\n    <h2>Personal Details</h2>\n\n    <ion-item>\n\n      <ion-label>Full Name:</ion-label>\n\n      <ion-input [(ngModel)]="infouser[0].FirstName" placeholder="Enter your name"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Mobile:</ion-label>\n\n      <ion-input [(ngModel)]="infouser[0].PMobile" placeholder="Enter your Mobile"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>State:</ion-label>\n\n      <ion-select interface="popover" [(ngModel)]="infouser[0].StateId" placeholder="Select State">\n\n        <ion-option *ngFor="let st of states" (ionSelect)="getcity(st)" [value]="st.PK_StateId">{{st.StateName}}\n\n        </ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Distract:</ion-label>\n\n      <ion-select interface="popover" [(ngModel)]="infouser[0].CityId" placeholder="Select Distract">\n\n        <ion-option *ngFor="let ct of city" [value]="ct.PK_CityId">{{ct.CityName}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>City:</ion-label>\n\n      <ion-input [(ngModel)]="infouser[0].City" placeholder="Enter your city"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Address:</ion-label>\n\n      <ion-input [(ngModel)]="infouser[0].Address" placeholder="Enter your address"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Pin:</ion-label>\n\n      <ion-input [(ngModel)]="infouser[0].PinCode" placeholder="Enter your PIN"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Aadhar No.:</ion-label>\n\n      <ion-input [(ngModel)]="infouser[0].AddharNo" placeholder="Enter your Aadhar No."></ion-input>\n\n    </ion-item>\n\n  </ion-card>\n\n  <ion-card>\n\n    <h2>Bank Details</h2>\n\n    <ion-item>\n\n      <ion-label>Account No.:</ion-label>\n\n      <ion-input [(ngModel)]="infouser[0].MemberAccNo" placeholder="Enter your account"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Bank Name:</ion-label>\n\n      <ion-input placeholder="Enter your bank name" [(ngModel)]="infouser[0].MemberBankName"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Branch Name:</ion-label>\n\n      <ion-input placeholder="Enter your branch name" [(ngModel)]="infouser[0].MemberBranch"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>IFSC Code:</ion-label>\n\n      <ion-input placeholder="Enter your IFSC Code" [(ngModel)]="infouser[0].IFSCCode"></ion-input>\n\n    </ion-item>\n\n  </ion-card>\n\n  <ion-row>\n\n    <ion-col col-6>\n\n      <button (click)="updateProfile()" ion-button>Submit</button>\n\n    </ion-col>\n\n    <ion-col col-6>\n\n      <button ion-button (click)="reset()">Cancle</button>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-buttons>\n\n      <button ion-button>Contoso उजाला</button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"F:\Ankit_New\Personal\mlm\src\pages\editprofile\editprofile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__providers_apiservice_apiservice__["a" /* ApiserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_commonfunction_commonfunction__["a" /* CommonfunctionProvider */]])
    ], EditprofilePage);
    return EditprofilePage;
}());

//# sourceMappingURL=editprofile.js.map

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_settings_settings__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardPage = /** @class */ (function () {
    function DashboardPage(setting, navCtrl, navParams) {
        this.setting = setting;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dashboard = [];
        var settingdb = this.setting.getallSettings();
        this.dashboard = settingdb.dashboard;
        console.table(this.dashboard);
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad DashboardPage");
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: "page-dashboard",template:/*ion-inline-start:"F:\Ankit_New\Personal\mlm\src\pages\dashboard\dashboard.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <ion-icon name="menu" menuToggle class=\'menu-icon\'></ion-icon>\n\n      Dashboard\n\n      <div class="logo"><img src="../../assets/images/contoso_natura_logo.png"></div>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="has-header has-footer">\n\n  <ion-row>\n\n    <ion-col col-6>\n\n      <ion-card>\n\n        <p>Plan<br> (योजना)</p>\n\n        <h1>{{dashboard[0].ProductName}}</h1>\n\n      </ion-card>\n\n    </ion-col>\n\n    <ion-col col-6>\n\n      <ion-card>\n\n        <p>Activation Date<br> (सक्रियण तिथि)</p>\n\n        <h1>{{dashboard[0].PermanentDate}}</h1>\n\n      </ion-card>\n\n    </ion-col>\n\n    <ion-col col-6>\n\n      <ion-card>\n\n        <p>Total Bonus Point<br> (बोनस अंक)</p>\n\n        <h1>{{dashboard[0].TotalBounsPts}}</h1>\n\n      </ion-card>\n\n    </ion-col>\n\n    <ion-col col-6>\n\n      <ion-card>\n\n        <p>Gift<br> (उपहार)</p>\n\n        <h2>₹ {{dashboard[0].RewardAmount}}</h2>\n\n        <h3>OR</h3>\n\n        <h2>{{dashboard[0].Rewards}}</h2>\n\n      </ion-card>\n\n    </ion-col>\n\n    <ion-col col-6>\n\n      <ion-card>\n\n        <p>Redeem Bonus Points<br> (बोनस अंक भुनाएं)</p>\n\n        <h1>{{dashboard[0].TotalRedeemBounsPts}}</h1>\n\n      </ion-card>\n\n    </ion-col>\n\n    <ion-col col-6>\n\n      <ion-card>\n\n        <p>Remaining Bonus Points<br> (शेष बोनस अंक)</p>\n\n        <h1>{{dashboard[0].RemaingBonsPts}}</h1>\n\n      </ion-card>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-buttons>\n\n      <button ion-button>Contoso उजाला</button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"F:\Ankit_New\Personal\mlm\src\pages\dashboard\dashboard.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__providers_settings_settings__["a" /* SettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BonuspointPageModule", function() { return BonuspointPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bonuspoint__ = __webpack_require__(303);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BonuspointPageModule = /** @class */ (function () {
    function BonuspointPageModule() {
    }
    BonuspointPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__bonuspoint__["a" /* BonuspointPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bonuspoint__["a" /* BonuspointPage */]),
            ],
        })
    ], BonuspointPageModule);
    return BonuspointPageModule;
}());

//# sourceMappingURL=bonuspoint.module.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BonuspointPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_settings_settings__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_commonfunction_commonfunction__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_apiservice_apiservice__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__ = __webpack_require__(18);
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
 * Generated class for the BonuspointPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BonuspointPage = /** @class */ (function () {
    function BonuspointPage(api, comn, settinf, navCtrl, navParams) {
        var _this = this;
        this.api = api;
        this.comn = comn;
        this.settinf = settinf;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userref = '';
        this.rewardlist = [];
        this.objrewardclaim = {
            fkid: '',
            rewardstatus: ''
        };
        this.GoToDashboard = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__["a" /* DashboardPage */]);
        };
        this.getreqwardlist = function () {
            var loading = _this.comn.presentLoadingDefault();
            loading.present();
            _this.api.getReward(_this.userref).subscribe(function (rewards) {
                loading.dismiss();
                _this.rewardlist = rewards;
                console.table(_this.rewardlist);
            }, function (err) {
                loading.dismiss();
            });
        };
        this.claimreward = function (param) {
            var loading = _this.comn.presentLoadingDefault();
            loading.present();
            _this.objrewardclaim.fkid = _this.userref;
            _this.objrewardclaim.rewardstatus = param;
            _this.api.redeem(_this.objrewardclaim).subscribe(function (res) {
                loading.dismiss();
                if (res == 1) {
                    var alert_1 = _this.comn.createAlert("Success!", "Reward Claim Successfully.");
                    alert_1.present();
                }
                else {
                    var alert_2 = _this.comn.createAlert("Alert!", "Invalid Claim Request ! please contact to your head vision.");
                    alert_2.present();
                }
            }, function (err) {
                loading.dismiss();
                console.log(err);
            });
        };
        var setting = this.settinf.getallSettings();
        this.userref = setting.fkmemid;
        this.getreqwardlist();
    }
    BonuspointPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BonuspointPage');
    };
    BonuspointPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: 'page-bonuspoint',template:/*ion-inline-start:"F:\Ankit_New\Personal\mlm\src\pages\bonuspoint\bonuspoint.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <ion-icon name="menu" menuToggle class=\'menu-icon\'></ion-icon>\n\n      बोनस अंक\n\n      <div class="logo"><img src="../../assets/images/contoso_natura_logo.png"></div>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <h2>बोनस अंकों पर आधारित उपहार योजना <br>(नगद या गिफ्ट - कोई एक)\n\n  </h2>\n\n  <ion-card>\n\n    <table>\n\n      <thead>\n\n        <tr>\n\n          <th>क्रम <br /> सख्या</th>\n\n          <th>बोनस <br /> अंक</th>\n\n          <th>गिफ्ट<br />(नगद)</th>\n\n          <th colspan="2">स्थिति</th>\n\n        </tr>\n\n      </thead>\n\n      <tbody>\n\n\n\n        <!-- Dynamic Layout Added  -->\n\n        <tr [style.background-color]="reward.RewardStatus == \'Pending\' ? \' \' : \'green\'"\n\n          *ngFor="let reward of rewardlist;let i=index;">\n\n          <td>{{i+1}}</td>\n\n          <td>{{reward.TargetPV}} </td>\n\n          <td>{{reward.RewardName}}<br /> OR <br />{{reward.RewardAmount}} Rs.</td>\n\n          <td *ngIf="reward.RewardPaymentstatus !== \'\'" class="text-center" colspan="2">{{reward.RewardClaim}} </td>\n\n          <td *ngIf="reward.RewardClaim == \'Pending\' && reward.RewardStatus !== \'Pending\'" class="text-center"><a\n\n              href="javascript:void(0)" (click)="claimreward(\'Redeem\')">Redeem</a></td>\n\n          <td *ngIf="reward.RewardClaim == \'Pending\' && reward.RewardStatus !== \'Pending\' " class="text-center"> <a\n\n              href="javascript:void(0)" (click)="claimreward(\'Skip\')">Skip</a></td>\n\n        </tr>\n\n        <!-- Dynamic Layout Close  -->\n\n      </tbody>\n\n    </table>\n\n  </ion-card>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-buttons>\n\n      <button ion-button (click)="GoToDashboard()">Contoso उजाला</button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"F:\Ankit_New\Personal\mlm\src\pages\bonuspoint\bonuspoint.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_apiservice_apiservice__["a" /* ApiserviceProvider */], __WEBPACK_IMPORTED_MODULE_1__providers_commonfunction_commonfunction__["a" /* CommonfunctionProvider */], __WEBPACK_IMPORTED_MODULE_0__providers_settings_settings__["a" /* SettingsProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavParams */]])
    ], BonuspointPage);
    return BonuspointPage;
}());

//# sourceMappingURL=bonuspoint.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestdashboardPageModule", function() { return GuestdashboardPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guestdashboard__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GuestdashboardPageModule = /** @class */ (function () {
    function GuestdashboardPageModule() {
    }
    GuestdashboardPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__guestdashboard__["a" /* GuestdashboardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__guestdashboard__["a" /* GuestdashboardPage */]),
            ],
        })
    ], GuestdashboardPageModule);
    return GuestdashboardPageModule;
}());

//# sourceMappingURL=guestdashboard.module.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordPageModule", function() { return ChangepasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__changepassword__ = __webpack_require__(309);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChangepasswordPageModule = /** @class */ (function () {
    function ChangepasswordPageModule() {
    }
    ChangepasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__changepassword__["a" /* ChangepasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__changepassword__["a" /* ChangepasswordPage */]),
            ],
        })
    ], ChangepasswordPageModule);
    return ChangepasswordPageModule;
}());

//# sourceMappingURL=changepassword.module.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_settings_settings__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_commonfunction_commonfunction__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_apiservice_apiservice__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__ = __webpack_require__(18);
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
 * Generated class for the ChangepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangepasswordPage = /** @class */ (function () {
    function ChangepasswordPage(alertCtrl, setting, navCtrl, navParams, api, comn) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.setting = setting;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.comn = comn;
        this.objmodel = {
            oldPassword: "",
            newPassword: "",
            newPassword2: "",
            fkid: "",
            LoginID: ""
        };
        this.isValid = true;
        this.sett = [];
        this.GoToDashboard = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__["a" /* DashboardPage */]);
        };
        this.validatepassword = function () {
            if (_this.objmodel.newPassword2.length === _this.objmodel.newPassword.length) {
                if (_this.objmodel.newPassword2 === _this.objmodel.newPassword) {
                    return true;
                }
                else {
                    var alert_1 = _this.comn.createAlert("Alert !", "New Password && Confirm Password  Not Matched ! ");
                    alert_1.present();
                    return false;
                }
            }
            else {
                var alert_2 = _this.comn.createAlert("Alert !", "Password Length Not Matched ! ");
                alert_2.present();
                return false;
            }
        };
        this.changePassword = function () {
            if (_this.validatepassword()) {
                console.table(_this.objmodel);
                _this.api.chanagepassword(_this.objmodel).subscribe(function (res) {
                    _this.showConfirmAlert();
                    // let alert = this.comn.createAlert(
                    //   "Success !",
                    //   "Password Change Successfully! "
                    // );
                    // alert.present(); 
                }, function (err) {
                    console.log(err);
                });
            }
        };
        this.cancle = function () {
            _this.navCtrl.pop();
        };
        this.showConfirmAlert = function () {
            var alert = _this.alertCtrl.create({
                title: 'Success !',
                message: 'Password Change Successfully!',
                buttons: [
                    {
                        text: 'OK',
                        handler: function () {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__["a" /* DashboardPage */]);
                        }
                    }
                ]
            });
            alert.present();
        };
    }
    ChangepasswordPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ChangepasswordPage");
        this.sett = this.setting.getallSettings();
        this.objmodel.LoginID = this.sett.dashboard[0].LoginId;
        this.objmodel.fkid = this.sett.dashboard[0].FK_MemId;
        console.log("ionViewDidLoad DownlinePage");
        console.log("****** Login ID *******" +
            this.sett.dashboard[0].LoginId +
            "(" +
            this.sett.dashboard[0].FK_MemId +
            ")");
    };
    ChangepasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: "page-changepassword",template:/*ion-inline-start:"F:\Ankit_New\Personal\mlm\src\pages\changepassword\changepassword.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <ion-icon name="menu" menuToggle class=\'menu-icon\'></ion-icon>\n\n      Change Password\n\n      <div class="logo"><img src="../../assets/images/contoso_natura_logo.png"></div>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="has-footer ha-header">\n\n  <div class="login-page">\n\n    <div class="login-form">\n\n      <div class="input-wrap"> <i class="material-icons">lock_open</i>\n\n        <ion-item>\n\n          <ion-label color="" floating> Old Password</ion-label>\n\n          <ion-input [(ngModel)]="objmodel.oldPassword" type="password" ngDefaultControl></ion-input>\n\n        </ion-item>\n\n      </div>\n\n      <div class="input-wrap"> <i class="material-icons">lock_open</i>\n\n        <ion-item>\n\n          <ion-label color="" floating> New Password</ion-label>\n\n          <ion-input [(ngModel)]="objmodel.newPassword" type="password" ngDefaultControl></ion-input>\n\n        </ion-item>\n\n      </div>\n\n      <div class="input-wrap"> <i class="material-icons">lock_open</i>\n\n        <ion-item>\n\n          <ion-label color="" floating> Confirm\n\n            Password</ion-label>\n\n          <ion-input [(ngModel)]="objmodel.newPassword2" ngDefaultControl type="password"></ion-input>\n\n        </ion-item>\n\n      </div>\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          <button ion-button (click)="changePassword()">Submit</button>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <button ion-button (click)="cancle()">Cancel</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-buttons>\n\n      <button ion-button (click)="GoToDashboard()">Contoso उजाला</button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"F:\Ankit_New\Personal\mlm\src\pages\changepassword\changepassword.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_settings_settings__["a" /* SettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_apiservice_apiservice__["a" /* ApiserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_commonfunction_commonfunction__["a" /* CommonfunctionProvider */]])
    ], ChangepasswordPage);
    return ChangepasswordPage;
}());

//# sourceMappingURL=changepassword.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GustregistrationPageModule", function() { return GustregistrationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gustregistration__ = __webpack_require__(311);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GustregistrationPageModule = /** @class */ (function () {
    function GustregistrationPageModule() {
    }
    GustregistrationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__gustregistration__["a" /* GustregistrationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__gustregistration__["a" /* GustregistrationPage */]),
            ],
        })
    ], GustregistrationPageModule);
    return GustregistrationPageModule;
}());

//# sourceMappingURL=gustregistration.module.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GustregistrationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__guestdashboard_guestdashboard__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_commonfunction_commonfunction__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_apiservice_apiservice__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_settings_settings__ = __webpack_require__(15);
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
 * Generated class for the GustregistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GustregistrationPage = /** @class */ (function () {
    function GustregistrationPage(api, comn, navCtrl, navParams, setting, events) {
        var _this = this;
        this.api = api;
        this.comn = comn;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.setting = setting;
        this.events = events;
        this.objguest = {
            name: "",
            password: "",
            fkid: ""
        };
        this.gotologin = function () {
            _this.navCtrl.pop();
        };
        this.register = function () {
            var loading = _this.comn.presentLoadingDefault();
            loading.present();
            console.table(_this.objguest);
            _this.api.GuestRegistration(_this.objguest).subscribe(function (res) {
                loading.dismiss();
                if (res) {
                    _this.objguest.fkid = res;
                    var result = [];
                    result.push(_this.objguest);
                    console.log("***Guest Result ****" + result);
                    _this.events.publish("isloginType", "guest");
                    _this.events.publish("userinfo", result);
                    _this.setting.setValue("isloginType", "guest");
                    _this.setting.setValue("guest", result);
                    _this.objguest.name = "";
                    _this.objguest.password = "";
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__guestdashboard_guestdashboard__["a" /* GuestdashboardPage */]);
                }
                else {
                    var alert_1 = _this.comn.createAlert("Error!", res.Message);
                    alert_1.present();
                }
            }, function (error) {
                loading.dismiss();
                var alert = _this.comn.createAlert("Error!", error.error.Message);
                alert.present();
            });
        };
    }
    GustregistrationPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad GustregistrationPage");
    };
    GustregistrationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: "page-gustregistration",template:/*ion-inline-start:"F:\Ankit_New\Personal\mlm\src\pages\gustregistration\gustregistration.html"*/'<ion-content class="has-footer ha-header">\n\n  <div class="login-page"> \n\n    <div class="login-bg">\n\n      <div class="logo"><img src="../../assets/images/logo.png"></div>\n\n    </div>\n\n    <div class="login-form">\n\n      <div class="sub_header">Gust Registration</div>\n\n      <div class="input-wrap"><i class="material-icons">person</i>\n\n        <ion-icon name="business"></ion-icon>\n\n        <ion-item>\n\n          <ion-label color="" floating> User Name</ion-label>\n\n          <ion-input [(ngModel)]="objguest.name"></ion-input>\n\n        </ion-item>\n\n      </div>\n\n      <div class="input-wrap"> <i class="material-icons">phone</i>\n\n        <ion-item>\n\n          <ion-label color="" floating>Mobile</ion-label>\n\n          <ion-input [(ngModel)]="objguest.password"></ion-input>\n\n        </ion-item>\n\n      </div>\n\n      <ion-row>\n\n        <button ion-button (click)="register()">Submit</button>\n\n      </ion-row>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-buttons>\n\n      <button ion-button (click)="gotologin()">Contoso उजाला</button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"F:\Ankit_New\Personal\mlm\src\pages\gustregistration\gustregistration.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_apiservice_apiservice__["a" /* ApiserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_commonfunction_commonfunction__["a" /* CommonfunctionProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_settings_settings__["a" /* SettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* Events */]])
    ], GustregistrationPage);
    return GustregistrationPage;
}());

//# sourceMappingURL=gustregistration.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownlinePageModule", function() { return DownlinePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__downline__ = __webpack_require__(313);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DownlinePageModule = /** @class */ (function () {
    function DownlinePageModule() {
    }
    DownlinePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__downline__["a" /* DownlinePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__downline__["a" /* DownlinePage */]),
            ],
        })
    ], DownlinePageModule);
    return DownlinePageModule;
}());

//# sourceMappingURL=downline.module.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownlinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_commonfunction_commonfunction__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_settings_settings__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_apiservice_apiservice__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_xlsx__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_xlsx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DownlinePage = /** @class */ (function () {
    function DownlinePage(comn, setting, file, navCtrl, navParams, api) {
        var _this = this;
        this.comn = comn;
        this.setting = setting;
        this.file = file;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.data = [];
        this.objmodel = {
            fdate: "",
            tdate: "",
            status: "All",
            Fkpid: 0,
            loginId: ""
        };
        this.getdownline = function () { };
        this.GoToDashboard = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__["a" /* DashboardPage */]);
        };
        this.GetReport = function () {
            if (_this.objmodel.fdate !== "" && _this.objmodel.tdate == "") {
                var alert_1 = _this.comn.createAlert("Alert !", "Please Select To Date  ");
                alert_1.present();
                return;
            }
            else if (_this.objmodel.fdate == "" && _this.objmodel.tdate !== "") {
                var alert_2 = _this.comn.createAlert("Alert !", "Please Select From Date  ");
                alert_2.present();
                return;
            }
            console.table(_this.objmodel);
            _this.FetchReport();
        };
        this.FetchReport = function () {
            var loading = _this.comn.presentLoadingDefault();
            loading.present();
            _this.api.getDownline(_this.objmodel).subscribe(function (downline) {
                loading.dismiss();
                if (downline.length > 0) {
                    _this.data = downline;
                    console.log("********** Fetching Downline ************");
                    console.table(_this.data);
                }
                else {
                    _this.data.length = 0;
                    var alert_3 = _this.comn.createAlert("Alert !", "No Record Found ! ");
                    alert_3.present();
                }
            }, function (error) {
                loading.dismiss();
                var alert = _this.comn.createAlert("Error !", "Somthing Going Wrong ! ");
                alert.present();
                console.log(error);
            });
        };
        this.Reset = function () {
            _this.objmodel.fdate = "";
            _this.objmodel.tdate = "";
            _this.objmodel.status = "All";
            _this.objmodel.Fkpid = 0;
            _this.FetchReport();
        };
        this.OnExport = function () {
            var sheet = __WEBPACK_IMPORTED_MODULE_7_xlsx__["utils"].json_to_sheet(this.data);
            var wb = {
                SheetNames: ["export"],
                Sheets: {
                    export: sheet
                }
            };
            var wbout = __WEBPACK_IMPORTED_MODULE_7_xlsx__["write"](wb, {
                bookType: "xlsx",
                bookSST: false,
                type: "binary"
            });
            function s2ab(s) {
                var buf = new ArrayBuffer(s.length);
                var view = new Uint8Array(buf);
                for (var i = 0; i != s.length; ++i)
                    view[i] = s.charCodeAt(i) & 0xff;
                return buf;
            }
            var blob = new Blob([s2ab(wbout)], { type: "application/octet-stream" });
            var self = this;
            this.getStoragePath().then(function (url) {
                self.file
                    .writeFile(url, "export.xlsx", blob, true)
                    .then(function () {
                    alert("file created at: " + url);
                })
                    .catch(function () {
                    alert("error creating file at :" + url);
                });
            });
        };
    }
    DownlinePage.prototype.ionViewDidLoad = function () {
        this.sett = this.setting.getallSettings();
        this.objmodel.loginId = this.sett.dashboard[0].LoginId;
        console.log("ionViewDidLoad DownlinePage");
        this.FetchReport();
        console.log("****** Login ID *******" + this.sett.dashboard[0].LoginId);
    };
    /** Exxcel import  */
    DownlinePage.prototype.getStoragePath = function () {
        var file = this.file;
        return this.file
            .resolveDirectoryUrl(this.file.externalRootDirectory)
            .then(function (directoryEntry) {
            return file
                .getDirectory(directoryEntry, "Ionic2ExportToXLSX", {
                create: true,
                exclusive: false
            })
                .then(function () {
                return directoryEntry.nativeURL + "Ionic2ExportToXLSX/";
            });
        });
    };
    DownlinePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: "page-downline",template:/*ion-inline-start:"F:\Ankit_New\Personal\mlm\src\pages\downline\downline.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <ion-icon name="menu" menuToggle class=\'menu-icon\'></ion-icon>\n\n      निचली पंक्ति (Downline)\n\n      <div class="logo"><img src="../../assets/images/contoso_natura_logo.png"></div>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n\n\n\n    <ion-row>\n\n      <div class="float_wrapper" col-6>\n\n        <ion-item>\n\n          <ion-datetime [(ngModel)]="objmodel.fdate" placeholder="Activation From" displayFormat="DD/MM/YYYY">\n\n          </ion-datetime>\n\n        </ion-item>\n\n        <ion-icon name="calendar" class="money date"></ion-icon>\n\n      </div>\n\n      <div class="float_wrapper" col-6>\n\n        <ion-item>\n\n          <ion-datetime [(ngModel)]="objmodel.tdate" placeholder="To" displayFormat="DD/MM/YYYY"> </ion-datetime>\n\n        </ion-item>\n\n        <ion-icon name="calendar" class="money date"></ion-icon>\n\n      </div>\n\n    </ion-row>\n\n    <ion-row>\n\n      <div class="float_wrapper" col-6>\n\n        <ion-item>\n\n          <ion-select [(ngModel)]="objmodel.status" placeholder="Select Status">\n\n            <ion-option value="All">All</ion-option>\n\n            <ion-option value="Active">Active</ion-option>\n\n            <ion-option value="InActive">InActive</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </div>\n\n      <div class="float_wrapper" col-6>\n\n        <ion-item>\n\n          <ion-select [(ngModel)]="objmodel.Fkpid" placeholder="Select Plan">\n\n            <ion-option value="0">All</ion-option>\n\n            <ion-option value="1">Plan A 8500</ion-option>\n\n            <ion-option value="2">Plan B 4500</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </div>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-4>\n\n        <button ion-button (click)="GetReport()">Get Report</button>\n\n      </ion-col>\n\n      <ion-col col-4>\n\n        <button ion-button (click)="Reset()">Reset</button>\n\n      </ion-col>\n\n      <ion-col col-4>\n\n        <button ion-button [disabled]="data.length==0" (click)="OnExport()">Exel</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n  <ion-card>\n\n    <table>\n\n      <thead>\n\n        <tr>\n\n          <th>S.No.</th>\n\n          <th>Member ID</th>\n\n          <th>Member Name</th>\n\n          <th>Sponsor ID</th>\n\n          <th>Joining Date</th>\n\n          <th>Plan</th>\n\n        </tr>\n\n      </thead>\n\n      <tbody *ngIf="data.length>0">\n\n        <tr *ngFor="let item of data">\n\n          <td>{{item.RowId}}</td>\n\n          <td>{{item.LoginId}}</td>\n\n          <td>{{item.DisplayName}}</td>\n\n          <td>{{item.SponsorId}}</td>\n\n          <td>{{item.JoiningDate}}</td>\n\n          <td>{{item.BookingAmt}}</td>\n\n        </tr>\n\n\n\n      </tbody>\n\n      <tbody *ngIf="data.length==0">\n\n        <tr>\n\n          <td colspan="6">\n\n            No Record Found\n\n          </td>\n\n\n\n        </tr>\n\n      </tbody>\n\n    </table>\n\n  </ion-card>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-buttons>\n\n      <button ion-button (click)="GoToDashboard()">Contoso उजाला</button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"F:\Ankit_New\Personal\mlm\src\pages\downline\downline.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__providers_commonfunction_commonfunction__["a" /* CommonfunctionProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_settings_settings__["a" /* SettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_apiservice_apiservice__["a" /* ApiserviceProvider */]])
    ], DownlinePage);
    return DownlinePage;
}());

//# sourceMappingURL=downline.js.map

/***/ }),

/***/ 317:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinrequestPageModule", function() { return PinrequestPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pinrequest__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PinrequestPageModule = /** @class */ (function () {
    function PinrequestPageModule() {
    }
    PinrequestPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pinrequest__["a" /* PinrequestPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pinrequest__["a" /* PinrequestPage */]),
            ],
        })
    ], PinrequestPageModule);
    return PinrequestPageModule;
}());

//# sourceMappingURL=pinrequest.module.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewpackagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_settings_settings__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_apiservice_apiservice__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_commonfunction_commonfunction__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the ViewpackagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewpackagePage = /** @class */ (function () {
    function ViewpackagePage(events, setting, navCtrl, navParams, comn, api) {
        var _this = this;
        this.events = events;
        this.setting = setting;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.comn = comn;
        this.api = api;
        this.title = "View package";
        this.dispatch = 1;
        this.isDispatch = false;
        this.objepin = {
            productA: {
                product: "A",
                pin: 0,
                price: 8500,
                total: 0
            },
            productB: {
                product: "B",
                pin: 0,
                price: 4500,
                total: 0
            },
            total: 0,
            pinamount: 0,
            pmode: "Cash",
            cdbtn: "",
            cdtd: "",
            bank: ""
        };
        this.MemberInfo = {
            isHomeDelivery: false,
            productId: [],
            noOfPins: [],
            cerateby: "",
            epin: "",
            stid: "",
            ctid: "",
            fkeponserid: "",
            name: "",
            mobile: "",
            cityname: "",
            address: "",
            pincode: "",
            adhar: "",
            ac: "",
            bank: "",
            branch: "",
            ifsc: ""
        };
        this.isCash = true;
        this.states = [];
        this.city = [];
        this.getmodedispacth = function () {
            if (_this.dispatch == "1") {
                _this.isDispatch = false;
            }
            else {
                _this.isDispatch = true;
                _this.getstaes();
            }
        };
        this.getmode = function () {
            if (_this.objepin.pmode == "Cash") {
                console.log("cash");
                _this.isCash = true;
            }
            else {
                _this.isCash = false;
            }
        };
        this.getstaes = function () {
            var loading = _this.comn.presentLoadingDefault();
            loading.present();
            _this.api.getstates().subscribe(function (res) {
                loading.dismiss();
                _this.states = res;
            }, function (err) {
                loading.dismiss();
                console.log("registration page " + err);
            });
        };
        this.getcity = function (st) {
            var loading = _this.comn.presentLoadingDefault();
            loading.present();
            _this.api.getCitybyStID(st.PK_StateId).subscribe(function (res) {
                loading.dismiss();
                _this.city = res;
            }, function (error) {
                loading.dismiss();
                console.log(error);
            });
        };
        this.reset = function () {
            _this.navCtrl.pop();
        };
        this.validate = function () {
            if (_this.isDispatch) {
                if (_this.MemberInfo.name !== "") {
                    if (_this.MemberInfo.mobile !== "") {
                        if (_this.MemberInfo.address !== "") {
                            if (_this.MemberInfo.stid !== "") {
                                if (_this.MemberInfo.ctid !== "") {
                                    return true;
                                }
                                else {
                                    var alert_1 = _this.comn.createAlert("Alert!", "Please Select District !.");
                                    alert_1.present();
                                    return false;
                                }
                            }
                            else {
                                var alert_2 = _this.comn.createAlert("Alert!", "Please Select State !.");
                                alert_2.present();
                                return false;
                            }
                        }
                        else {
                            var alert_3 = _this.comn.createAlert("Alert!", "Please Enter address!.");
                            alert_3.present();
                            return false;
                        }
                    }
                    else {
                        var alert_4 = _this.comn.createAlert("Alert!", "Please Enter mobile number!.");
                        alert_4.present();
                        return false;
                    }
                }
                else {
                    var alert_5 = _this.comn.createAlert("Alert!", "Please Enter Name!.");
                    alert_5.present();
                    return false;
                }
            }
            else {
                return true;
            }
        };
        this.validatepayment = function () {
            if (_this.objepin.pmode !== "Cash") {
                if (_this.objepin.cdbtn !== "") {
                    if (_this.objepin.cdtd !== "") {
                        if (_this.objepin.bank !== "") {
                            return true;
                        }
                        else {
                            var alert_6 = _this.comn.createAlert("Alert!", "Please Enter Bank Name!.");
                            alert_6.present();
                            return false;
                        }
                    }
                    else {
                        var alert_7 = _this.comn.createAlert("Alert!", "Please Entercheck/dd/transaction date!.");
                        alert_7.present();
                        return false;
                    }
                }
                else {
                    var alert_8 = _this.comn.createAlert("Alert!", "Please Enter check/dd/transaction number!.");
                    alert_8.present();
                    return false;
                }
            }
            else {
                return true;
            }
        };
        this.guestProductRequest = function () {
            if (_this.validate()) {
                if (_this.validatepayment()) {
                    var loading_1 = _this.comn.presentLoadingDefault();
                    loading_1.present();
                    var adet = {
                        productId: _this.MemberInfo.productId,
                        noOfPins: _this.MemberInfo.noOfPins,
                        MemId: _this.MemberInfo.fkeponserid,
                        paymentMode: _this.objepin.pmode,
                        chequeDDNo: _this.objepin.cdbtn,
                        chequeDDDate: _this.objepin.cdtd,
                        bankName: _this.objepin.bank,
                        createdBy: _this.MemberInfo.fkeponserid,
                        isHomeDelivery: _this.isDispatch
                    };
                    var Addrs = {
                        Name: _this.MemberInfo.name,
                        Mobile: _this.MemberInfo.mobile,
                        AlternateNo: null,
                        Address: _this.MemberInfo.address,
                        City: _this.MemberInfo.ctid,
                        State: _this.MemberInfo.stid,
                        PinCode: _this.MemberInfo.pincode,
                        Landmarks: _this.MemberInfo.stid,
                        Isdeleted: false,
                        Createdby: _this.MemberInfo.fkeponserid
                    };
                    var data = {
                        epin: adet,
                        dAddrs: Addrs
                    };
                    console.log("****************** Guest Form Submit **********");
                    console.log(data);
                    console.table(data);
                    _this.api.GuestproductRegistration(JSON.stringify(data)).subscribe(function (res) {
                        loading_1.dismiss();
                        console.log(res);
                        if (res[0].Msg == "1") {
                            var alert_9 = _this.comn.createAlert("Success !", "Product request was successfully. your request no. for  " + res[0].Product + "  is " + res[0].EpinRequestNo + " .");
                            alert_9.present();
                            _this.navCtrl.pop();
                        }
                        else {
                            var alert_10 = _this.comn.createAlert("Error !", "Error Occured Please contact to admin!.");
                            alert_10.present();
                        }
                    }, function (err) {
                        loading_1.dismiss();
                        console.log(err);
                        var alert = _this.comn.createAlert("Error !", "" + err.error.Message);
                        alert.present();
                    });
                }
            }
        };
        var values = this.navParams.get("plan") == undefined ? [] : this.navParams.get("plan");
        console.log(values);
        if (values !== undefined) {
            this.title = values.ProductName;
            this.MemberInfo.productId.push(values.PK_ProductId);
            this.MemberInfo.noOfPins.push("1");
            this.objepin.pinamount = values.ProductPrice;
        }
    }
    ViewpackagePage.prototype.ionViewDidLoad = function () {
        var set = this.setting.getallSettings();
        console.log("***********Guest Package ***************");
        console.log(set);
        this.MemberInfo.fkeponserid = set.guest[0].fkid;
        console.log("ionViewDidLoad ViewpackagePage");
    };
    ViewpackagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: "page-viewpackage",template:/*ion-inline-start:"F:\Ankit_New\Personal\mlm\src\pages\viewpackage\viewpackage.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <ion-icon name="menu" menuToggle class=\'menu-icon\'></ion-icon>\n\n      {{title}}\n\n      <div class="logo"><img src="../../assets/images/contoso_natura_logo.png"></div>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n\n    <ion-item>\n\n      <ion-label>Select Address</ion-label>\n\n      <ion-select (ionChange)="getmodedispacth()" [(ngModel)]="dispatch" interface="popover"\n\n        placeholder="Select Dispatch">\n\n        <ion-option value="1">Branch Receiving</ion-option>\n\n        <ion-option value="2">Home Delivery</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-card>\n\n  <ion-card *ngIf="isDispatch">\n\n    <h2>Personal Details</h2>\n\n    <ion-item>\n\n      <ion-label>Full Name:</ion-label>\n\n      <ion-input [(ngModel)]="MemberInfo.name" placeholder="Enter your name"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Mobile:</ion-label>\n\n      <ion-input [(ngModel)]="MemberInfo.mobile" placeholder="Enter your Mobile"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>State:</ion-label>\n\n      <ion-select interface="popover" [(ngModel)]="MemberInfo.stid" placeholder="Select State">\n\n        <ion-option *ngFor="let st of states" (ionSelect)="getcity(st)" [value]="st.PK_StateId">{{st.StateName}}\n\n        </ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Distract:</ion-label>\n\n      <ion-select interface="popover" [(ngModel)]="MemberInfo.ctid" placeholder="Select Distract">\n\n        <ion-option *ngFor="let ct of city" [value]="ct.PK_CityId">{{ct.CityName}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>Address:</ion-label>\n\n      <ion-input [(ngModel)]="MemberInfo.address" placeholder="Enter your address"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Pin:</ion-label>\n\n      <ion-input [(ngModel)]="MemberInfo.pincode" placeholder="Enter your PIN"></ion-input>\n\n    </ion-item>\n\n  </ion-card>\n\n  <ion-card>\n\n\n\n\n\n    <ion-item>\n\n      <ion-label>Payment Mode:</ion-label>\n\n      <ion-select (ionChange)="getmode()" interface="popover" placeholder="Select Payment Mode"\n\n        [(ngModel)]="objepin.pmode">\n\n        <ion-option value="Cheque">Cheque</ion-option>\n\n        <ion-option value="Cash">Cash</ion-option>\n\n        <ion-option value="BankersCheque">Bankers Cheque</ion-option>\n\n        <ion-option value="BankDeposit">Bank Deposit</ion-option>\n\n        <ion-option value="OnlineTransaction">Online Transaction</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <!-- condition Based -->\n\n    <ion-item>\n\n      <ion-label>Payment Amount:</ion-label>\n\n      <ion-input readonly placeholder="0" [(ngModel)]="objepin.pinamount"></ion-input>\n\n    </ion-item>\n\n    <div *ngIf="! isCash">\n\n      <ion-item>\n\n        <ion-label class="lbl">Cheque/DD No/Bank Transaction No: </ion-label>\n\n\n\n      </ion-item>\n\n      <ion-item>\n\n\n\n        <ion-input [(ngModel)]="objepin.cdbtn" placeholder="Cheque/DD No/Bank Transaction No"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label class="lbl">Cheque/DD Date/Transaction Date: </ion-label>\n\n\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-datetime [(ngModel)]="objepin.cdtd" placeholder="Cheque/DD Date/Transaction Date"\n\n          displayFormat="DD/MM/YYYY">\n\n        </ion-datetime>\n\n        <!-- <ion-input [(ngModel)]="objepin.cdtd" placeholder="Cheque/DD Date/Transaction Date"></ion-input> -->\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label class="lbl">Bank Name: </ion-label>\n\n\n\n      </ion-item>\n\n      <ion-item>\n\n\n\n        <ion-input placeholder="Bank Name" [(ngModel)]="objepin.bank"></ion-input>\n\n      </ion-item>\n\n    </div>\n\n    <!-- condition Based END -->\n\n  </ion-card>\n\n  <ion-row>\n\n    <ion-col col-6>\n\n      <button ion-button (click)="guestProductRequest()">Submit</button>\n\n    </ion-col>\n\n    <ion-col col-6>\n\n      <button ion-button (click)="reset()">Cancle</button>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Ankit_New\Personal\mlm\src\pages\viewpackage\viewpackage.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_0__providers_settings_settings__["a" /* SettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_commonfunction_commonfunction__["a" /* CommonfunctionProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_apiservice_apiservice__["a" /* ApiserviceProvider */]])
    ], ViewpackagePage);
    return ViewpackagePage;
}());

//# sourceMappingURL=viewpackage.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_apiservice_apiservice__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_commonfunction_commonfunction__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterPage = /** @class */ (function () {
    function RegisterPage(alertCtrl, comn, api, navCtrl, navParams) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.comn = comn;
        this.api = api;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.states = [];
        this.city = [];
        this.MemberInfo = {
            cerateby: "",
            epin: "",
            stid: "",
            ctid: "",
            fkeponserid: "",
            name: "",
            mobile: "",
            cityname: "",
            address: "",
            pincode: "",
            adhar: "",
            ac: "",
            bank: "",
            branch: "",
            ifsc: ""
        };
        this.isValid = false;
        this.sponser = {
            code: "",
            name: "",
            type: ""
        };
        this.GoToDashboard = function () {
            // this.navCtrl.s(DashboardPage);
        };
        this.getstaes = function () {
            var loading = _this.comn.presentLoadingDefault();
            loading.present();
            _this.api.getstates().subscribe(function (res) {
                loading.dismiss();
                _this.states = res;
            }, function (err) {
                loading.dismiss();
                console.log("registration page " + err);
            });
        };
        this.getregister = function () {
            var loading = _this.comn.presentLoadingDefault();
            loading.present();
            var user = {
                SponsorId: _this.MemberInfo.fkeponserid,
                StateId: _this.MemberInfo.stid,
                displayname: _this.MemberInfo.name,
                ePinNo: _this.MemberInfo.epin,
                memberAccNo: _this.MemberInfo.ac,
                memberBankName: _this.MemberInfo.bank,
                memberBranch: _this.MemberInfo.branch,
                bankAccName: "NA",
                bankHolderName: "NA",
                iFSCCode: _this.MemberInfo.ifsc,
                aadharNo: _this.MemberInfo.adhar,
                address: _this.MemberInfo.address,
                city: _this.MemberInfo.ctid,
                mobile: _this.MemberInfo.mobile,
                pinCode: _this.MemberInfo.pincode,
                cerateby: _this.MemberInfo.cerateby
            };
            var param = "SponsorId=" + user.SponsorId + "&\n    StateId=" + user.StateId + "&\n    displayName=" + user.displayname + "&\n     ePinNo=" + user.ePinNo + "&\n    memberAccNo=" + user.memberAccNo + "&\n    memberBankName=" + user.memberBankName + "&\n    memberBranch=" + user.memberBranch + "&\n    bankAccName=" + user.bankAccName + "&\n    bankHolderName=" + user.bankHolderName + "&\n    iFSCCode=" + user.iFSCCode + "&\n    aadharNo=" + user.aadharNo + "&\n    address=" + user.address + "&\n    city=" + user.city + "&\n    mobile=" + user.mobile + "&\n    pinCode=" + user.pinCode + "&\n    createdBy=" + user.cerateby;
            console.log(param);
            _this.api.regmember(user).subscribe(function (res) {
                console.log(res);
                loading.dismiss();
                if (res[0].MSG == "0") {
                    _this.showConfirmAlert(res);
                }
                else {
                    var alert_1 = _this.comn.createAlert("Alert!", res[0].Result);
                    alert_1.present();
                }
            }, function (err) {
                loading.dismiss();
                console.log(err);
            });
        };
        this.getcity = function (st) {
            var loading = _this.comn.presentLoadingDefault();
            loading.present();
            _this.api.getCitybyStID(st.PK_StateId).subscribe(function (res) {
                loading.dismiss();
                _this.city = res;
            }, function (error) {
                loading.dismiss();
                console.log(error);
            });
        };
        this.validatesponser = function () {
            var loading = _this.comn.presentLoadingDefault();
            loading.present();
            _this.api.validatesponser(_this.sponser.code).subscribe(function (res) {
                loading.dismiss();
                if (res && res.length > 0) {
                    _this.MemberInfo.fkeponserid = _this.sponser.code; //res[0].FK_MemId;
                    _this.MemberInfo.cerateby = res[0].FK_MemId;
                    _this.sponser.name = res[0].DisplayName;
                    _this.sponser.type = res[0].TemPermanent;
                }
                else {
                    var alert_2 = _this.comn.createAlert("Alert!", "Please enter valid  Sponsor code");
                    alert_2.present();
                }
            }, function (error) {
                loading.dismiss();
                console.log("validate sponser error" + error);
            });
        };
        this.validateepin = function () {
            var loading = _this.comn.presentLoadingDefault();
            loading.present();
            _this.api.validateepin(_this.MemberInfo.epin).subscribe(function (res) {
                loading.dismiss();
                if (res[0].Msg == "1") {
                    var alert_3 = _this.comn.createAlert("Success !", res[0].Result);
                    alert_3.present();
                }
                else {
                    var alert_4 = _this.comn.createAlert("Alert !", res[0].Result);
                    alert_4.present();
                }
            }, function (err) {
                loading.dismiss();
                console.log(err);
            });
        };
        this.reset = function () {
            _this.navCtrl.pop();
        };
        this.showConfirmAlert = function (objres) {
            var alert = _this.alertCtrl.create({
                title: "Success !",
                message: "Member registration was successfully.please save your loginID is " + objres[0].LoginId + " and password is " + objres[0].Password + " .",
                buttons: [
                    {
                        text: "OK",
                        handler: function () {
                            _this.navCtrl.pop();
                        }
                    }
                ]
            });
            alert.present();
        };
        console.log(this.navParams.get("epin"));
        this.MemberInfo.epin = this.navParams.get("epin");
        if (this.MemberInfo.epin !== "") {
            this.validateepin();
        }
        else {
            var alert_5 = this.comn.createAlert("Alert!", "Activation Code not found.");
            alert_5.present();
        }
        this.getstaes();
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad RegisterPage");
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-register",template:/*ion-inline-start:"F:\Ankit_New\Personal\mlm\src\pages\register\register.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <ion-icon name="menu" menuToggle class=\'menu-icon\'></ion-icon>\n\n      Member Registration\n\n      <div class="logo"><img src="../../assets/images/contoso_natura_logo.png"></div>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n\n    <h2>Sponsor</h2>\n\n    <ion-item>\n\n      <ion-label>Activation Code:</ion-label>\n\n      <ion-input [(ngModel)]="MemberInfo.epin" readonly (change)=\'validateepin()\' placeholder="Activation Code">\n\n      </ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Sponsor Code:</ion-label>\n\n      <ion-input [(ngModel)]=\'sponser.code\' (change)=\'validatesponser()\' placeholder="Sponsor Code"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Sponsor Name:</ion-label>\n\n      <ion-input [readonly]=\'true\' [(ngModel)]=\'sponser.name\' placeholder="Sponsor Name"></ion-input>\n\n    </ion-item>\n\n  </ion-card>\n\n  <ion-card>\n\n    <h2>Personal Details</h2>\n\n    <ion-item>\n\n      <ion-label>Full Name:</ion-label>\n\n      <ion-input [(ngModel)]="MemberInfo.name" placeholder="Enter your name"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Mobile:</ion-label>\n\n      <ion-input [(ngModel)]="MemberInfo.mobile" placeholder="Enter your Mobile"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>State:</ion-label>\n\n      <ion-select interface="popover" [(ngModel)]="MemberInfo.stid" placeholder="Select State">\n\n        <ion-option *ngFor="let st of states" (ionSelect)="getcity(st)" [value]="st.PK_StateId">{{st.StateName}}\n\n        </ion-option>\n\n        <!-- <ion-option value="MP">MP</ion-option> -->\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>District:</ion-label>\n\n      <ion-select interface="popover" [(ngModel)]="MemberInfo.ctid" placeholder="Select Distract">\n\n        <ion-option *ngFor="let ct of city" [value]="ct.PK_CityId">{{ct.CityName}}</ion-option>\n\n        <!-- <ion-option value="Kanpur">Kanpur</ion-option> -->\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>City:</ion-label>\n\n      <ion-input [(ngModel)]="MemberInfo.cityname" placeholder="Enter your city"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Address:</ion-label>\n\n      <ion-input [(ngModel)]="MemberInfo.address" placeholder="Enter your address"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Pin:</ion-label>\n\n      <ion-input [(ngModel)]="MemberInfo.pincode" placeholder="Enter your PIN"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Aadhar No.:</ion-label>\n\n      <ion-input [(ngModel)]="MemberInfo.adhar" placeholder="Enter your Aadhar No."></ion-input>\n\n    </ion-item>\n\n  </ion-card>\n\n  <ion-card>\n\n    <h2>Bank Details</h2>\n\n    <ion-item>\n\n      <ion-label>Account No.:</ion-label>\n\n      <ion-input [(ngModel)]="MemberInfo.ac" placeholder="Enter your account"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Bank Name:</ion-label>\n\n      <ion-input [(ngModel)]="MemberInfo.bank" placeholder="Enter your bank name"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Branch Name:</ion-label>\n\n      <ion-input [(ngModel)]="MemberInfo.branch" placeholder="Enter your branch name"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>IFSC Code:</ion-label>\n\n      <ion-input [(ngModel)]="MemberInfo.ifsc" placeholder="Enter your IFSC Code"></ion-input>\n\n    </ion-item>\n\n  </ion-card>\n\n  <ion-row>\n\n    <ion-col col-6>\n\n      <button ion-button (click)=\'getregister()\'>Register</button>\n\n    </ion-col>\n\n    <ion-col col-6>\n\n      <button ion-button (click)="reset()">Cancle</button>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-buttons>\n\n      <button ion-button>Contoso Ujala</button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"F:\Ankit_New\Personal\mlm\src\pages\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_commonfunction_commonfunction__["a" /* CommonfunctionProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_apiservice_apiservice__["a" /* ApiserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordPageModule", function() { return ForgotpasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgotpassword__ = __webpack_require__(323);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForgotpasswordPageModule = /** @class */ (function () {
    function ForgotpasswordPageModule() {
    }
    ForgotpasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__forgotpassword__["a" /* ForgotpasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forgotpassword__["a" /* ForgotpasswordPage */]),
            ],
        })
    ], ForgotpasswordPageModule);
    return ForgotpasswordPageModule;
}());

//# sourceMappingURL=forgotpassword.module.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotpasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_commonfunction_commonfunction__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_apiservice_apiservice__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the ForgotpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotpasswordPage = /** @class */ (function () {
    function ForgotpasswordPage(api, navCtrl, navParams, comn) {
        var _this = this;
        this.api = api;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.comn = comn;
        this.objforgot = {
            mid: "",
            mobile: ""
        };
        this.reset = function () {
            _this.navCtrl.pop();
        };
        this.forgotpassword = function () {
            if (_this.objforgot.mid !== "") {
                if (_this.objforgot.mobile !== "") {
                    var loading_1 = _this.comn.presentLoadingDefault();
                    loading_1.present();
                    _this.api.forgotpasswoord(_this.objforgot).subscribe(function (res) {
                        loading_1.dismiss();
                        if (res !== "0") {
                            _this.objforgot.mobile = "";
                            _this.objforgot.mid = "";
                            var alert_1 = _this.comn.createAlert("Success!", "Password send to your mobile number  successfully.");
                            alert_1.present();
                        }
                        else {
                            var alert_2 = _this.comn.createAlert("Error!", "Error Occured Please contact to admin.");
                            alert_2.present();
                        }
                    }, function (error) {
                        loading_1.dismiss();
                        console.log(error);
                    });
                }
                else {
                    var alert_3 = _this.comn.createAlert("Alert!", "Please Enter Mobile Number.");
                    alert_3.present();
                }
            }
            else {
                var alert_4 = _this.comn.createAlert("Alert!", "Please Enter  MemberID.");
                alert_4.present();
            }
        };
    }
    ForgotpasswordPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ForgotpasswordPage");
    };
    ForgotpasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: "page-forgotpassword",template:/*ion-inline-start:"F:\Ankit_New\Personal\mlm\src\pages\forgotpassword\forgotpassword.html"*/'<ion-content class="has-footer ha-header">\n\n  <div class="login-page">\n\n    <div class="login-bg">\n\n      <div class="logo"><img src="../../assets/images/logo.png"></div>\n\n    </div>\n\n    <div class="login-form">\n\n      <div class="sub_header">Forgot Password</div>\n\n      <div class="input-wrap"><i class="material-icons">person</i>\n\n        <ion-icon name="business"></ion-icon>\n\n        <ion-item>\n\n          <ion-label color="" floating> Member ID</ion-label>\n\n          <ion-input [(ngModel)]="objforgot.mid"></ion-input>\n\n        </ion-item>\n\n      </div>\n\n      <div class="input-wrap"> <i class="material-icons">phone</i>\n\n        <ion-item>\n\n          <ion-label color="" floating>Mobile</ion-label>\n\n          <ion-input [(ngModel)]="objforgot.mobile"></ion-input>\n\n        </ion-item>\n\n      </div>\n\n      <ion-row>\n\n        <ion-col col-6><button (click)="forgotpassword()" ion-button>Submit</button></ion-col>\n\n        <ion-col col-6><button ion-button (click)="reset()">Cancel</button></ion-col>\n\n      </ion-row>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-buttons>\n\n      <button ion-button (click)="reset()">Contoso उजाला</button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"F:\Ankit_New\Personal\mlm\src\pages\forgotpassword\forgotpassword.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_apiservice_apiservice__["a" /* ApiserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_commonfunction_commonfunction__["a" /* CommonfunctionProvider */]])
    ], ForgotpasswordPage);
    return ForgotpasswordPage;
}());

//# sourceMappingURL=forgotpassword.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PindetailsPageModule", function() { return PindetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pindetails__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PindetailsPageModule = /** @class */ (function () {
    function PindetailsPageModule() {
    }
    PindetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pindetails__["a" /* PindetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pindetails__["a" /* PindetailsPage */]),
            ],
        })
    ], PindetailsPageModule);
    return PindetailsPageModule;
}());

//# sourceMappingURL=pindetails.module.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(326);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_settings_settings__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_commonfunction_commonfunction__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_apiservice_apiservice__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__forgotpassword_forgotpassword__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__plan_plan__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__gustregistration_gustregistration__ = __webpack_require__(311);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LoginPage = /** @class */ (function () {
    function LoginPage(events, setting, comn, navCtrl, navParams, api) {
        var _this = this;
        this.events = events;
        this.setting = setting;
        this.comn = comn;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.loginform = {
            user: "",
            pass: "",
            isRemember: true
        };
        this.GoToPlan = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__plan_plan__["a" /* PlanPage */]);
        };
        this.GoToDashboard = function () {
            console.log(_this.loginform);
            var loading = _this.comn.presentLoadingDefault();
            loading.present();
            _this.api.dologin(_this.loginform).subscribe(function (res) {
                if (res[0].UserType !== "Fake") {
                    if (!res[0].IsBlocked) {
                        loading.dismiss();
                        _this.events.publish("userinfo", res);
                        _this.events.publish("isloginType", "main");
                        _this.setting.setValue("isloginType", "main");
                        _this.setting.setValue("fkmemid", res[0].FK_MemId);
                        _this.setting.setValue("user", _this.loginform.user);
                        _this.setting.setValue("password", _this.loginform.pass);
                        _this.setting.setValue("rememberMe", _this.loginform.isRemember);
                        _this.setting.setValue("dashboard", res);
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard__["a" /* DashboardPage */]);
                    }
                    else {
                        var alert_1 = _this.comn.createAlert("Success!", "User is blocked due to company policy ! please contact to your head vision.");
                        alert_1.present();
                    }
                }
                else {
                    loading.dismiss();
                    var alert_2 = _this.comn.createAlert("Alert!", "MemberID and Password not valid. please check and try again.");
                    alert_2.present();
                }
            }, function (error) {
                loading.dismiss();
                console.error(error);
            });
        };
        this.GoToRegistration = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__gustregistration_gustregistration__["a" /* GustregistrationPage */]);
        };
        this.GoToChangePassword = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */]);
        };
        this.setting.load().then(function (res) {
            console.log("setting initialized");
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad LoginPage");
    };
    LoginPage.prototype.ionViewDidEnter = function () {
        this.remembMeLogin();
    };
    LoginPage.prototype.remembMeLogin = function () {
        var _this = this;
        this.setting.load().then(function (res) {
            var settings = _this.setting.getallSettings();
            // console.table(settings);
            if (settings.rememberMe) {
                _this.loginform.user = settings.user;
                _this.loginform.pass = settings.password;
                _this.loginform.isRemember = settings.rememberMe;
                _this.GoToDashboard();
            }
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: "page-login",template:/*ion-inline-start:"F:\Ankit_New\Personal\mlm\src\pages\login\login.html"*/'<ion-content class="has-footer ha-header">\n\n  <div class="login-page">\n\n    <div class="login-bg">\n\n      <div class="logo"><img src="../../assets/images/logo.png"></div>\n\n    </div>\n\n    <div class="login-form">\n\n      <div class="input-wrap"> <i class="material-icons">person</i>\n\n        <ion-item>\n\n          <ion-label color="" floating>Member ID</ion-label>\n\n          <ion-input [(ngModel)]="loginform.user"></ion-input>\n\n        </ion-item>\n\n      </div>\n\n      <div class="input-wrap"> <i class="material-icons">lock_open</i>\n\n        <ion-item>\n\n          <ion-label color="" floating> Password</ion-label>\n\n          <ion-input type="password" [(ngModel)]="loginform.pass"></ion-input>\n\n        </ion-item>\n\n      </div>\n\n      <div class="onoffswitch-wrap">\n\n        <ion-row>\n\n          <ion-col>\n\n            <div class="onoffswitch">\n\n              <input type="checkbox" [(ngModel)]="loginform.isRemember" name="remember" class="onoffswitch-checkbox"\n\n                id="remember">\n\n              <label class="onoffswitch-label" for="remember"> <span class="onoffswitch-inner"></span> <span\n\n                  class="onoffswitch-switch"></span></label>\n\n            </div>\n\n            <ion-label>Remember Me</ion-label>\n\n          </ion-col>\n\n        </ion-row>\n\n      </div>\n\n      <button ion-button (click)="GoToDashboard()">Login</button>\n\n      <button ion-button (click)="GoToRegistration()">For Guest</button>\n\n      <p (click)="GoToChangePassword()">Forgot Password?</p>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-buttons>\n\n      <button ion-button>Contoso उजाला</button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"F:\Ankit_New\Personal\mlm\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_0__providers_settings_settings__["a" /* SettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_commonfunction_commonfunction__["a" /* CommonfunctionProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_apiservice_apiservice__["a" /* ApiserviceProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PintransferPageModule", function() { return PintransferPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pintransfer__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PintransferPageModule = /** @class */ (function () {
    function PintransferPageModule() {
    }
    PintransferPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pintransfer__["a" /* PintransferPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pintransfer__["a" /* PintransferPage */]),
            ],
        })
    ], PintransferPageModule);
    return PintransferPageModule;
}());

//# sourceMappingURL=pintransfer.module.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(329);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_apiservice_apiservice__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_commonfunction_commonfunction__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_interval__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_interval__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMapTo__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMapTo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_mergeMapTo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__editprofile_editprofile__ = __webpack_require__(173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, api, comn) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.comn = comn;
        this.infouser = [];
        this.sub = "";
        this.infousers = [];
        this.GoToDashboard = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */]);
        };
        this.ViewProfile = function (memid) {
            _this.api.ViewProfile(memid).subscribe(function (res) {
                _this.infouser = res[0];
            }, function (err) {
                console.log(err);
            });
        };
        this.editProfie = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__editprofile_editprofile__["a" /* EditprofilePage */], {
                fk_memid: _this.infousers[0].FK_MemId
            });
        };
        this.infousers = this.navParams.get("info");
        console.table(this.infousers.FK_MemId);
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log("ionViewDidLoad ProfilePage");
        /** Live Reload Data Begin */
        this.sub = __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].interval(1000).subscribe(function (val) {
            _this.ViewProfile(_this.infousers[0].FK_MemId);
            console.log("Profile Page Executed ");
        });
        /** Live Reload Data close */
        this.navBar.backButtonClick = function (e) {
            console.log("***** Event Disabled *******");
            _this.sub.unsubscribe();
            _this.navCtrl.pop();
        };
    };
    ProfilePage.prototype.ionViewDidLeave = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Navbar */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Navbar */])
    ], ProfilePage.prototype, "navBar", void 0);
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-profile",template:/*ion-inline-start:"F:\Ankit_New\Personal\mlm\src\pages\profile\profile.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <ion-icon name="menu" menuToggle class=\'menu-icon\'></ion-icon>\n\n      View Profile\n\n      <div class="logo" (click)="editProfie()">Edit</div>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="has-header has-footer">\n\n  <ion-card>\n\n    <h2>Sponsor</h2>\n\n    <ion-row>\n\n      <ion-col col-4><strong>Sponsor Code:</strong></ion-col>\n\n      <ion-col col-8>{{infouser?.SponsorLogin}}</ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n  <ion-card>\n\n    <h2>Personal Details</h2>\n\n    <ion-row>\n\n      <ion-col col-4><strong>Name:</strong></ion-col>\n\n      <ion-col col-8>{{infouser?.Title}} {{infouser?.FirstName}}</ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-4><strong>Mobile:</strong></ion-col>\n\n      <ion-col col-8>{{infouser?.PMobile}}</ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-4><strong>State:</strong></ion-col>\n\n      <ion-col col-8>{{infouser?.State}}</ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-4><strong>Distract:</strong></ion-col>\n\n      <ion-col col-8>{{infouser?.City}}</ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-4><strong>City:</strong></ion-col>\n\n      <ion-col col-8>{{infouser?.City}}</ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-4><strong>Address:</strong></ion-col>\n\n      <ion-col col-8>{{infouser?.Address}}</ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-4><strong>Pin Code:</strong></ion-col>\n\n      <ion-col col-8>{{infouser?.PinCode == null ? \'\' : infouser?.PinCode }}</ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-4><strong>Aadhar No:</strong></ion-col>\n\n      <ion-col col-8>{{infouser?.AddharNo}}</ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n  <ion-card>\n\n    <h2>Bank Details</h2>\n\n    <ion-row>\n\n      <ion-col col-4><strong>Bank Account No:</strong></ion-col>\n\n      <ion-col col-8>{{infouser?.MemberAccNo}}</ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-4><strong>Bank Name:</strong></ion-col>\n\n      <ion-col col-8>{{infouser?.MemberBankName}}</ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-4><strong>Branch Name:</strong></ion-col>\n\n      <ion-col col-8>{{infouser?.MemberBranch}}</ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-4><strong>IFSC Code:</strong></ion-col>\n\n      <ion-col col-8>{{infouser?.IFSCCode}}</ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-buttons>\n\n      <button ion-button>Contoso उजाला</button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"F:\Ankit_New\Personal\mlm\src\pages\profile\profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_apiservice_apiservice__["a" /* ApiserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_commonfunction_commonfunction__["a" /* CommonfunctionProvider */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(321);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
            ],
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RulesPageModule", function() { return RulesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rules__ = __webpack_require__(332);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RulesPageModule = /** @class */ (function () {
    function RulesPageModule() {
    }
    RulesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__rules__["a" /* RulesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__rules__["a" /* RulesPage */]),
            ],
        })
    ], RulesPageModule);
    return RulesPageModule;
}());

//# sourceMappingURL=rules.module.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RulesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(18);
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
 * Generated class for the RulesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RulesPage = /** @class */ (function () {
    function RulesPage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.GoToDashboard = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */]);
        };
    }
    RulesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RulesPage');
    };
    RulesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-rules',template:/*ion-inline-start:"F:\Ankit_New\Personal\mlm\src\pages\rules\rules.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <ion-icon name="menu" menuToggle class=\'menu-icon\'></ion-icon>\n\n      नियम और शर्तें\n\n      <div class="logo"><img src="../../assets/images/contoso_natura_logo.png"></div>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="has-header has-footer">\n\n  <h2>RULES AND REGULATIONS FOR CONTOSO UJALA SCHEME</h2>\n\n  <ion-card>\n\n    <ol>\n\n      <li>सदस्य का भारत का नागरिक होना अनिवार्य है।</li>\n\n      <li> एक सदस्य एक साथ असीमित सदस्यों को योजना में अपने सदस्यता कोड से सदस्य बना सकता है।</li>\n\n      <li> नगद का हस्तातांतरण सदस्य के दिए गए बैंक एकाउण्ट में ही होगा।</li>\n\n      <li>सदस्यों का ‘‘आधार’’ नम्बर अनिवार्य है।</li>\n\n      <li>एक सदस्य पूरे भारत वर्ष में कहीं भी सदस्य को नामित कर सकता है।</li>\n\n      <li> सदस्यता शुल्क प्राप्त होने के उपरांत कम से कम 7 दिन का समय Solar Magic Home Light System/ Solar Mini Home Light System के Delivery लिए चाहिए।</li>\n\n      <li> Product Delivery Charges (Transportके अनुसारद्ध जो भी देय होगा, उसे सदस्य को वहन करना होगा।</li>\n\n      <li> Warranty Claim के लिए 7 दिन का समय निर्धारित है। </li>\n\n      <li> किसी भी परिस्थिति में विवाद होने पर कंपनी का निर्णय अंतिम व सर्वमान्य होगा। </li>\n\n      <li> विवादों का न्यायिक क्षेत्र लखनऊ होगा।</li>\n\n    </ol>\n\n  </ion-card>\n\n  <ion-card>\n\n    <p><img src="../../assets/images/img1.png"></p>\n\n    <p>आपके द्वारा नामित सदस्य या सदस्यों के सदस्य भी किसी को नामित करते हैं तो सभी सदस्यों को 50 बोनस अंक मिलेंगे।</p>\n\n  </ion-card>\n\n  <ion-card>\n\n    <p><img src="../../assets/images/img2.png"></p>\n\n    <p>आपके द्वारा जितने सदस्य नामित किए जाएंगे उतने बोनस अंक प्रति सदस्य 50 के हिसाब से आपको मिलेंगे।</p>\n\n  </ion-card>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-buttons>\n\n      <button ion-button (click)="GoToDashboard()">Contoso उजाला</button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"F:\Ankit_New\Personal\mlm\src\pages\rules\rules.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], RulesPage);
    return RulesPage;
}());

//# sourceMappingURL=rules.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UphaarPageModule", function() { return UphaarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__uphaar__ = __webpack_require__(334);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UphaarPageModule = /** @class */ (function () {
    function UphaarPageModule() {
    }
    UphaarPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__uphaar__["a" /* UphaarPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__uphaar__["a" /* UphaarPage */]),
            ],
        })
    ], UphaarPageModule);
    return UphaarPageModule;
}());

//# sourceMappingURL=uphaar.module.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UphaarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(18);
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
 * Generated class for the UphaarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UphaarPage = /** @class */ (function () {
    function UphaarPage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.GoToDashboard = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */]);
        };
    }
    UphaarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UphaarPage');
    };
    UphaarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-uphaar',template:/*ion-inline-start:"F:\Ankit_New\Personal\mlm\src\pages\uphaar\uphaar.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <ion-icon name="menu" menuToggle class=\'menu-icon\'></ion-icon>\n\n      उपहार\n\n      <div class="logo"><img src="../../assets/images/contoso_natura_logo.png"></div>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="has-header has-footer">\n\n  <h2><span>CONTOSO उजाला</span> <br>\n\n    का सदस्य बनकर सोलर <br>\n\n    Magic Home Light System <br>\n\n    खरीदिए और इस योजना को अपने दोस्तों, सगे संबंधियों में रेफर करिए और पाइए ढेरो उपहार</h2>\n\n  <ion-row>\n\n    <ion-col col-6>\n\n      <ion-card>\n\n        <div class="text-center"><img src="../../assets/images/pro1.jpg"></div>\n\n        <p>सोलर होम लाइट सिस्टम</p>\n\n      </ion-card>\n\n    </ion-col>\n\n    <ion-col col-6>\n\n      <ion-card>\n\n        <div class="text-center"><img src="../../assets/images/pro2.jpg"></div>\n\n        <p>मोबाइल</p>\n\n      </ion-card>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n\n    <ion-col col-6>\n\n      <ion-card>\n\n        <div class="text-center"><img src="../../assets/images/pro3.jpg"></div>\n\n        <p>सोलर चार्जर</p>\n\n      </ion-card>\n\n    </ion-col>\n\n    <ion-col col-6>\n\n      <ion-card>\n\n        <div class="text-center"><img src="../../assets/images/pro4.jpg"></div>\n\n        <p>टी0 वी0</p>\n\n      </ion-card>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n\n    <ion-col col-6>\n\n      <ion-card>\n\n        <div class="text-center"><img src="../../assets/images/pro5.jpg"></div>\n\n        <p>स्कूटी</p>\n\n      </ion-card>\n\n    </ion-col>\n\n    <ion-col col-6>\n\n      <ion-card>\n\n        <div class="text-center"><img src="../../assets/images/pro6.jpg"></div>\n\n        <p>वाटर प्यूरीफायर</p>\n\n      </ion-card>\n\n    </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n\n    <ion-col col-6>\n\n      <ion-card>\n\n        <div class="text-center"><img src="../../assets/images/pro7.jpg"></div>\n\n        <p>मोटर साइकिल</p>\n\n      </ion-card>\n\n    </ion-col>\n\n    <ion-col col-6>\n\n      <ion-card>\n\n        <div class="text-center"><img src="../../assets/images/pro8.jpg"></div>\n\n        <p>कार</p>\n\n      </ion-card>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-buttons>\n\n      <button ion-button (click)="GoToDashboard()">Contoso उजाला</button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"F:\Ankit_New\Personal\mlm\src\pages\uphaar\uphaar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], UphaarPage);
    return UphaarPage;
}());

//# sourceMappingURL=uphaar.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanPageModule", function() { return PlanPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plan__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PlanPageModule = /** @class */ (function () {
    function PlanPageModule() {
    }
    PlanPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__plan__["a" /* PlanPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__plan__["a" /* PlanPage */]),
            ],
        })
    ], PlanPageModule);
    return PlanPageModule;
}());

//# sourceMappingURL=plan.module.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PintransferreportPageModule", function() { return PintransferreportPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pintransferreport__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PintransferreportPageModule = /** @class */ (function () {
    function PintransferreportPageModule() {
    }
    PintransferreportPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pintransferreport__["a" /* PintransferreportPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pintransferreport__["a" /* PintransferreportPage */]),
            ],
        })
    ], PintransferreportPageModule);
    return PintransferreportPageModule;
}());

//# sourceMappingURL=pintransferreport.module.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(399);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export provideSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_viewpackage_viewpackage_module__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_guestdashboard_guestdashboard_module__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_gustregistration_gustregistration_module__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_pinrequest_pinrequest_module__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_pintransferreport_pintransferreport_module__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_pintransfer_pintransfer_module__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_pindetails_pindetails_module__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile_module__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_downline_downline_module__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_settings_settings__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_commonfunction_commonfunction__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_home_home__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_file__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_bonuspoint_bonuspoint_module__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_changepassword_changepassword_module__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_forgotpassword_forgotpassword_module__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_contactus_contactus_module__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_uphaar_uphaar_module__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_dashboard_dashboard_module__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_plan_plan_module__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_rules_rules_module__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_login_login_module__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_register_register_module__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_apiservice_apiservice__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_storage__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_common_http__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_date_picker__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_editprofile_editprofile_module__ = __webpack_require__(172);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































function provideSettings(storage) {
    /**
     * The Settings provider takes a set of default settings for your app.
     *
     * You can add new settings options at any time. Once the settings are saved,
     * these values will not overwrite the saved values (this can be done manually if desired).
     */
    console.log("settings provider setting setting");
    return new __WEBPACK_IMPORTED_MODULE_9__providers_settings_settings__["a" /* SettingsProvider */](storage, {
        projectName: "fmPilot",
        host: ""
    });
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_12__angular_core__["J" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_17__pages_home_home__["a" /* HomePage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__pages_viewpackage_viewpackage_module__["ViewpackagePageModule"],
                __WEBPACK_IMPORTED_MODULE_1__pages_guestdashboard_guestdashboard_module__["GuestdashboardPageModule"],
                __WEBPACK_IMPORTED_MODULE_2__pages_gustregistration_gustregistration_module__["GustregistrationPageModule"],
                __WEBPACK_IMPORTED_MODULE_31__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_20__pages_changepassword_changepassword_module__["ChangepasswordPageModule"],
                __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile_module__["ProfilePageModule"],
                __WEBPACK_IMPORTED_MODULE_30__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_28__pages_register_register_module__["RegisterPageModule"],
                __WEBPACK_IMPORTED_MODULE_27__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_26__pages_rules_rules_module__["RulesPageModule"],
                __WEBPACK_IMPORTED_MODULE_25__pages_plan_plan_module__["PlanPageModule"],
                __WEBPACK_IMPORTED_MODULE_24__pages_dashboard_dashboard_module__["DashboardPageModule"],
                __WEBPACK_IMPORTED_MODULE_23__pages_uphaar_uphaar_module__["UphaarPageModule"],
                __WEBPACK_IMPORTED_MODULE_22__pages_contactus_contactus_module__["ContactusPageModule"],
                __WEBPACK_IMPORTED_MODULE_20__pages_changepassword_changepassword_module__["ChangepasswordPageModule"],
                __WEBPACK_IMPORTED_MODULE_21__pages_forgotpassword_forgotpassword_module__["ForgotpasswordPageModule"],
                __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_19__pages_bonuspoint_bonuspoint_module__["BonuspointPageModule"],
                __WEBPACK_IMPORTED_MODULE_6__pages_pindetails_pindetails_module__["PindetailsPageModule"],
                __WEBPACK_IMPORTED_MODULE_8__pages_downline_downline_module__["DownlinePageModule"],
                __WEBPACK_IMPORTED_MODULE_5__pages_pintransfer_pintransfer_module__["PintransferPageModule"],
                __WEBPACK_IMPORTED_MODULE_4__pages_pintransferreport_pintransferreport_module__["PintransferreportPageModule"],
                __WEBPACK_IMPORTED_MODULE_3__pages_pinrequest_pinrequest_module__["PinrequestPageModule"],
                __WEBPACK_IMPORTED_MODULE_33__pages_editprofile_editprofile_module__["EditprofilePageModule"],
                __WEBPACK_IMPORTED_MODULE_13_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/contactus/contactus.module#ContactusPageModule', name: 'ContactusPage', segment: 'contactus', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editprofile/editprofile.module#EditprofilePageModule', name: 'EditprofilePage', segment: 'editprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bonuspoint/bonuspoint.module#BonuspointPageModule', name: 'BonuspointPage', segment: 'bonuspoint', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/guestdashboard/guestdashboard.module#GuestdashboardPageModule', name: 'GuestdashboardPage', segment: 'guestdashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/changepassword/changepassword.module#ChangepasswordPageModule', name: 'ChangepasswordPage', segment: 'changepassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gustregistration/gustregistration.module#GustregistrationPageModule', name: 'GustregistrationPage', segment: 'gustregistration', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/downline/downline.module#DownlinePageModule', name: 'DownlinePage', segment: 'downline', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pinrequest/pinrequest.module#PinrequestPageModule', name: 'PinrequestPage', segment: 'pinrequest', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgotpassword/forgotpassword.module#ForgotpasswordPageModule', name: 'ForgotpasswordPage', segment: 'forgotpassword', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pindetails/pindetails.module#PindetailsPageModule', name: 'PindetailsPage', segment: 'pindetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pintransfer/pintransfer.module#PintransferPageModule', name: 'PintransferPage', segment: 'pintransfer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/rules/rules.module#RulesPageModule', name: 'RulesPage', segment: 'rules', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/uphaar/uphaar.module#UphaarPageModule', name: 'UphaarPage', segment: 'uphaar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/plan/plan.module#PlanPageModule', name: 'PlanPage', segment: 'plan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/productdetail/productdetail.module#ProductdetailPageModule', name: 'ProductdetailPage', segment: 'productdetail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pintransferreport/pintransferreport.module#PintransferreportPageModule', name: 'PintransferreportPage', segment: 'pintransferreport', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/viewpackage/viewpackage.module#ViewpackagePageModule', name: 'ViewpackagePage', segment: 'viewpackage', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_13_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_17__pages_home_home__["a" /* HomePage */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_date_picker__["a" /* DatePicker */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_31__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_10__providers_commonfunction_commonfunction__["a" /* CommonfunctionProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_9__providers_settings_settings__["a" /* SettingsProvider */], useFactory: provideSettings, deps: [__WEBPACK_IMPORTED_MODULE_30__ionic_storage__["b" /* Storage */]] },
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_12__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_13_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_29__providers_apiservice_apiservice__["a" /* ApiserviceProvider */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_12__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 174,
	"./af.js": 174,
	"./ar": 175,
	"./ar-dz": 176,
	"./ar-dz.js": 176,
	"./ar-kw": 177,
	"./ar-kw.js": 177,
	"./ar-ly": 178,
	"./ar-ly.js": 178,
	"./ar-ma": 179,
	"./ar-ma.js": 179,
	"./ar-sa": 180,
	"./ar-sa.js": 180,
	"./ar-tn": 181,
	"./ar-tn.js": 181,
	"./ar.js": 175,
	"./az": 182,
	"./az.js": 182,
	"./be": 183,
	"./be.js": 183,
	"./bg": 184,
	"./bg.js": 184,
	"./bm": 185,
	"./bm.js": 185,
	"./bn": 186,
	"./bn.js": 186,
	"./bo": 187,
	"./bo.js": 187,
	"./br": 188,
	"./br.js": 188,
	"./bs": 189,
	"./bs.js": 189,
	"./ca": 190,
	"./ca.js": 190,
	"./cs": 191,
	"./cs.js": 191,
	"./cv": 192,
	"./cv.js": 192,
	"./cy": 193,
	"./cy.js": 193,
	"./da": 194,
	"./da.js": 194,
	"./de": 195,
	"./de-at": 196,
	"./de-at.js": 196,
	"./de-ch": 197,
	"./de-ch.js": 197,
	"./de.js": 195,
	"./dv": 198,
	"./dv.js": 198,
	"./el": 199,
	"./el.js": 199,
	"./en-SG": 200,
	"./en-SG.js": 200,
	"./en-au": 201,
	"./en-au.js": 201,
	"./en-ca": 202,
	"./en-ca.js": 202,
	"./en-gb": 203,
	"./en-gb.js": 203,
	"./en-ie": 204,
	"./en-ie.js": 204,
	"./en-il": 205,
	"./en-il.js": 205,
	"./en-nz": 206,
	"./en-nz.js": 206,
	"./eo": 207,
	"./eo.js": 207,
	"./es": 208,
	"./es-do": 209,
	"./es-do.js": 209,
	"./es-us": 210,
	"./es-us.js": 210,
	"./es.js": 208,
	"./et": 211,
	"./et.js": 211,
	"./eu": 212,
	"./eu.js": 212,
	"./fa": 213,
	"./fa.js": 213,
	"./fi": 214,
	"./fi.js": 214,
	"./fo": 215,
	"./fo.js": 215,
	"./fr": 216,
	"./fr-ca": 217,
	"./fr-ca.js": 217,
	"./fr-ch": 218,
	"./fr-ch.js": 218,
	"./fr.js": 216,
	"./fy": 219,
	"./fy.js": 219,
	"./ga": 220,
	"./ga.js": 220,
	"./gd": 221,
	"./gd.js": 221,
	"./gl": 222,
	"./gl.js": 222,
	"./gom-latn": 223,
	"./gom-latn.js": 223,
	"./gu": 224,
	"./gu.js": 224,
	"./he": 225,
	"./he.js": 225,
	"./hi": 226,
	"./hi.js": 226,
	"./hr": 227,
	"./hr.js": 227,
	"./hu": 228,
	"./hu.js": 228,
	"./hy-am": 229,
	"./hy-am.js": 229,
	"./id": 230,
	"./id.js": 230,
	"./is": 231,
	"./is.js": 231,
	"./it": 232,
	"./it-ch": 233,
	"./it-ch.js": 233,
	"./it.js": 232,
	"./ja": 234,
	"./ja.js": 234,
	"./jv": 235,
	"./jv.js": 235,
	"./ka": 236,
	"./ka.js": 236,
	"./kk": 237,
	"./kk.js": 237,
	"./km": 238,
	"./km.js": 238,
	"./kn": 239,
	"./kn.js": 239,
	"./ko": 240,
	"./ko.js": 240,
	"./ku": 241,
	"./ku.js": 241,
	"./ky": 242,
	"./ky.js": 242,
	"./lb": 243,
	"./lb.js": 243,
	"./lo": 244,
	"./lo.js": 244,
	"./lt": 245,
	"./lt.js": 245,
	"./lv": 246,
	"./lv.js": 246,
	"./me": 247,
	"./me.js": 247,
	"./mi": 248,
	"./mi.js": 248,
	"./mk": 249,
	"./mk.js": 249,
	"./ml": 250,
	"./ml.js": 250,
	"./mn": 251,
	"./mn.js": 251,
	"./mr": 252,
	"./mr.js": 252,
	"./ms": 253,
	"./ms-my": 254,
	"./ms-my.js": 254,
	"./ms.js": 253,
	"./mt": 255,
	"./mt.js": 255,
	"./my": 256,
	"./my.js": 256,
	"./nb": 257,
	"./nb.js": 257,
	"./ne": 258,
	"./ne.js": 258,
	"./nl": 259,
	"./nl-be": 260,
	"./nl-be.js": 260,
	"./nl.js": 259,
	"./nn": 261,
	"./nn.js": 261,
	"./pa-in": 262,
	"./pa-in.js": 262,
	"./pl": 263,
	"./pl.js": 263,
	"./pt": 264,
	"./pt-br": 265,
	"./pt-br.js": 265,
	"./pt.js": 264,
	"./ro": 266,
	"./ro.js": 266,
	"./ru": 267,
	"./ru.js": 267,
	"./sd": 268,
	"./sd.js": 268,
	"./se": 269,
	"./se.js": 269,
	"./si": 270,
	"./si.js": 270,
	"./sk": 271,
	"./sk.js": 271,
	"./sl": 272,
	"./sl.js": 272,
	"./sq": 273,
	"./sq.js": 273,
	"./sr": 274,
	"./sr-cyrl": 275,
	"./sr-cyrl.js": 275,
	"./sr.js": 274,
	"./ss": 276,
	"./ss.js": 276,
	"./sv": 277,
	"./sv.js": 277,
	"./sw": 278,
	"./sw.js": 278,
	"./ta": 279,
	"./ta.js": 279,
	"./te": 280,
	"./te.js": 280,
	"./tet": 281,
	"./tet.js": 281,
	"./tg": 282,
	"./tg.js": 282,
	"./th": 283,
	"./th.js": 283,
	"./tl-ph": 284,
	"./tl-ph.js": 284,
	"./tlh": 285,
	"./tlh.js": 285,
	"./tr": 286,
	"./tr.js": 286,
	"./tzl": 287,
	"./tzl.js": 287,
	"./tzm": 288,
	"./tzm-latn": 289,
	"./tzm-latn.js": 289,
	"./tzm.js": 288,
	"./ug-cn": 290,
	"./ug-cn.js": 290,
	"./uk": 291,
	"./uk.js": 291,
	"./ur": 292,
	"./ur.js": 292,
	"./uz": 293,
	"./uz-latn": 294,
	"./uz-latn.js": 294,
	"./uz.js": 293,
	"./vi": 295,
	"./vi.js": 295,
	"./x-pseudo": 296,
	"./x-pseudo.js": 296,
	"./yo": 297,
	"./yo.js": 297,
	"./zh-cn": 298,
	"./zh-cn.js": 298,
	"./zh-hk": 299,
	"./zh-hk.js": 299,
	"./zh-tw": 300,
	"./zh-tw.js": 300
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
webpackContext.id = 426;

/***/ }),

/***/ 455:
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),

/***/ 456:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 457:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PindetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_apiservice_apiservice__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_commonfunction_commonfunction__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__plan_plan__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pintransferreport_pintransferreport__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pintransfer_pintransfer__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pinrequest_pinrequest__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__register_register__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_moment__);
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
 * Generated class for the PindetailsPage page.
 *moment(date).format("MM-DD-YYYY hh:mmA");
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PindetailsPage = /** @class */ (function () {
    function PindetailsPage(setting, comn, api, navCtrl, navParams) {
        var _this = this;
        this.setting = setting;
        this.comn = comn;
        this.api = api;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.epin = [];
        this.objpin = {
            fkid: "",
            pid: 0,
            pin: 2
        };
        this.gotoregister = function (code) {
            if (code === void 0) { code = ""; }
            console.log("epin code " + code);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__register_register__["a" /* RegisterPage */], {
                epin: code
            });
        };
        this.epindetail = function () {
            var loading = _this.comn.presentLoadingDefault();
            loading.present();
            console.log(_this.objpin);
            _this.api.epindetail(_this.objpin).subscribe(function (res) {
                loading.dismiss();
                _this.epin = res;
                _this.epin.forEach(function (x) {
                    x.CreatedDate = __WEBPACK_IMPORTED_MODULE_10_moment___default()(x.CreatedDate).format("DD/MM/YYYY hh:mmA");
                });
                console.table(_this.epin);
            }, function (error) {
                loading.dismiss();
                console.log(error);
            });
        };
        this.reset = function () {
            _this.objpin.pid = 0;
            _this.objpin.pin = 2;
            _this.epindetail();
        };
        this.gotopackage = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__plan_plan__["a" /* PlanPage */]);
        };
        this.gotopinrequest = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pinrequest_pinrequest__["a" /* PinrequestPage */]);
        };
        this.gotopintransafer = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pintransfer_pintransfer__["a" /* PintransferPage */]);
        };
        this.gotopinreport = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pintransferreport_pintransferreport__["a" /* PintransferreportPage */]);
        };
    }
    PindetailsPage.prototype.ionViewDidLoad = function () {
        this.sett = this.setting.getallSettings();
        this.objpin.fkid = this.sett.dashboard[0].FK_MemId;
        console.log("ionViewDidLoad PintransferreportPage");
        console.log("ionViewDidLoad PindetailsPage");
    };
    PindetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["n" /* Component */])({
            selector: "page-pindetails",template:/*ion-inline-start:"F:\Ankit_New\Personal\mlm\src\pages\pindetails\pindetails.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <ion-icon name="menu" menuToggle class=\'menu-icon\'></ion-icon>\n\n      PIN Details\n\n    </ion-title>\n\n  </ion-navbar>\n\n  <!-- Filter-->\n\n  <ion-fab top right edge class="pin_menu">\n\n    <button ion-fab mini>\n\n      <ion-icon name="pricetag"></ion-icon>\n\n    </button>\n\n    <ion-fab-list>\n\n      <ul class="fab_list">\n\n        <li><a href="javascript:void(0)">\n\n            <ion-icon name="pricetag"></ion-icon>\n\n            <div class="clearfix"></div> PIN Details\n\n          </a></li>\n\n        <li (click)="gotopinrequest()">\n\n          <a href="javascript:void(0)">\n\n            <ion-icon name="pricetag"></ion-icon>\n\n            <div class="clearfix"></div> e-PIN Request\n\n          </a>\n\n        </li>\n\n        <li (click)="gotopintransafer()"><a href="javascript:void(0)">\n\n            <ion-icon name="pricetag"></ion-icon>\n\n            <div class="clearfix"></div> PIN Transfer\n\n          </a></li>\n\n        <li (click)="gotopinreport()">\n\n          <a href="javascript:void(0)">\n\n            <ion-icon name="pricetag"></ion-icon>\n\n            <div class="clearfix"></div> PIN Transfer Report\n\n          </a>\n\n        </li>\n\n      </ul>\n\n    </ion-fab-list>\n\n  </ion-fab>\n\n  <!-- /Filter-->\n\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n\n    <ion-item>\n\n      <ion-label>Select Plan:</ion-label>\n\n      <ion-select [(ngModel)]="objpin.pid" interface="popover" placeholder="Select Plan">\n\n        <ion-option value="0">All</ion-option>\n\n        <ion-option value="1">Plan A 8500</ion-option>\n\n        <ion-option value="2">Plan B 4500</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Select Pin Type:</ion-label>\n\n      <ion-select [(ngModel)]="objpin.pin" interface="popover" placeholder="Select Pin Type">\n\n        <ion-option value="2">All</ion-option>\n\n        <ion-option value="1">Used</ion-option>\n\n        <ion-option value="0">Unused</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button (click)="epindetail()">Submit</button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button (click)="reset()">Reset</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n  <ion-card>\n\n    <table>\n\n      <thead>\n\n        <tr>\n\n          <th>Sr. No.</th>\n\n          <th>Request No</th>\n\n          <th>Activation Code</th>\n\n          <th>Plan</th>\n\n          <th>Issue Date</th>\n\n          <th></th>\n\n        </tr>\n\n      </thead>\n\n      <tbody>\n\n        <tr *ngFor="let item of epin;let i=index">\n\n          <td>{{i+1}}</td>\n\n          <td>{{item.EpinRequestNo}}</td>\n\n          <td>{{item.ePinNo}}</td>\n\n\n\n          <td>{{item.ProductName}}</td>\n\n          <td>{{item.CreatedDate}}</td>\n\n          <td> <button [disabled]="item.PinType == \'Used\' ? true : false " (click)="gotoregister(item.ePinNo)"\n\n              ion-button>\n\n              Join</button></td>\n\n        </tr>\n\n      </tbody>\n\n    </table>\n\n  </ion-card>\n\n\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-buttons>\n\n      <button ion-button>Contoso उजाला</button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"F:\Ankit_New\Personal\mlm\src\pages\pindetails\pindetails.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__["a" /* SettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_commonfunction_commonfunction__["a" /* CommonfunctionProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_apiservice_apiservice__["a" /* ApiserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["i" /* NavParams */]])
    ], PindetailsPage);
    return PindetailsPage;
}());

//# sourceMappingURL=pindetails.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_pindetails_pindetails__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_profile_profile__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_downline_downline__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_changepassword_changepassword__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_dashboard_dashboard__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_plan_plan__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_bonuspoint_bonuspoint__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_uphaar_uphaar__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_rules_rules__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_contactus_contactus__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_settings_settings__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_guestdashboard_guestdashboard__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var MyApp = /** @class */ (function () {
    function MyApp(settings, events, platform, statusBar, splashScreen) {
        var _this = this;
        this.settings = settings;
        this.events = events;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */];
        this.username = "";
        this.info = [];
        this.isloginType = "main";
        this.GoToPlan = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__pages_plan_plan__["a" /* PlanPage */]);
        };
        this.GotoViewProfile = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__pages_profile_profile__["a" /* ProfilePage */], {
                info: _this.info
            });
        };
        this.GoTopin = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__pages_pindetails_pindetails__["a" /* PindetailsPage */]);
        };
        this.GoToDownline = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_downline_downline__["a" /* DownlinePage */]);
        };
        this.GoTocpass = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pages_changepassword_changepassword__["a" /* ChangepasswordPage */]);
        };
        this.GoToDashboard = function () {
            if (_this.isloginType == "main") {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_dashboard_dashboard__["a" /* DashboardPage */]);
            }
            else if (_this.isloginType == "guest") {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_16__pages_guestdashboard_guestdashboard__["a" /* GuestdashboardPage */]);
            }
        };
        this.GoToUphaar = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__pages_uphaar_uphaar__["a" /* UphaarPage */]);
        };
        this.GoToContact = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__pages_contactus_contactus__["a" /* ContactusPage */]);
        };
        this.GoTologin = function () {
            var keyArray = [];
            keyArray.push("rememberMe");
            keyArray.push("user");
            keyArray.push("password");
            keyArray.push("dashboard");
            keyArray.push("isloginType"); //fkmemid
            keyArray.push("fkmemid");
            keyArray.push("guest");
            _this.settings.removeKey(keyArray).then(function (__) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]);
                // this.settings.setValue('isLogin', false);
                _this.settings.save();
            });
        };
        this.GoToRules = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__pages_rules_rules__["a" /* RulesPage */]);
        };
        this.GoToBonus = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__pages_bonuspoint_bonuspoint__["a" /* BonuspointPage */]);
        };
        console.log(this.isloginType);
        platform.ready().then(function () {
            statusBar.overlaysWebView(false);
            statusBar.styleDefault();
            statusBar.backgroundColorByHexString("#ffffff");
            splashScreen.hide();
            _this.events.subscribe("isloginType", function (islogin) {
                console.log(islogin);
                _this.isloginType = islogin;
            });
            _this.events.subscribe("userinfo", function (user) {
                console.table(user);
                _this.info = user;
                if (_this.isloginType == "main") {
                    _this.username = user[0].Title + " " + user[0].DisplayName;
                }
                else {
                    _this.username = user[0].name;
                }
            });
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_9" /* ViewChild */])("content"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */])
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({template:/*ion-inline-start:"F:\Ankit_New\Personal\mlm\src\app\app.html"*/'<ion-menu [content]="content" [swipeEnabled]="false">\n\n  <ion-content class=\'menu-listing\'>\n\n    <ion-item (click)="GotoViewProfile()" class="profile-item" menuClose>\n\n      <div class="profile-picture"> <img src="../../assets/images/no_img.jpg" /> </div>\n\n      <h2 class="user-name">{{username}}</h2>\n\n      <!-- <div class="user-address">Lucknow</div> -->\n\n    </ion-item>\n\n    <ion-list menuClose>\n\n      <button ion-item (click)="GoToDashboard()">\n\n        <ion-icon name="speedometer"></ion-icon>\n\n        डैशबोर्ड (Dashboard)\n\n      </button>\n\n      <button *ngIf="isloginType===\'main\'" ion-item (click)="GoToDownline()">\n\n        <ion-icon name="speedometer"></ion-icon>\n\n        निचली पंक्ति (Downline)\n\n      </button>\n\n      <button ion-item (click)="GoToPlan()">\n\n        <ion-icon name="bulb"></ion-icon>\n\n        योजना (Plan)\n\n      </button>\n\n      <button *ngIf="isloginType===\'main\'" ion-item (click)="GoToBonus()">\n\n        <ion-icon name="trophy"></ion-icon>\n\n        बोनस अंक (Bonus Point)\n\n      </button>\n\n      <button ion-item (click)="GoToUphaar()">\n\n        <ion-icon name="megaphone"></ion-icon>\n\n        उपहार (Gift)\n\n      </button>\n\n      <button *ngIf="isloginType===\'main\'" ion-item (click)="GoTopin()">\n\n        <ion-icon name="pin"></ion-icon>\n\n        पिन (Pin)\n\n      </button>\n\n      <button *ngIf="isloginType===\'main\'" ion-item (click)="GoTocpass()">\n\n        <ion-icon name="call"></ion-icon>\n\n        पासवर्ड बदलें (Change Password)\n\n      </button>\n\n      <button ion-item (click)="GoToRules()">\n\n        <ion-icon name="clipboard"></ion-icon>\n\n        नियम और शर्तें (Rules and Regulations)\n\n      </button>\n\n      <button ion-item (click)="GoToContact()">\n\n        <ion-icon name="call"></ion-icon>\n\n        सम्पर्क करें (Contact Us)\n\n      </button>\n\n    </ion-list>\n\n    <ion-footer class=\'logout-menuitem\' menuClose>\n\n      <ion-toolbar>\n\n        <button ion-item nav-clear menu-close (click)="GoTologin()">\n\n          <ion-icon name="exit" class="bg-red"></ion-icon>\n\n          लोग आउट (Log Out)\n\n        </button>\n\n      </ion-toolbar>\n\n    </ion-footer>\n\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"F:\Ankit_New\Personal\mlm\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_15__providers_settings_settings__["a" /* SettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"F:\Ankit_New\Personal\mlm\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title> Ionic Blank </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding> The world is your oyster.\n\n  <p> If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide. </p>\n\n</ion-content>\n\n'/*ion-inline-end:"F:\Ankit_New\Personal\mlm\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PinrequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pindetails_pindetails__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pintransferreport_pintransferreport__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pintransfer_pintransfer__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_settings_settings__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_commonfunction_commonfunction__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_apiservice_apiservice__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PinrequestPage = /** @class */ (function () {
    function PinrequestPage(api, navCtrl, navParams, comn, setting) {
        var _this = this;
        this.api = api;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.comn = comn;
        this.setting = setting;
        /** Product request Model Create Begin*/
        this.product = [];
        this.total = 0;
        this.adet = {
            productId: [],
            noOfPins: [],
            MemId: "",
            paymentMode: "",
            chequeDDNo: "",
            chequeDDDate: "",
            bankName: "",
            createdBy: ""
        };
        /** Product Request Model Create Close */
        this.objepin = {
            productA: {
                product: "A",
                pin: 0,
                price: 8500,
                total: 0
            },
            productB: {
                product: "B",
                pin: 0,
                price: 4500,
                total: 0
            },
            total: 0,
            pinamount: 0,
            pmode: "Cash",
            cdbtn: "",
            cdtd: "",
            bank: ""
        };
        this.userref = "";
        this.isCash = true;
        this.gotopindetail = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__pindetails_pindetails__["a" /* PindetailsPage */]);
        };
        this.gotopintransafer = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pintransfer_pintransfer__["a" /* PintransferPage */]);
        };
        this.gotopinreport = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__pintransferreport_pintransferreport__["a" /* PintransferreportPage */]);
        };
        this.pinchange = function (pin) {
            _this.product[pin].pin =
                _this.product[pin].pin == "" ? 0 : _this.product[pin].pin;
            _this.product[pin].total =
                Number(_this.product[pin].pin) * Number(_this.product[pin].ProductPrice);
            _this.total = 0;
            _this.product.forEach(function (element) {
                _this.total += Number(element.total);
            });
            // if (pin == "A") {
            //   let pins =
            //     this.objepin.productA.pin.toString() == ""
            //       ? "0"
            //       : this.objepin.productA.pin;
            //   this.objepin.productA.total = Number(pins) * this.objepin.productA.price;
            //   this.objepin.total =
            //     this.objepin.productB.total + this.objepin.productA.total;
            //   if (pins == "0") {
            //     this.objepin.productA.pin = 0;
            //   }
            // } else if (pin == "B") {
            //   let pinss =
            //     this.objepin.productB.pin.toString() == ""
            //       ? "0"
            //       : this.objepin.productB.pin;
            //   this.objepin.productB.total = Number(pinss) * this.objepin.productB.price;
            //   this.objepin.total =
            //     this.objepin.productB.total + this.objepin.productA.total;
            //   if (pinss == "0") {
            //     this.objepin.productB.pin = 0;
            //   }
            // }
        };
        this.getmode = function () {
            if (_this.objepin.pmode == "Cash") {
                console.log("cash");
                _this.isCash = true;
            }
            else {
                _this.isCash = false;
            }
        };
        this.reset = function () {
            _this.objepin.cdtd = "";
            _this.objepin.cdbtn = "";
            _this.objepin.bank = "";
            _this.objepin.total = 0;
            _this.objepin.productA.pin = 0;
            _this.objepin.productB.pin = 0;
            _this.objepin.productA.total = 0;
            _this.objepin.productB.total = 0;
            _this.total = 0;
            _this.product.forEach(function (y) {
                y.pin = 0;
                y.total = 0;
            });
            _this.objepin.pinamount = 0;
            _this.objepin.pmode = "Cash";
            _this.isCash = true;
        };
        this.epinrequest = function () {
            var piinarr = _this.product.filter(function (x) { return x.pin == 0; });
            if (piinarr.length == _this.product.length) {
                console.log(piinarr);
                var alert_1 = _this.comn.createAlert("Alert!", "Please Enter Number Of Pins.");
                alert_1.present();
                return;
            }
            else {
                _this.product.forEach(function (x) {
                    _this.adet.productId.push(x.PK_ProductId);
                    _this.adet.noOfPins.push(x.pin);
                });
            }
            if (_this.adet.noOfPins.length > 0) {
                if (_this.objepin.pmode == "Cash") {
                    _this.adet.paymentMode = _this.objepin.pmode;
                }
                else {
                    if (_this.objepin.cdbtn !== "") {
                        if (_this.objepin.cdtd !== "") {
                            if (_this.objepin.bank !== "") {
                                _this.adet.paymentMode = _this.objepin.pmode;
                                _this.adet.chequeDDNo = _this.objepin.cdbtn;
                                _this.adet.chequeDDDate =
                                    _this.objepin.cdtd == "" ? null : _this.objepin.cdtd;
                                _this.adet.bankName = _this.objepin.bank;
                            }
                            else {
                                var alert_2 = _this.comn.createAlert("Alert!", "Plese enter Bank Name.");
                                alert_2.present();
                                return;
                            }
                        }
                        else {
                            var alert_3 = _this.comn.createAlert("Alert!", "Plese enter Cheque/DD Date/Transaction Date.");
                            alert_3.present();
                            return;
                        }
                    }
                    else {
                        var alert_4 = _this.comn.createAlert("Alert!", "Plese enter Cheque/DD No/Bank Transaction No.");
                        alert_4.present();
                        return;
                    }
                }
                var loading_1 = _this.comn.presentLoadingDefault();
                loading_1.present();
                _this.adet.MemId = _this.userref;
                _this.adet.paymentMode = _this.objepin.pmode;
                _this.adet.chequeDDNo = _this.objepin.cdbtn;
                _this.adet.chequeDDDate =
                    _this.objepin.cdtd == "" ? null : _this.objepin.cdtd;
                _this.adet.bankName = _this.objepin.bank;
                _this.adet.createdBy = _this.userref;
                console.log("****************epin Request**********");
                console.log(_this.adet);
                _this.api.epinrequest(_this.adet).subscribe(function (res) {
                    loading_1.dismiss();
                    if (res) {
                        _this.reset();
                        var alert_5 = _this.comn.createAlert("Success!", "Pin request submit successfully.");
                        alert_5.present();
                    }
                    else {
                        var alert_6 = _this.comn.createAlert("Error!", "Error Occured ! Contact to admin.");
                        alert_6.present();
                    }
                }, function (error) {
                    loading_1.dismiss();
                    var alert = _this.comn.createAlert("Error!", error.message);
                    alert.present();
                    console.log(error);
                });
                console.log(_this.adet);
            }
            else {
                var alert_7 = _this.comn.createAlert("Alert!", "Please Enter Number Of Pins.");
                alert_7.present();
            }
        };
        this.getproduct = function () {
            var loading = _this.comn.presentLoadingDefault();
            loading.present();
            _this.api.getProduct().subscribe(function (res) {
                loading.dismiss();
                _this.product = res;
                _this.product.forEach(function (x) {
                    x.pin = 0;
                    x.total = 0;
                });
                console.table(_this.product);
            }, function (err) {
                loading.dismiss();
                console.log(err);
            });
        };
        var sett = this.setting.getallSettings();
        this.userref = sett.fkmemid;
        this.getproduct();
    }
    PinrequestPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad PinrequestPage");
    };
    PinrequestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: "page-pinrequest",template:/*ion-inline-start:"F:\Ankit_New\Personal\mlm\src\pages\pinrequest\pinrequest.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <ion-icon name="menu" menuToggle class=\'menu-icon\'></ion-icon>\n\n      ePIN Request\n\n    </ion-title>\n\n  </ion-navbar>\n\n  <!-- Filter-->\n\n  <ion-fab top right edge class="pin_menu">\n\n    <button ion-fab mini>\n\n      <ion-icon name="pricetag"></ion-icon>\n\n    </button>\n\n    <ion-fab-list>\n\n      <ul class="fab_list">\n\n        <li (click)="gotopindetail()"><a href="javascript:void(0)">\n\n            <ion-icon name="pricetag"></ion-icon>\n\n            <div class="clearfix"></div> PIN Details\n\n          </a></li>\n\n        <li>\n\n          <a href="javascript:void(0)">\n\n            <ion-icon name="pricetag"></ion-icon>\n\n            <div class="clearfix"></div> e-PIN Request\n\n          </a>\n\n        </li>\n\n        <li (click)="gotopintransafer()"><a href="javascript:void(0)">\n\n            <ion-icon name="pricetag"></ion-icon>\n\n            <div class="clearfix"></div> PIN Transfer\n\n          </a></li>\n\n        <li (click)="gotopinreport()">\n\n          <a href="javascript:void(0)">\n\n            <ion-icon name="pricetag"></ion-icon>\n\n            <div class="clearfix"></div> PIN Transfer Report\n\n          </a>\n\n        </li>\n\n      </ul>\n\n    </ion-fab-list>\n\n  </ion-fab>\n\n  <!-- /Filter-->\n\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n\n    <table>\n\n      <thead>\n\n        <tr>\n\n          <th>Plan</th>\n\n          <th>Amount</th>\n\n          <th>No. OF ePins</th>\n\n          <th>Total Amount</th>\n\n        </tr>\n\n      </thead>\n\n      <tbody>\n\n        <tr *ngFor="let item of product;let i=index; ">\n\n          <td>{{item.ProductName}}</td>\n\n          <td>{{item.ProductPrice}}</td>\n\n          <td><input (change)="pinchange(i)" type="number" ion-input [(ngModel)]="item.pin" /></td>\n\n          <td>{{item.total}}</td>\n\n        </tr>\n\n        <tr style="display:none">\n\n          <td>Plan B 4500</td>\n\n          <td>{{objepin.productB.price}}</td>\n\n          <td><input (change)="pinchange(\'B\')" ion-input [(ngModel)]="objepin.productB.pin" /></td>\n\n          <td>{{objepin.productB.total}}</td>\n\n        </tr>\n\n        <tr>\n\n          <td class="text-right" colspan="3"><strong>TOTAL &nbsp;</strong></td>\n\n          <td>{{total}}</td>\n\n        </tr>\n\n      </tbody>\n\n    </table>\n\n  </ion-card>\n\n  <ion-card>\n\n\n\n\n\n    <ion-item>\n\n      <ion-label>Payment Mode:</ion-label>\n\n      <ion-select (ionChange)="getmode()" interface="popover" placeholder="Select Payment Mode"\n\n        [(ngModel)]="objepin.pmode">\n\n        <ion-option value="Cheque">Cheque</ion-option>\n\n        <ion-option value="Cash">Cash</ion-option>\n\n        <ion-option value="BankersCheque">Bankers Cheque</ion-option>\n\n        <ion-option value="BankDeposit">Bank Deposit</ion-option>\n\n        <ion-option value="OnlineTransaction">Online Transaction</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <!-- condition Based -->\n\n    <ion-item>\n\n      <ion-label>Payment Amount:</ion-label>\n\n      <ion-input readonly [(ngModel)]="total" placeholder="0"></ion-input>\n\n    </ion-item>\n\n    <div *ngIf="! isCash">\n\n      <ion-item>\n\n        <ion-label class="lbl">Cheque/DD No/Bank Transaction No: </ion-label>\n\n\n\n      </ion-item>\n\n      <ion-item>\n\n\n\n        <ion-input [(ngModel)]="objepin.cdbtn" placeholder="Cheque/DD No/Bank Transaction No"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label class="lbl">Cheque/DD Date/Transaction Date: </ion-label>\n\n\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-datetime [(ngModel)]="objepin.cdtd" placeholder="Cheque/DD Date/Transaction Date"\n\n          displayFormat="DD/MM/YYYY">\n\n        </ion-datetime>\n\n        <!-- <ion-input [(ngModel)]="objepin.cdtd" placeholder="Cheque/DD Date/Transaction Date"></ion-input> -->\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label class="lbl">Bank Name: </ion-label>\n\n\n\n      </ion-item>\n\n      <ion-item>\n\n\n\n        <ion-input placeholder="Bank Name" [(ngModel)]="objepin.bank"></ion-input>\n\n      </ion-item>\n\n    </div>\n\n    <!-- condition Based END -->\n\n  </ion-card>\n\n  <ion-row>\n\n    <ion-col col-6>\n\n      <button ion-button (click)="epinrequest()">Submit</button>\n\n    </ion-col>\n\n    <ion-col col-6>\n\n      <button ion-button (click)="reset()">Reset</button>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-buttons>\n\n      <button ion-button>Contoso उजाला</button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"F:\Ankit_New\Personal\mlm\src\pages\pinrequest\pinrequest.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__providers_apiservice_apiservice__["a" /* ApiserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__providers_commonfunction_commonfunction__["a" /* CommonfunctionProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_settings_settings__["a" /* SettingsProvider */]])
    ], PinrequestPage);
    return PinrequestPage;
}());

//# sourceMappingURL=pinrequest.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_commonfunction_commonfunction__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_settings_settings__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewpackage_viewpackage__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_apiservice_apiservice__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the PlanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PlanPage = /** @class */ (function () {
    function PlanPage(events, setting, api, navCtrl, comn, navParams) {
        var _this = this;
        this.events = events;
        this.setting = setting;
        this.api = api;
        this.navCtrl = navCtrl;
        this.comn = comn;
        this.navParams = navParams;
        this.product = [];
        this.isloginType = "";
        this.fkid = "";
        this.requestplanA = function (item) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__viewpackage_viewpackage__["a" /* ViewpackagePage */], {
                plan: item
            });
        };
        this.requestplanB = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__viewpackage_viewpackage__["a" /* ViewpackagePage */], {
                plan: "B"
            });
        };
        this.getproduct = function () {
            var loading = _this.comn.presentLoadingDefault();
            loading.present();
            _this.api.getProduct().subscribe(function (res) {
                loading.dismiss();
                _this.product = res;
                console.table(_this.product);
            }, function (err) {
                loading.dismiss();
                console.log(err);
            });
        };
        this.getproduct();
        this.events.subscribe("isloginType", function (islogin) {
            console.log(islogin);
            _this.isloginType = islogin;
        });
        this.events.subscribe("userinfo", function (user) {
            if (_this.isloginType == "main") {
            }
            else {
                _this.fkid = user[0].fkid;
            }
        });
    }
    PlanPage.prototype.ionViewDidLoad = function () {
        var set = this.setting.getallSettings();
        this.isloginType = set.isloginType;
        if (this.isloginType !== "main") {
            this.fkid = set.guest[0].fkid;
        }
        console.log("ionViewDidLoad PlanPage");
    };
    PlanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
            selector: "page-plan",template:/*ion-inline-start:"F:\Ankit_New\Personal\mlm\src\pages\plan\plan.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <ion-icon name="menu" menuToggle class=\'menu-icon\'></ion-icon>\n\n      योजना (Plan)\n\n      <div class="logo"><img src="../../assets/images/contoso_natura_logo.png"></div>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n\n    <ol>\n\n      <li>Contoso Ujala सदस्यता दो तरह के किसी एक उत्पाद को खरीदकर ग्रहण की जा सकती है।</li>\n\n      <li>उपहार योजना सभी तरह के सदस्यों के लिए सामान है, चाहे वो कोई भी उपरोक्त उत्पाद को खरीद कर सदस्य बने हो।</li>\n\n      <li>प्रति नए सदस्य जोड़ने पर 50 बोनस अंक मिलेंगे।</li>\n\n      <li>उपहार योजना बोनस अंकों पर आधारित हैं। जितने बोनस अंक होंगे उसी के आधार पर उपहार दिया जायेगा।</li>\n\n    </ol>\n\n  </ion-card>\n\n  <div *ngFor="let item of product">\n\n    <button style="white-space:normal !important; word-wrap: break-word; word-break: normal;"\n\n      *ngIf="isloginType===\'main\'" ion-button>{{item.ProductName}}</button>\n\n    <button style="white-space:normal !important; word-wrap: break-word; word-break: normal;"\n\n      *ngIf="isloginType!==\'main\'" (click)="requestplanA(item)" ion-button>Click here to request <br />\n\n      {{item.ProductName}}</button>\n\n    <h2>{{item.Description}}</h2>\n\n    <ion-card>\n\n      <button ion-button>सदस्यता शुल्क- {{item.ProductPrice}}/-</button>\n\n\n\n    </ion-card>\n\n  </div>\n\n\n\n  <!-- <button *ngIf="isloginType==\'main\'" ion-button>PLAN B</button>\n\n  <button *ngIf="isloginType ==\'guest\'" (click)="requestplanB()" ion-button>Click to request PLAN B</button>\n\n  <h2>Solar Mini Home Light System</h2> -->\n\n  <!-- <ion-card>\n\n    <button ion-button>सदस्यता शुल्क- 4500/-</button>\n\n    <ol>\n\n      <li>Solar Battery - 20 AH (एक साल गारंटी)</li>\n\n      <li>Solar Panel 25 Watt – 1</li>\n\n      <li>Solar Magic Box with Mobile Charger – 1</li>\n\n      <li>Solar Bulb - 3 Watt (3 Pcs.)</li>\n\n      <li>Connecting wire and cables.</li>\n\n      <li>Free Installation</li>\n\n      <li>Transportation of product paid by member</li>\n\n    </ol>\n\n  </ion-card> -->\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-buttons>\n\n      <button ion-button>Contoso उजाला</button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"F:\Ankit_New\Personal\mlm\src\pages\plan\plan.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1__providers_settings_settings__["a" /* SettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_apiservice_apiservice__["a" /* ApiserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_commonfunction_commonfunction__["a" /* CommonfunctionProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* NavParams */]])
    ], PlanPage);
    return PlanPage;
}());

//# sourceMappingURL=plan.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PintransferreportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pintransfer_pintransfer__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pinrequest_pinrequest__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pindetails_pindetails__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_commonfunction_commonfunction__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_settings_settings__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_apiservice_apiservice__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_date_picker__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var PintransferreportPage = /** @class */ (function () {
    function PintransferreportPage(datePicker, api, setting, comn, navCtrl, navParams) {
        var _this = this;
        this.datePicker = datePicker;
        this.api = api;
        this.setting = setting;
        this.comn = comn;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.objpintransfer = {
            status: "Transfer",
            product: "",
            fdate: "",
            tdate: "",
            loginID: "",
            TOloginID: ""
        };
        this.result = [];
        this.sett = [];
        this.gotopindetail = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pindetails_pindetails__["a" /* PindetailsPage */]);
        };
        this.gotopinrequest = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__pinrequest_pinrequest__["a" /* PinrequestPage */]);
        };
        this.gotopintransfer = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__pintransfer_pintransfer__["a" /* PintransferPage */]);
        };
        this.reset = function () {
            _this.objpintransfer.status = "Transfer";
            _this.objpintransfer.product = "";
            _this.objpintransfer.fdate = "";
            _this.objpintransfer.tdate = "";
            _this.objpintransfer.loginID = "";
            _this.objpintransfer.TOloginID = "";
        };
        this.pinTransferReport = function () {
            if (_this.objpintransfer.fdate !== "" && _this.objpintransfer.tdate == "") {
                var alert_1 = _this.comn.createAlert("Alert !", "Please select valid date range.");
                alert_1.present();
                return;
            }
            else if (_this.objpintransfer.fdate == "" && _this.objpintransfer.tdate !== "") {
                var alert_2 = _this.comn.createAlert("Alert !", "Please select valid date range.");
                alert_2.present();
                return;
            }
            _this.result.length = 0;
            var loading = _this.comn.presentLoadingDefault();
            loading.present();
            _this.api.pintransferreport(_this.objpintransfer).subscribe(function (res) {
                loading.dismiss();
                if (res.length > 0) {
                    _this.result = res;
                }
                else {
                    var alert_3 = _this.comn.createAlert("Alert !", "No Record Found.");
                    alert_3.present();
                    _this.result.length = 0;
                }
            }, function (err) {
                loading.dismiss();
                console.log(err);
            });
        };
        this.showdate = function (type) {
            _this.datePicker.show({
                date: new Date(),
                mode: 'date',
                androidTheme: _this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
            }).then(function (date) {
                var dd = __WEBPACK_IMPORTED_MODULE_9_moment___default()(date).format("DD/MM/YYYY");
                if (type == 'TO') {
                    _this.objpintransfer.tdate = dd.toString();
                }
                else if (type == 'FROM') {
                    _this.objpintransfer.fdate = dd.toString();
                }
                // console.log('Got date: ', d);
            }, function (err) { return console.log('Error occurred while getting date: ', err); });
        };
        // this.sett = this.setting.getallSettings();
        // this.objpintransfer.loginID = this.sett.dashboard[0].LoginId;
        // console.log("ionViewDidLoad PintransferreportPage");
        // this.pinTransferReport();
    }
    PintransferreportPage.prototype.ionViewDidLoad = function () {
        this.sett = this.setting.getallSettings();
        this.objpintransfer.loginID = this.sett.dashboard[0].LoginId;
        console.log("ionViewDidLoad PintransferreportPage");
        this.pinTransferReport();
    };
    PintransferreportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["n" /* Component */])({
            selector: "page-pintransferreport",template:/*ion-inline-start:"F:\Ankit_New\Personal\mlm\src\pages\pintransferreport\pintransferreport.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <ion-icon name="menu" menuToggle class=\'menu-icon\'></ion-icon>\n\n      PIN Transfer Report\n\n    </ion-title>\n\n  </ion-navbar>\n\n  <!-- Filter-->\n\n  <ion-fab top right edge class="pin_menu">\n\n    <button ion-fab mini>\n\n      <ion-icon name="pricetag"></ion-icon>\n\n    </button>\n\n    <ion-fab-list>\n\n      <ul class="fab_list">\n\n        <li (click)="gotopindetail()"><a href="javascript:void(0)">\n\n            <ion-icon name="pricetag"></ion-icon>\n\n            <div class="clearfix"></div> PIN Details\n\n          </a></li>\n\n        <li (click)="gotopinrequest()">\n\n          <a href="javascript:void(0)">\n\n            <ion-icon name="pricetag"></ion-icon>\n\n            <div class="clearfix"></div> e-PIN Request\n\n          </a>\n\n        </li>\n\n        <li (click)="gotopintransfer()"><a href="javascript:void(0)">\n\n            <ion-icon name="pricetag"></ion-icon>\n\n            <div class="clearfix"></div> PIN Transfer\n\n          </a></li>\n\n        <li>\n\n          <a href="javascript:void(0)">\n\n            <ion-icon name="pricetag"></ion-icon>\n\n            <div class="clearfix"></div> PIN Transfer Report\n\n          </a>\n\n        </li>\n\n      </ul>\n\n    </ion-fab-list>\n\n  </ion-fab>\n\n  <!-- /Filter-->\n\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n\n    <ion-row>\n\n      <div class="float_wrapper" col-6>\n\n        <ion-item>\n\n          <!-- <ion-datetime [(ngModel)]="objpintransfer.fdate" placeholder="From Date" displayFormat="DD/MM/YYYY">\n\n          </ion-datetime> -->\n\n          <ion-input placeholder="From Date" readonly type="text" [(ngModel)]="objpintransfer.fdate"></ion-input>\n\n\n\n        </ion-item>\n\n        <ion-icon name="calendar" (click)=\'showdate("FROM")\' class="money date"></ion-icon>\n\n      </div>\n\n      <div class="float_wrapper" col-6>\n\n        <ion-item>\n\n          <!-- <ion-datetime [(ngModel)]="objpintransfer.tdate"  placeholder="To Date" displayFormat="DD/MM/YYYY">\n\n          </ion-datetime> -->\n\n          <ion-input placeholder="To Date" readonly type="text" [(ngModel)]="objpintransfer.tdate"></ion-input>\n\n        </ion-item>\n\n        <ion-icon (click)=\'showdate("TO")\' name="calendar" class="money date"></ion-icon>\n\n      </div>\n\n    </ion-row>\n\n    <ion-row>\n\n      <div class="float_wrapper" col-6>\n\n        <ion-item>\n\n          <ion-input [(ngModel)]="objpintransfer.loginID" readonly placeholder="User ID"></ion-input>\n\n        </ion-item>\n\n      </div>\n\n      <div class="float_wrapper" col-6>\n\n        <ion-item>\n\n          <ion-input [(ngModel)]="objpintransfer.TOloginID" placeholder="Transfer/Receive User Id"></ion-input>\n\n        </ion-item>\n\n      </div>\n\n    </ion-row>\n\n    <ion-row>\n\n      <div class="float_wrapper" col-6>\n\n        <ion-item>\n\n          <ion-select [(ngModel)]="objpintransfer.status" placeholder="Status">\n\n            <ion-option value="Tranfer">Tranfer</ion-option>\n\n            <ion-option value="Receive">Receive</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </div>\n\n      <div class="float_wrapper" col-6>\n\n        <ion-item>\n\n          <ion-select [(ngModel)]="objpintransfer.product" placeholder="Select Plan">\n\n            <ion-option value="0">All</ion-option>\n\n            <ion-option value="1">Plan A 8500</ion-option>\n\n            <ion-option value="2">Plan B 4500</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </div>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button (click)="pinTransferReport()">Get Details</button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button (click)="reset()">Reset</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n  <ion-card>\n\n    <h3 *ngIf="result.length==0">No Record Found</h3>\n\n    <table *ngIf="result.length>0">\n\n      <thead>\n\n        <tr>\n\n          <th>Sr. No.</th>\n\n          <th>From</th>\n\n          <th>To</th>\n\n          <th>Product</th>\n\n          <th>Total Pin</th>\n\n          <th>Date</th>\n\n        </tr>\n\n      </thead>\n\n      <tbody>\n\n        <tr *ngFor="let item of result; let i=index">\n\n          <td>{{i+1}}</td>\n\n          <td>{{item.FromMember}}</td>\n\n          <td>{{item.ToMember}}</td>\n\n          <td>{{item.ProductName}}</td>\n\n          <td>{{item.NoOfPins}}</td>\n\n          <td>{{item.TransferDate}}</td>\n\n        </tr>\n\n      </tbody>\n\n    </table>\n\n  </ion-card>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-buttons>\n\n      <button ion-button>Contoso उजाला</button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"F:\Ankit_New\Personal\mlm\src\pages\pintransferreport\pintransferreport.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__ionic_native_date_picker__["a" /* DatePicker */],
            __WEBPACK_IMPORTED_MODULE_5__providers_apiservice_apiservice__["a" /* ApiserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_settings_settings__["a" /* SettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_commonfunction_commonfunction__["a" /* CommonfunctionProvider */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["i" /* NavParams */]])
    ], PintransferreportPage);
    return PintransferreportPage;
}());

;
//# sourceMappingURL=pintransferreport.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PintransferPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pinrequest_pinrequest__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pintransferreport_pintransferreport__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pindetails_pindetails__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_commonfunction_commonfunction__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_apiservice_apiservice__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_settings_settings__ = __webpack_require__(15);
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
 * Generated class for the PintransferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PintransferPage = /** @class */ (function () {
    function PintransferPage(setting, api, navCtrl, navParams, comn) {
        var _this = this;
        this.setting = setting;
        this.api = api;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.comn = comn;
        this.sett = "";
        this.objpinmodel = {
            totalpins: "0",
            fkid: "",
            act: "",
            tid: "",
            fcname: "",
            pt: "",
            loginid: "",
            trnsfrdetail: {
                FK_MemId: "",
                DisplayName: "",
                TemPermanent: ""
            }
        };
        this.gotopindetail = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pindetails_pindetails__["a" /* PindetailsPage */]);
        };
        this.gotopinrequest = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__pinrequest_pinrequest__["a" /* PinrequestPage */]);
        };
        this.gotopinreport = function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__pintransferreport_pintransferreport__["a" /* PintransferreportPage */]);
        };
        this.countpin = function (pid) {
            _this.objpinmodel.act = pid;
            console.table(_this.objpinmodel);
            var loading = _this.comn.presentLoadingDefault();
            loading.present();
            var obj = {
                pid: pid,
                fkid: _this.objpinmodel.fkid
            };
            console.table(obj);
            _this.api.countPins(obj).subscribe(function (res) {
                loading.dismiss();
                _this.objpinmodel.totalpins = res;
            }, function (error) {
                loading.dismiss();
                console.log(error);
            });
        };
        this.validatepinid = function () {
            var loading = _this.comn.presentLoadingDefault();
            loading.present();
            _this.api.validatepinid(_this.objpinmodel.loginid).subscribe(function (res) {
                loading.dismiss();
                if (res.length > 0) {
                    _this.objpinmodel.trnsfrdetail.FK_MemId = res[0].FK_MemId;
                    _this.objpinmodel.trnsfrdetail.DisplayName = res[0].DisplayName;
                    _this.objpinmodel.trnsfrdetail.TemPermanent = res[0].TemPermanent;
                }
                else {
                    var alert_1 = _this.comn.createAlert("Error!", "Please Enter Valid LoginID.");
                    alert_1.present();
                }
            }, function (error) {
                loading.dismiss();
                console.log(error);
            });
        };
        this.transferpin = function () {
            if (_this.objpinmodel.act !== "") {
                if (_this.objpinmodel.fkid !== "") {
                    if (_this.objpinmodel.pt !== "") {
                        if (Number(_this.objpinmodel.pt) <= Number(_this.objpinmodel.totalpins)) {
                            var obj = {
                                fkid: _this.objpinmodel.fkid,
                                tmid: _this.objpinmodel.trnsfrdetail.FK_MemId,
                                pid: _this.objpinmodel.act,
                                pin: _this.objpinmodel.pt
                            };
                            _this.api.transferpin(obj).subscribe(function (res) {
                                if (res == 1) {
                                    var alert_2 = _this.comn.createAlert("Success !", "Pin Transfer Successfully.");
                                    alert_2.present();
                                }
                                else {
                                    var alert_3 = _this.comn.createAlert("Error!", "Error Occured. Contact to admin");
                                    alert_3.present();
                                }
                            }, function (error) {
                                console.log(error);
                            });
                        }
                        else {
                            var alert_4 = _this.comn.createAlert("Alert !", "Please Enter Valid  Number of Pin's. ");
                            alert_4.present();
                        }
                    }
                    else {
                        var alert_5 = _this.comn.createAlert("Alert !", "Please Enter Number of Pin's. ");
                        alert_5.present();
                    }
                }
                else {
                    var alert_6 = _this.comn.createAlert("Alert !", "Please Enter Transfer LoginID. ");
                    alert_6.present();
                }
            }
            else {
                var alert_7 = _this.comn.createAlert("Alert !", "Please Select a Product. ");
                alert_7.present();
            }
        };
        this.reset = function () {
            _this.navCtrl.pop();
        };
        //   this.countpin();
        //this.sett = this.setting.getallSettings();
    }
    PintransferPage.prototype.ionViewDidLoad = function () {
        this.sett = this.setting.getallSettings();
        this.objpinmodel.fkid = this.sett.dashboard[0].FK_MemId;
        console.log("ionViewDidLoad PintransferPage");
    };
    PintransferPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["n" /* Component */])({
            selector: "page-pintransfer",template:/*ion-inline-start:"F:\Ankit_New\Personal\mlm\src\pages\pintransfer\pintransfer.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <ion-icon name="menu" menuToggle class=\'menu-icon\'></ion-icon>\n\n      PIN Transfer\n\n    </ion-title>\n\n  </ion-navbar>\n\n  <!-- Filter-->\n\n  <ion-fab top right edge class="pin_menu">\n\n    <button ion-fab mini>\n\n      <ion-icon name="pricetag"></ion-icon>\n\n    </button>\n\n    <ion-fab-list>\n\n      <ul class="fab_list">\n\n        <li (click)="gotopindetail()"><a href="javascript:void(0)">\n\n            <ion-icon name="pricetag"></ion-icon>\n\n            <div class="clearfix"></div> PIN Details\n\n          </a></li>\n\n        <li (click)="gotopinrequest()">\n\n          <a href="javascript:void(0)">\n\n            <ion-icon name="pricetag"></ion-icon>\n\n            <div class="clearfix"></div> e-PIN Request\n\n          </a>\n\n        </li>\n\n        <li><a href="javascript:void(0)">\n\n            <ion-icon name="pricetag"></ion-icon>\n\n            <div class="clearfix"></div> PIN Transfer\n\n          </a></li>\n\n        <li (click)="gotopinreport()">\n\n          <a href="javascript:void(0)">\n\n            <ion-icon name="pricetag"></ion-icon>\n\n            <div class="clearfix"></div> PIN Transfer Report\n\n          </a>\n\n        </li>\n\n      </ul>\n\n    </ion-fab-list>\n\n  </ion-fab>\n\n  <!-- /Filter-->\n\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n\n    <ion-item>\n\n      <ion-label>*Activation Code Type:</ion-label>\n\n      <ion-select [(ngModel)]="act" placeholder="Select Plan">\n\n        <ion-option (ionSelect)="countpin(0)" value="0">All</ion-option>\n\n        <ion-option (ionSelect)="countpin(1)" value="1">Plan A 8500</ion-option>\n\n        <ion-option (ionSelect)="countpin(2)" value="2">Plan B 4500</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>*Transfer to ID:</ion-label>\n\n      <ion-input (change)=\'validatepinid()\' [(ngModel)]="objpinmodel.loginid" loginid placeholder="Enter Login ID">\n\n      </ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Available ePins: <strong>{{objpinmodel.totalpins}}</strong></ion-label>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Transfer to Franchise Name: <strong>{{ objpinmodel.trnsfrdetail.DisplayName}}</strong></ion-label>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>No. of ePins:</ion-label>\n\n      <ion-input [(ngModel)]="objpinmodel.pt" placeholder="0"></ion-input>\n\n    </ion-item>\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button (click)="transferpin()">Transfer</button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button (click)="reset()">Cancle</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-buttons>\n\n      <button ion-button>Contoso उजाला</button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"F:\Ankit_New\Personal\mlm\src\pages\pintransfer\pintransfer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__providers_settings_settings__["a" /* SettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_apiservice_apiservice__["a" /* ApiserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_commonfunction_commonfunction__["a" /* CommonfunctionProvider */]])
    ], PintransferPage);
    return PintransferPage;
}());

//# sourceMappingURL=pintransfer.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuestdashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_apiservice_apiservice__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_interval__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_interval__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMapTo__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMapTo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMapTo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_commonfunction_commonfunction__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_settings_settings__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var GuestdashboardPage = /** @class */ (function () {
    function GuestdashboardPage(navCtrl, comn, api, navParams, setting) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.comn = comn;
        this.api = api;
        this.navParams = navParams;
        this.setting = setting;
        this.Product = [];
        this.sub = "";
        /* Live Reload Product  Begin */
        this.productTrack = function () {
            var set = _this.setting.getallSettings();
            //set.guest[0].fkid
            _this.api.guestProductTrack(set.guest[0].fkid).subscribe(function (res) {
                _this.Product = res;
                console.log("************* PRoduct Deatail ***************");
                console.table(_this.Product);
            }, function (err) {
                console.log(err);
            });
        };
        this.sub = __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].interval(1000).subscribe(function (val) {
            _this.productTrack();
            console.log("Guest Dasboard Called ");
        });
    }
    GuestdashboardPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad GuestdashboardPage");
    };
    GuestdashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: "page-guestdashboard",template:/*ion-inline-start:"F:\Ankit_New\Personal\mlm\src\pages\guestdashboard\guestdashboard.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <ion-icon name="menu" menuToggle class=\'menu-icon\'></ion-icon>\n\n      Dashboard\n\n      <div class="logo"><img src="../../assets/images/contoso_natura_logo.png"></div>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="has-header has-footer">\n\n  <ion-row>\n\n    <ion-col col-12>\n\n      <ion-card>\n\n        <h1>Welcome to contoso Ujala Family </h1>\n\n      </ion-card>\n\n    </ion-col>\n\n\n\n\n\n  </ion-row>\n\n  <ion-row *ngIf="Product.length>0">\n\n    <ion-col col-12>\n\n      <ion-card>\n\n        <p>Product Track Information</p>\n\n        <br />\n\n        <table>\n\n          <thead>\n\n            <tr>\n\n              <th>Sr. No.</th>\n\n              <th>Product</th>\n\n              <th>Quantity</th>\n\n              <th>Payment</th>\n\n              <th>Address</th>\n\n              <th>Delivered By</th>\n\n            </tr>\n\n          </thead>\n\n          <tbody>\n\n            <tr *ngFor="let item of Product;let i=index">\n\n              <td>{{i+1}}</td>\n\n              <td>{{item.ProductName}}</td>\n\n              <td>{{item.Qty}}</td>\n\n\n\n              <td>{{item.PaymentMode}}</td>\n\n              <td>{{item.DeliveredTo}} : {{item.Address}} , {{item.PinCode}}</td>\n\n              <td> {{item.deliveryboyMobileNo}}</td>\n\n            </tr>\n\n          </tbody>\n\n        </table>\n\n      </ion-card>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-buttons>\n\n      <button ion-button>Contoso उजाला</button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"F:\Ankit_New\Personal\mlm\src\pages\guestdashboard\guestdashboard.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_commonfunction_commonfunction__["a" /* CommonfunctionProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_apiservice_apiservice__["a" /* ApiserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_8__providers_settings_settings__["a" /* SettingsProvider */]])
    ], GuestdashboardPage);
    return GuestdashboardPage;
}());

//# sourceMappingURL=guestdashboard.js.map

/***/ })

},[378]);
//# sourceMappingURL=main.js.map