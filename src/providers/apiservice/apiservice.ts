import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ApiserviceProvider {
  readonly url = "http://api.contosonatura.com/api/";
  constructor(public _http: HttpClient) {
    console.log("Hello ApiserviceProvider Provider");
  }

  dologin /* Member Login */ = objlogin => {
    return this._http.post(
      this.url +
        `UserLogin/Login/?loginId=${objlogin.user}&password=${objlogin.pass}`,
      {}
    );
  };
  getReward /* Reward list */ = fkid => {
    return this._http.post(
      this.url + `Rewards/MemberRewards/?MemId=${fkid}`,
      {}
    );
  };
  getstates = () => {
    return this._http.post(this.url + `Registration/StateMaster/`, {});
  };

  getCitybyStID = stid => {
    return this._http.post(
      this.url + `Registration/CityMaster/?StateId=${stid}`,
      {}
    );
  };

  validatesponser = loginid => {
    return this._http.post(
      this.url + `Registration/ValidateUser/?loginID=${loginid}`,
      {}
    );
  };
  regmember = obj => {
    let murl = this.url + `Registration/MemberRegistration/?` + obj;
    console.log(murl);
    return this._http.post(murl, {});
  };

  validateepin = epin => {
    return this._http.post(
      this.url + `Registration/ValidateEpin/?ePinNo=${epin}`,
      {}
    );
  };
  getProduct = () => {
    return this._http.post(this.url + `ProductDetails/ProductMaster/`, {});
  };
  getDownline = (obj: any) => {
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
}
