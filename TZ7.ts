//2 вариант 
interface Vehicle {
  brand: string;
  bodyType: string;
  vehicleClass: string;
  
}
interface IStorage {
  sortVehiclesByModelDescending(): Vehicle[];
  findVehiclesByMake(brand: string): Vehicle[];
}
class Storage1 implements IStorage {
  private vehicles: Vehicle[] = [];

  constructor(vehicles: Vehicle[]) {
    this.vehicles = vehicles;
  }

  sortVehiclesByModelDescending(): Vehicle[] {
    return this.vehicles.slice().sort((a, b) => {
      if (a.brand < b.brand) {
        return 1;
      }
      if (a.brand > b.brand) {
        return -1;
      }
      return 0;
    });
  }
  findVehiclesByMake(brand: string): Vehicle[] {
    return this.vehicles.filter(vehicle => vehicle.brand === brand);
  }
 
}
class Car implements Vehicle { 
  model: string;
  bodyType: string;
  vehicleClass: string;

  constructor(model: string,bodyType: string, vehicleClass: string) {
      this.model = model;
      this.bodyType = bodyType;
      this.vehicleClass = vehicleClass;
  }
  brand: string;


  getVehicleDetails(): { bodyType: string; vehicleClass: string } {
      return {
          bodyType: this.bodyType,
          vehicleClass: this.vehicleClass,
      };
  }
}
const vehicles: Vehicle[] = [
  { brand: "Ланчя",bodyType:"не малометражка",vehicleClass:"ралли" },
  { brand: "Альфа ромео",bodyType:"седан",vehicleClass:"ралли" },
  { brand: "Фиат",bodyType:"малометражка",vehicleClass:"не спорткар"},
];

const storage = new Storage1(vehicles);
const sortedVehicles = storage.sortVehiclesByModelDescending();

console.log(sortedVehicles);
const lanciaVehicles = storage.findVehiclesByMake("Ланчя");
console.log("Автомобили марки Ланчи:", lanciaVehicles);
const fordVehicles = storage.findVehiclesByMake("Ford");
console.log("Автомобили марки Ford:", fordVehicles);

if (lanciaVehicles.length > 0) {
  const firstLancia = lanciaVehicles[0];
  
  if (firstLancia instanceof Car) { 
      const details = firstLancia.getVehicleDetails();
      console.log("Детали первого автомобиля Lancia:", details);
  }
}