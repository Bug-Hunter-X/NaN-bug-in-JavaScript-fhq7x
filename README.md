# JavaScript NaN Bug

This repository demonstrates a common error in JavaScript that leads to `NaN` (Not a Number) results.  The bug arises from implicit type coercion with the addition operator when mixing strings and numbers. 

## Bug Description

The `bar` function calls `foo`, which performs addition.  If either input to `foo` is a string, the result will be `NaN` due to the `+` operator's behavior when dealing with mixed types. This behavior is different from strict typing languages.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js`.
3. Run the script using Node.js (or a browser's console).
4. Observe the `NaN` output when a string is passed as an argument.

## Solution

The solution involves explicitly type checking the inputs and ensuring only numbers are involved. This can be done using Number() to convert a string to an integer or checking if the input is a number using typeof.

See `bugSolution.js` for a corrected implementation.
