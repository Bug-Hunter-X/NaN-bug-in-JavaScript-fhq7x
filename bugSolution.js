function foo(a, b) {
  // Type checking before addition
  a = Number(a);
  b = Number(b);
  if(isNaN(a) || isNaN(b)) {
    return 0; // Handle the case where conversion to number fails
  }
  return a + b;
}

function bar(a, b) {
  return foo(a, b) * 2;
}

console.log(bar(2, 3)); // Output: 10
console.log(bar("2", 3)); // Output: 10
console.log(bar("abc",3)); //Output: 0