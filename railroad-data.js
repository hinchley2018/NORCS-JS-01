//https://digitalskills.instructure.com/courses/2863/pages/data-extract-5-dot-2-1?module_item_id=348214
let railroad_cars = 
[
    {"type": "gondola", "quantity": 7,"insured": true, "operational":true, "pricePer": 3800},
    {"type": "stockCar", "quantity": 1,"insured": true, "operational":false, "pricePer": 6500}, //non-op //exp
    {"type": "locomotive", "quantity": 5,"insured": false, "operational":false, "pricePer": 2875}, //non-op //non-insured
    {"type": "cattleCar", "quantity": 6,"insured": false, "operational":false, "pricePer": 7500},//non-op //non-insured //exp
    {"type": "boxCar", "quantity": 8,"insured": true, "operational":true, "pricePer": 4157},
    {"type": "tankCar", "quantity": 3,"insured": true, "operational":true, "pricePer": 7200}, //exp
]

//append to this if non-operational
let non_operational_vehicles = []
for (let index = 0; index < railroad_cars.length; index++) {
    let rr_car = railroad_cars[index];
    console.log("rr_car I'm looking at", rr_car)
    if(!rr_car.operational){//short-hand for rr_car.operation !== true
        non_operational_vehicles.push(rr_car)
    }
}

console.log("non_operation vehicles", non_operational_vehicles)

//if a car is not insured
let count_non_insured = 0 
for (let index = 0; index < railroad_cars.length; index++) {
    let rr_car = railroad_cars[index];
    //
    if(rr_car.insured === false){ //!rr_car.insured
        count_non_insured = count_non_insured + rr_car.quantity
    }
}
console.log("non_insured count", count_non_insured)

//any cars with pricerPer >= 6500
let expensive_cars = []

let total_expensive_cars = 0
for (let index = 0; index < railroad_cars.length; index++) {
    let rr_car = railroad_cars[index];
    if(rr_car.pricePer >= 6500){
        expensive_cars.push(rr_car)
        total_expensive_cars = total_expensive_cars + rr_car.pricePer * rr_car.quantity
    }
}

console.log("expensive_cars", expensive_cars)
console.log("total_expensive_cars", total_expensive_cars)

