function add(a: number, b: number): number {
  return a + b;
}

function addStrings(a: string, b: string): string {
  return a + b;
}

let numResult = add(10, 5); // Correct
let strResult = addStrings("hello", "world"); //Correct
//let result = add("hello", "world"); // Type Error