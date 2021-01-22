/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    // your code here
    document.getElementById("run").addEventListener("click", function (){

        //Using Set
        // var uniqueFruits = [...new Set(fruits)];
        // console.log(uniqueFruits);

        //Using filter method
        let uniqueFruit = fruits.filter(filterFruit);

        function filterFruit(item, index){
            return fruits.indexOf(item) === index;

        }
        console.log(fruits);
        console.log(uniqueFruit);

        //Finding Duplicates
        let duplicateEntry =  fruits.filter(function (item, index){
            return fruits.indexOf(item) != index;
        });

        console.log(duplicateEntry);

    })


})();
