/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        let num1 = parseInt(document.getElementById("op-one").value);
        let num2 = parseInt(document.getElementById("op-two").value);
        let result = num1 + num2;
        alert("The output is " + result);


    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        let num1 = parseInt(document.getElementById("op-one").value);
        let num2 = parseInt(document.getElementById("op-two").value);
        let result = num1 - num2;
        alert("The output is " + result);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        let num1 = parseInt(document.getElementById("op-one").value);
        let num2 = parseInt(document.getElementById("op-two").value);
        let result = num1 * num2;
        alert("The output is " + result);
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        let num1 = parseInt(document.getElementById("op-one").value);
        let num2 = parseInt(document.getElementById("op-two").value);
        let result = num1 / num2;
        alert("The output is " + result);
    });
})();
