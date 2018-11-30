import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { apiDevEndpoints } from '../../environments/api.dev.endpoints';
import { apiProdEndpoints } from '../../environments/api.prod.endpoints';

@Injectable()
export class ServiceEndpoints {
    apiEndPoints;

    constructor(){
        console.log('service endpoints ctor called');
        if (environment.production) {
            this.apiEndPoints = apiProdEndpoints;
        }
        else {
            this.apiEndPoints = apiDevEndpoints;
        }
        //console.log(this.apiEndPoints);
    }

    getEndpoint(name: string){
        return this.apiEndPoints.filter(function(data){
            return data.name == name;
        });
    }


}

