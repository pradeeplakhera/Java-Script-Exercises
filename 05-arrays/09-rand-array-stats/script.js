/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").addEventListener("click", function (){
        var arr = [];       //Creating Blank array

        //pushing random values between 1-100 in the array
        // for (let i = 1; i <= 10; i++) {
        //     arr.push(Math.floor((Math.random() * 10 + 1)*i));
        // }

        function generateNumber(){
            return Math.floor((Math.random() * 100) + 1);
        }

        for (let i = 0; i < 10; i++) {
            arr.push(generateNumber());
            document.getElementById("n-"+(i+1)).innerHTML = arr[i];
        }

        console.log(arr);

        var max = Math.max(...arr);

        var min = Math.min(...arr);

        var sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }

        var avg = sum / arr.length;


        //Targetting HTML
        document.getElementById("min").innerText = min;
        document.getElementById("max").innerText = max;
        document.getElementById("sum").innerText = sum;
        document.getElementById("average").innerText = avg;
    })
})();
