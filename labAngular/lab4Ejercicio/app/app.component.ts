import { Component } from '@angular/core';

export class Ride {
    units: number;
    festives: number;
    airport: number;
    app: number;
    default: number;
}

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/product.html'
})
export class AppComponent {
    title = "Mi producto";
    ride: Ride = {
        units: 50,
        festives: 0,
        airport: 0,
        app: 0,
        default: 4100
    }

    onSelectFest(ride: Ride){
        this.ride.festives = 1900;
    }
    onSelectAir(ride: Ride){
        this.ride.airport = 3900;
    }
    onSelectApp(ride: Ride){
        this.ride.app= 700;
    }



}

