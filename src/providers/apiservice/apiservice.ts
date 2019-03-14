import { SettingsProvider } from "./../settings/settings";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ApiserviceProvider {
  settingsconfig: any;
  readonly url = "http://api.contosonatura.com/api/";
  constructor(public _http: HttpClient, public settings: SettingsProvider) {
    console.log("Hello ApiserviceProvider Provider");
  }
  refreshSettings() {
    this.settingsconfig = this.settings.getallSettings();

    console.log("********* Stting Log *******");
    console.table(this.settingsconfig);
  }
  dologin /* Member Login */ = objlogin => {
    this.refreshSettings();
    return this._http.post(
      this.url +
        `UserLogin/Login/?loginId=${objlogin.user}&password=${objlogin.pass}`,
      {}
    );
  };
  getReward /* Reward list */ = fkid => {
    this.refreshSettings();
    return this._http.post(
      this.url + `Rewards/MemberRewards/?MemId=${fkid}`,
      {}
    );
  };
  getstates = () => {
    return this._http.post(this.url + `Registration/StateMaster/`, {});
  };

  getCitybyStID = stid => {
    this.refreshSettings();
    return this._http.post(
      this.url + `Registration/CityMaster/?StateId=${stid}`,
      {}
    );
  };

  validatesponser = loginid => {
    this.refreshSettings();
    return this._http.post(
      this.url + `Registration/ValidateUser/?loginID=${loginid}`,
      {}
    );
  };
  regmember = obj => {
    this.refreshSettings();
    let murl = this.url + `Registration/MemberRegistration/?` + obj;
    console.log(murl);
    return this._http.post(murl, {});
  };

  validateepin = epin => {
    this.refreshSettings();
    return this._http.post(
      this.url + `Registration/ValidateEpin/?ePinNo=${epin}`,
      {}
    );
  };
  getProduct = () => {
    this.refreshSettings();
    return this._http.post(this.url + `ProductDetails/ProductMaster/`, {});
  };
  getDownline = (obj: any) => {
    this.refreshSettings();
    return this._http.post(
      this.url +
        `Registration/AllDownLine/?fromDate=${obj.fdate}&toDate=${
          obj.tdate
        }&loginId=${obj.loginId}&status=${obj.status}&fK_ProductID=${
          obj.Fkpid
        }`,
      {}
    );
  };
  chanagepassword = obj => {
    this.refreshSettings();
    return this._http.post(
      this.url +
        `UserLogin/ChangePassword/?loginId=${obj.LoginID}&oldPassword=${
          obj.oldPassword
        }&newPassword=${obj.newPassword}&updatedBy=${obj.fkid}`,
      {}
    );
  };
  GuestRegistration = objguest => {
    return this._http.post(
      this.url +
        `GuestRegistration/TempRegistration/?Name=${objguest.name}&mobile=${
          objguest.password
        }`,
      {}
    );
  };

  countPins = objpincount => {
    return this._http.post(
      this.url +
        `ProductDetails/GetTotalEpin/?MemId=${objpincount.fkid}&ProductId=${
          objpincount.pid
        }`,
      {}
    );
  };
  validatepinid = loginid => {
    return this._http.post(
      this.url + `Registration/ValidateUser/?loginID=${loginid}`,
      {}
    );
  };
  transferpin = objmodelpin => {
    return this._http.post(
      this.url +
        `ProductDetails/TransferEpin/?MemId=${objmodelpin.fkid}&ToMemId=${
          objmodelpin.tmid
        }&ProductId=${objmodelpin.pid}&noOfePin=${objmodelpin.pin}`,
      {}
    );
  };
  pintransferreport = (obj: any) => {
    let furl = `ProductDetails/TransferEpinDetails/?LoginId=${
      obj.loginID
    }&toLoginId=${obj.TOloginID}&status=${obj.status}&fromDate=${
      obj.fdate
    }&toDate=${obj.tdate}&ProductId=${obj.product}`;
    console.log("report" + furl);
    return this._http.post(this.url + furl, {});
  };

  epindetail = (objdetail: any) => {
    let furl = `ProductDetails/ProductDetails/?MemId=${
      objdetail.fkid
    }&ProductId=${objdetail.pid}&isRegistered=${objdetail.pin}`;
    console.log("epindetail" + furl);
    return this._http.post(this.url + furl, {});
  };
 
  redeem /** Redeem skip rewards */= (obj)=>{
    let furl = `Rewards/UpdateRewardStatus/?MemId=${obj.fkid}&SetRewardId=1&action=${obj.rewardstatus}`;    
    return this._http.post(this.url + furl, {});
  }

}
