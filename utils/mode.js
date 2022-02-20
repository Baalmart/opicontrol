class DrivingControl {
    /**
     * 
     * handle all the behaviours of the car
     * in various driving modes initiated by an actor
     */
    constructor(speed, power, weight, steering, suspension) {
        this.speed = speed;
        this.power = power;
        this.weight = weight;
        this.steering = steering;
        this.suspension = suspension;
    }
    drive() {
        /**
         * This method handles all the functionality
         * for moving/accelerating the vehicle
         */
        console.log(`the driving speed is now ${this.speed}`)
        console.log(`the driving power is now ${this.speed}`)
        console.log(`the driving weight is now ${this.speed}`)
        console.log(`the steering is now ${this.steering}`)
        console.log(`the suspension is now ${this.suspension}`)
    }

    steer() {
        /**
         * This method handles all the functionality
         * behind the steering wheel
         */

    }

    brake() {
        /**
         * This method handles all the functionality
         * behind the braking system
         */

    }
}


class Eco extends DrivingControl {
    /**
     * for Eco mode:
     *  - the speed/acceleration is low
     *  - engine power will increase slowly
     */
    constructor(speed, power, weight, steering, suspension) {
        super(speed, power, weight, steering, suspension)
    }
}

class Sport extends DrivingControl {
    /**
     * for Eco mode:
     *  - the speed/acceleration is high
     *  - engine power will increase relatively fast
     */
    constructor(speed, power, weight, steering, suspension) {
        super(speed, power, weight, steering, suspension)
    }

}

class OffRoad extends DrivingControl {
    /**
     * for Eco mode:
     *  - the speed/acceleration is low
     *  - engine power will increase relatively slowly
     */
    constructor(speed, power, weight, steering, suspension) {
        super(speed, power, weight, steering, suspension)
    }

}


/**
 * drive in Sport mode
 */
let sportMode = new Sport(100, 300, 10, 30, 42)
sportMode.drive()

/**
 * drive in OffRoad mode
 */
let offRoadMode = new OffRoad(20, 30, 10, 30, 42)
offRoadMode.drive()

/**
 * drive in Eco mode
 */
let ecoMode = new Eco(10, 20, 10, 30, 42)
ecoMode.drive()