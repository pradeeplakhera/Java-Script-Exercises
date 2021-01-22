/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").addEventListener("click", function (){
        let userInput = document.getElementById("year").value;
        let list = [];
        for (let i = 0; i < 12; i++) {
            let d = new Date(userInput, i, 13);
            if(d.getDay() === 5){
                let option = {month: "long"};
                let month = d.toLocaleDateString("default", option);
                list.push(month);
            }

        }
        alert(list);

    })

})();
