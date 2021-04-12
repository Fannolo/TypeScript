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

function add(a: number, b: number): number;
function add(a: number, b: string): string;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add("Max ", "Mara");

result.split(" ");

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

type Bird = {
  type: "bird";
  flyingSpeed: number;
};

type Horse = {
  type: "horse";
  runningSpeed: number;
};

type Animal = Horse | Bird;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
    case "horse":
      //   speed = animal.runningSpeed;
      speed = 10;
  }
  console.log("Moving animal at speed " + speed);
}

moveAnimal({ type: "horse", runningSpeed: 10 });
moveAnimal({ type: "bird", flyingSpeed: 10 });

const paragraph = document.getElementById(
  "message-output"
)! as HTMLInputElement;
const userInputElement = <HTMLInputElement>(
  document.getElementById("user-input-element")!
);

const userInputElemen2 = document.getElementById("user-input-element2");

paragraph.value = "ciao";
userInputElement.value = "Hi there";

if (userInputElemen2) {
  (userInputElemen2 as HTMLInputElement).value = "Hello there again!";
}

const fetchUserData = {
  id: "ul",
  name: "Max",
    job: { title: "pipe constructor" },
};

console.log(fetchUserData?.job?.title);

const someVariable = undefined;
const storedSomeVariable = someVariable ?? "DEFAULT";
console.log(storedSomeVariable);
