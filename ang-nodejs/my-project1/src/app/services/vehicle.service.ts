import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { ServiceEndpoints } from '../services/service.endpoints';

@Injectable()
export class VehicleService {

    constructor(private http: Http, private serviceEndpoints: ServiceEndpoints){
        console.log('vehicle service ctor called');
        //console.log(serviceEndpoints.apiEndPoints);
        //console.log(serviceEndpoints.getEndpoint('get-vehicles'));
        //var endPoint = serviceEndpoints.getEndpoint('get-customers');
        //console.log(endPoint[0].options.url + '::' + endPoint[0].options.port);
    }

    getVehicles(){
        //return this.http.get('https://jsonplaceholder.typicode.com/posts')
          //         .map(res => res.json());
          // read from api call at 3002
        // return this.http.get('/api/vehicles')
          //      .map(res => res.json());
        
          // get data based on environment..
        var endPoint = this.serviceEndpoints.getEndpoint('get-vehicles');
        var url = endPoint[0].options.url;
        console.log('accessing url: ' + url);
        
        return this.http.get(url)
                .map(res => res.json());
    }

    //getConfiguration = (): Observable<Response> => {
      //  console.log("In getConfiguration of ConfigurationService");
        //return this.http.get('assets/vehicle.mockdata.json').map(res => res.json());
    //}

}