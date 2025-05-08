//problem 1

function formatString(input: string, toUpper?: boolean): string {
  if (toUpper || toUpper === undefined) {
    console.log(input.toUpperCase());
    return input.toUpperCase();
  }
  console.log(input.toLowerCase());
  return input.toLowerCase();
}

//problem 2
function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  console.log(items.filter((item) => item.rating > 4));
  return items.filter((item) => item.rating > 4);
}

//problem 3

function concatenateArrays<T>(...arrays: T[][]): T[] {
  let result: T[] = [];
  arrays.forEach((array) => {
    result = result.concat(array);
  });
  console.log(result);
  return result;
}
//problem 4

class Vehicle {
  private _make: string;
  private _year: number;

  constructor(make: string, year: number) {
    this._make = make;
    this._year = year;
  }
  getInfo() {
    console.log(`Make: ${this._make}, Year: ${this._year}`);
  }
}
class Car extends Vehicle {
  private _model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this._model = model;
  }
  getModel() {
    console.log(`Model: ${this._model}`);
  }
}

//problem 5

function processValue(value: string | number): number {
  if (typeof value === "string") {
    console.log(value.length);
    return value.length;
  } else {
    console.log(value * 2);
    return value * 2;
  }
}
//problem 6
interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) {
    console.log(null);
    return null;
  }

  const maxItem = products.reduce((max, item) =>
    item.price > max.price ? item : max
  );

  console.log(maxItem);
  return maxItem;
}

//problem 7
enum Day {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

function getDayType(day: Day): "Weekday" | "Weekend" {
  switch (day) {
    case Day.Saturday:
    case Day.Sunday:
      return "Weekend";
    default:
      return "Weekday";
  }
}

//problem 8

async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n < 0) {
        reject(new Error("Negative number not allowed"));
      } else {
        resolve(n * n);
      }
    }, 1000);
  });
}

squareAsync(4).then((result) => console.log(result));
