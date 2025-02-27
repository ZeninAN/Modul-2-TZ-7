var Storage1 = /** @class */ (function () {
    function Storage1(vehicles) {
        this.vehicles = [];
        this.vehicles = vehicles;
    }
    Storage1.prototype.sortVehiclesByModelDescending = function () {
        return this.vehicles.slice().sort(function (a, b) {
            if (a.brand < b.brand) {
                return 1;
            }
            if (a.brand > b.brand) {
                return -1;
            }
            return 0;
        });
    };
    Storage1.prototype.findVehiclesByMake = function (brand) {
        return this.vehicles.filter(function (vehicle) { return vehicle.brand === brand; });
    };
    return Storage1;
}());
var Car = /** @class */ (function () {
    function Car(model, make, bodyType, vehicleClass) {
        this.model = model;
        this.bodyType = bodyType;
        this.vehicleClass = vehicleClass;
    }
    Car.prototype.getVehicleDetails = function () {
        return {
            bodyType: this.bodyType,
            vehicleClass: this.vehicleClass,
        };
    };
    return Car;
}());
var vehicles = [
    { brand: "Ланчя", bodyType: "не малометражка", vehicleClass: "ралли" },
    { brand: "Альфа ромео", bodyType: "седан", vehicleClass: "ралли" },
    { brand: "Фиат", bodyType: "малометражка", vehicleClass: "не спорткар" },
];
var storage = new Storage1(vehicles);
var sortedVehicles = storage.sortVehiclesByModelDescending();
console.log(sortedVehicles);
var lanciaVehicles = storage.findVehiclesByMake("Ланчя");
console.log("Автомобили марки Ланчи:", lanciaVehicles);
var fordVehicles = storage.findVehiclesByMake("Ford");
console.log("Автомобили марки Ford:", fordVehicles);
if (lanciaVehicles.length > 0) {
    var firstLancia = lanciaVehicles[0];
    if (firstLancia instanceof Car) {
        var details = firstLancia.getVehicleDetails();
        console.log("Детали первого автомобиля Lancia:", details);
    }
}
