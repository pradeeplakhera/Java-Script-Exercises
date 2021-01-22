/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").addEventListener("click", function (){
        let date = document.getElementById("dob-day").value;
        // let dateSelected = date.options[date.selectedIndex].value;

        let month = document.getElementById("dob-month").value;
        // month = month - 1;
        // let monthSelected = month.options[month.selectedIndex].value;


        let year = document.getElementById("dob-year").value;
        // let yearSelected = year.options[year.selectedIndex].value;

        let dobUser = new Date(year, month-1, date);
        let presentDate = new Date();

        // console.log(dobUser);

        let diff = presentDate - dobUser;
        diff =  Math.floor(diff/31557600000);

        alert("You are " + diff + " years old");
    })





})();
