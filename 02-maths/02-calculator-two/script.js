/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value


    var performOperation = function(operation) {
        // perform the operation
        let num1 = parseInt(document.getElementById("op-one").value);
        let num2 = parseInt(document.getElementById("op-two").value);
        let result;
        switch (operation){
            case "addition":
                result = num1 + num2;
                alert("Output is: " + result);
                break;

            case "substraction":
                result = num1 - num2;
                alert("Output is: " + result);
                break;

            case "multiplication":
                result = num1 * num2;
                alert("Output is: " + result);
                break;

            case "division":
                result = num1 / num2;
                alert("Output is: " + result);
                break;

            default:
                alert("ERROR");

        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();
