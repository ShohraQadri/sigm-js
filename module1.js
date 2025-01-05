import { myFun } from "./Modules.js";
myFun()

// Importing the module
import { add, subtract, PI } from './Modules.js';

// Using the imported functions and constants
console.log('Addition:', add(5, 3));         // Output: Addition: 8
console.log('Subtraction:', subtract(5, 3)); // Output: Subtraction: 2
console.log('Value of PI:', PI);             // Output: Value of PI: 3.14159
