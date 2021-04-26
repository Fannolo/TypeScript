//Simple Generic Class for simple men
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem<S extends T>(item: S) {
    this.data.splice(this.data.indexOf(item), 1); // remove 1 element at the index of item
  }
  getItems() {
    return [...this.data];
  }
}
//full flexibility, but we give some information to make it very flexible but still very strong typed
const stringStorage = new DataStorage<string>();
stringStorage.addItem("Max");
stringStorage.addItem("ciccio");
stringStorage.removeItem("Max");
console.log(stringStorage.getItems());

//object in javascript are referenced which means they all point to a specific memory allocation
const objectStorage = new DataStorage<object>(); // objects are not allowed
objectStorage.addItem({ name: "Max" });
objectStorage.addItem({ name: "ciccio" });
//...
objectStorage.removeItem({ name: "Max" });
console.log(objectStorage.getItems());
