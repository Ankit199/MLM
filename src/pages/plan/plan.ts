import { ApiserviceProvider } from "./../../providers/apiservice/apiservice";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the PlanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-plan",
  templateUrl: "plan.html"
})
export class PlanPage {
  product: any = [];
  constructor(
    public api: ApiserviceProvider,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.getproduct();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad PlanPage");
  }

  getproduct = () => {
    this.api.getProduct().subscribe(
      (res: any) => {
        this.product = res;
        console.table(this.product);
      },
      err => {
        console.log(err);
      }
    );
  };
}
