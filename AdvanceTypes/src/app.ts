type Admin = {
  name: string;
  priviledges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const el: ElevatedEmployee = {
  name: "Manu",
  priviledges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = boolean | number;
type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;
function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Employee's name: ", emp.name);
  if ("priviledges" in emp) {
    console.log("Employee's privileges: ", emp.priviledges);
  }
  if ("startDate" in emp) {
    console.log("Employee start date: ", emp.startDate);
  }
}

printEmployeeInformation(el);

//instanceof

class Car {
  drive() {
    console.log("driving a car");
  }
}

class Truck {
  drive() {
    console.log("driving truck");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo: ", amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);
