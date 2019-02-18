import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiserviceProvider {
readonly url='http://api.contosonatura.com/api/';
  constructor(public _http: HttpClient) {
    console.log('Hello ApiserviceProvider Provider');
  }

dologin /* Member Login */=(objlogin)=>{
return this._http.post(this.url+`UserLogin/Login/?loginId=${objlogin.user}&password=${objlogin.pass}`,{});
}
getReward/* Reward list */=(fkid)=>{  
  return this._http.post(this.url+`Rewards/MemberRewards/?MemId=${fkid}`,{})
}
getstates=()=>{
  return this._http.post(this.url+`Registration/StateMaster/`,{})
}

getCitybyStID=(stid)=>{
  return this._http.post(this.url+`Registration/CityMaster/?StateId=${stid}`,{})
}

validatesponser=(loginid)=>{  
  return this._http.post(this.url+`Registration/ValidateUser/?loginID=${loginid}`,{})
}
regmember=(obj)=>{
  return this._http.post(this.url+`Registration/MemberRegistration/ `,obj)
}

validateepin=(epin)=>{
  return this._http.post(this.url+`Registration//ValidateEpin/?ePinNo=${epin}`,{})
}

}
