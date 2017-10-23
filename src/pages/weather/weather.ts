import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { WeatherProvider } from '../../providers/weather/weather';

import xml2js from 'xml2js';


@IonicPage()
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
})
export class WeatherPage {
  weather:any;
  jsonWeather:any;
  location:{
    city:string
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private weatherProvider:WeatherProvider) {
    

  }

  ionViewWillEnter(){
    console.log('ionViewDidLoad WeatherPage');
    this.location = {
      city:'SIN'
    }
   this.weatherProvider.getWeather(this.location.city).subscribe(weather => {
  //console.log(weather);
  this.jsonWeather =xml2js.parseString( weather.text(), function (err, result) {
    console.dir("json is "+JSON.stringify(result)); // Prints JSON object!
    return result;
});
  //this.weather = weather._body;
  console.log(this.jsonWeather);
});

  }


 // ionViewDidLoad() {
  //  console.log('ionViewDidLoad WeatherPage');
  //}

}
