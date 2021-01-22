/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

        // your code here
        let input = parseInt(document.getElementById("number").value);

        if(input < 0){
            alert("Invalid input, enter positive number.")
        }

        else if(input === 0){
            alert("Invalid input, enter positive number.")
        }
        else {
            let fact = 1;
            for (let i = 1; i <= input; i++) {
                fact = fact*i;
            }
            alert(fact);
        }


    });

})();
