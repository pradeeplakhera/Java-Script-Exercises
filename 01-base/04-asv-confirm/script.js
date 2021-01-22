/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    function myFunction(){
        let age = prompt("What is your age?");
        let town = prompt("In which town do you live?");
        let gender = prompt("what is your gender?");

        let answer = confirm("you are a " + age + " year old " + gender + " who lives in " + town + " .");


        if (answer == true) {
            alert("You have confirmed your details");
        } else {
            myFunction();
        }
    }

    myFunction();

})();
