import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import { Headers } from '@angular/http';
//import { RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import xml2js from 'xml2js';


@Injectable()
export class WeatherProvider {
  public xmlItems : any;
  apiKey = '89e15931434731aefdaa04920ec60e44';
  url;
  options;

  constructor(public http: Http) {

    //let headers = new Headers({'Content-Type': 'application/json'});  
    //headers.append('x-apiKey','89e15931434731aefdaa04920ec60e44')
    //this.options = new RequestOptions({headers: headers});

    console.log('Hello WeatherProvider Provider');
    this.url= 'https://weather-qa.api.aero/api/weather/v1/combined';
  }
   getWeather(city){
      //return this.http.get(this.url+'/'+city+'temperatureScale=F&duration=7&lengthUnit=K',this.options).map(res => res.json());

      //return this.http.get('https://weather-qa.api.aero/weather/v1/combined/'+city+'?temperatureScale=F&duration=7&lengthUnit=K').map(res => res.json());

      //Expedia is On
      return this.http.get('https://apim.expedia.com/x/cars/search?pickupdate=2017-10-23T10:00&dropoffdate=2017-10-28T16:30&pickuplocation=LAX&dropofflocation=LAX&sort=price&limit=10&key=531bd696-5113-469c-8086-39073fe89517').map(res => {
        xml2js.parseString( res.text(), function (err, result) {
        console.dir(JSON.stringify(result)); // Prints JSON object!
        return result;
   });
   return res;
});

      //https://apim.expedia.com/x/cars/search?pickupdate=2017-10-22T10:00&dropoffdate=2017-10-28T16:30&pickuplocation=LAX&dropofflocation=LAX&sort=price&limit=10&key=531bd696-5113-469c-8086-39073fe89517


      // Amadeus is ON
      //return this.http.get('https://api.sandbox.amadeus.com/v1.2/airports/autocomplete?apikey=vq1hyuxKmgUYPlhVR6KLKjwY7BM9LN4G&term=Roch&country=US&all_airports=false').map(res => res.json());
      //https://weather-qa.api.aero/weather/v1/combined/SIN?temperatureScale=F&duration=7&lengthUnit=K
    }

}
