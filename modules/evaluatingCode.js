// eval is used to run certain part of code in a function defined in a string

const x = 1;
function damy(code) {
  eval(code);
  return x;
}

console.log(damy("var x = 2")); // x =2
console.log(x); // x =1

// A less scary way of interpreting data as code is to use the Function con-
// structor. It takes two arguments: a string containing a comma-separated list
// of argument names and a string containing the function body. It wraps the
// code in a function value so that it gets its own scope and won’t do odd things
// with other scopes.

const plusOne = Function("n", "return n+1");

console.log(plusOne(4));
