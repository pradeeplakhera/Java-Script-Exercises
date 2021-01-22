/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    let d = new Date();

    // Creating array to get the name of the day
    let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayName = day[d.getDay()];

    // Creating array for getting month's name
    let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let monthName = month[d.getMonth()];

        //Printing output
    document.getElementById("target").innerHTML = dayName + " " + d.getDate() + " " + monthName + " " + d.getFullYear() + ", " + d.getHours() + "h" + d.getMinutes();

})();
