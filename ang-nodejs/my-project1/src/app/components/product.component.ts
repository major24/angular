import { Component } from '@angular/core';
import { Injectable } from '@angular/core';

import { VehicleService } from '../services/vehicle.service';

@Injectable()
@Component({
  template:`
    <h2>Product Page</h2>
    <p>{{title}}</p>
  `,
    providers:[VehicleService]
})

export class ProductComponent {
    title = 'products';
    posts: Post;
    vehicles: Vehicle;
    configs;

    constructor(private vehicleService: VehicleService){
        // get http data
        /*this.vehicleService.getConfiguration()
            .subscribe(
            (res) => {
                this.configs = res;
                console.log("after reading");
                console.log(this.configs);
                //console.log(this.configs.SecurityService);
                //console.log(this.configs.CacheService);
            },
            (error) => console.log("error : " + error),
            () => console.log('Error in GetApplication in Login : ' + Error)
        );*/

        // test get data
        console.log('testing get data from vehicle service via env variables..');
        this.getVehicles();
    }

    getVehicles(){
        this.vehicleService.getVehicles()
                .subscribe(vehicles => {
                    this.vehicles = vehicles;
                    console.log('data=');
                    console.log(this.vehicles);
                });
    }


}



interface Post {
    id: number;
    title: string;
    body:string;
}

interface Vehicle {
    id: number;
    brand: string;
}