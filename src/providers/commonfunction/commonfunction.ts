import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from 'ionic-angular';
import moment from 'moment';
//import moment from 'moment';
/*
  Generated class for the CommonfunctionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommonfunctionProvider {
	commonSettings: any;
	isMissed: Boolean = false;
	constructor(public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
		console.log('Hello CommonfunctionsProvider Provider');
	}

	createAlert(title, subtitle) {
		let alert = this.alertCtrl.create({
			title: title,
			subTitle: subtitle,
			buttons: ['OK']
		});
		return alert;
	}

	presentLoadingDefault() {
		let loading = this.loadingCtrl.create({
			content: 'Please wait...'
		});
		return loading;
	}

	syncLoadingDefault() {
		let loading = this.loadingCtrl.create({
			content: 'Please wait, Synchronizing Data....'
		});
		return loading;
	}

	date_format(date, timeZoneOffset, format) {
		var formattedDate = '';
		timeZoneOffset = -timeZoneOffset;
		if (date) {
			var todaysDate = moment().format("MM-DD-YYYY");
			var todayDateTime = moment().format("MM-DD-YYYY hh:mmA");
			var givenDate = moment(date).format("MM-DD-YYYY");
			var givenDateTime = moment(date).format("MM-DD-YYYY hh:mmA");

			if (todaysDate == givenDate) {
				if (format == 'MMM DD, YYYY') {
					formattedDate = timeZoneOffset ? 'Today' : moment(date).format("hh:mm A");
				} else if (format == 'hh:mm A') {
					formattedDate = timeZoneOffset ? moment(date).zone(timeZoneOffset).format("hh:mm A") : moment(date).format("hh:mm A");
				} else {
					formattedDate = timeZoneOffset ? 'Today - ' + moment(date).zone(timeZoneOffset).format("hh:mm A") : moment(date).format("hh:mm A");
				}
			}
			else {
				if (format == 'MMM DD, YYYY') {
					formattedDate = timeZoneOffset ? moment(date).zone(timeZoneOffset).format("MMM DD, YYYY") : moment(date).format("MMM DD, YYYY");
				} else if (format == 'hh:mm A') {
					formattedDate = timeZoneOffset ? moment(date).zone(timeZoneOffset).format("hh:mm A") : moment(date).format("hh:mm A");
				} else {
					formattedDate = timeZoneOffset ? moment(date).zone(timeZoneOffset).format("MMM DD, YYYY hh:mm A") : moment(date).format("MMM DD, YYYY hh:mm A");
				}
			}
			return formattedDate;
		}
		else {
			return formattedDate;
		}
	}

	b64toBlob(b64Data) {
		let contentType = b64Data.split(',')[0].split(':')[1].split(';')[0] || '';
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
	}

	presentLoadingForSpeak() {
		let loading = this.loadingCtrl.create({
			content: 'Please speak...'
		});
		return loading;
	}
	dataURItoBlob(dataURI) {

		// convert base64/URLEncoded data component to raw binary data held in a string
		var byteString = atob(dataURI.split(',')[1]);
		var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

		var ab = new ArrayBuffer(byteString.length);
		var ia = new Uint8Array(ab);
		for (var i = 0; i < byteString.length; i++) {
			ia[i] = byteString.charCodeAt(i);
		}

		var bb = new Blob([ab], {
			"type": "image/jpeg"
		});
		return bb;
	}

	dataURItoBlobDocuments(dataURI) {

		let contentType = dataURI.split(',')[0].split(':')[1].split(';')[0] || '';
		console.log(contentType);
		
		// convert base64/URLEncoded data component to raw binary data held in a string
		var byteString = atob(dataURI.split(',')[1]);
		var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

		var ab = new ArrayBuffer(byteString.length);
		var ia = new Uint8Array(ab);
		for (var i = 0; i < byteString.length; i++) {
			ia[i] = byteString.charCodeAt(i);
		}

		var bb = new Blob([ab], {
			"type": contentType
		});
		return bb;
	}

	dataURItoBlobVideo(dataURI) {
		let contentType = dataURI.split(',')[0].split(':')[1].split(';')[0] || '';
		console.log(contentType);
		// convert base64/URLEncoded data component to raw binary data held in a string
		var byteString = atob(dataURI.split(',')[1]);
		var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

		var ab = new ArrayBuffer(byteString.length);
		var ia = new Uint8Array(ab);
		for (var i = 0; i < byteString.length; i++) {
			ia[i] = byteString.charCodeAt(i);
		}

		var bb = new Blob([ab], {
			"type": contentType
		});
		return bb;
	}
}
