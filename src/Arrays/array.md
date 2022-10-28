# Learn Javascript

## Arrays

__  __

## Explanation

An array is a special variable, which can hold more than one value at a time. If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:


| Variable | Value |
| --- | --- |
| car1 | Volvo |
| car2 | BMW |
| car3 | Ford |



## Example

```javascript

let example = [];

let cars = ["Volvo", "BMW", "Ford"];

const lengthOfCars = cars.length;


let i = 0;

while (i < lengthOfCars) {

  console.log(cars[i]);

  i++;

}

console.log(example);
// Output: Volvo, BMW, Ford

```

