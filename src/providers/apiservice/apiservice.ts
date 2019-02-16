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

dologin=(objlogin)=>{
return this._http.post(this.url+`UserLogin/Login/?loginId=${objlogin.user}&password=${objlogin.pass}`,{});
}
getReward/* Reward list */=(fkid)=>{  
  return this._http.get(this.url+`Rewards/MemberRewards/?MemId=${fkid}`,)
}

}
