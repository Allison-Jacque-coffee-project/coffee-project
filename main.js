"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<h1>' + coffee.name + '</h1>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

var divCoffee=document.querySelector("#coffee");

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast =roastSelection.value;
    var searchString = searchBar.value
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        var name =coffee.name;
        name = name.toLowerCase();
        if (coffee.roast === selectedRoast && name.includes(searchString.toLowerCase())) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function addNewCoffee (coffee) {
    var selectedRoast =roastSelection2.value;
    var searchString = addCoffee.value
    var filteredCoffees = [];
    if (searchString === "string"){
        coffees.push(coffee);
    }
}

// function updateSearch(){
// var searchString = searchBar.value
//     var filteredCoffees = [];
//     coffees.forEach(function(coffee) {
//         if (coffee.name.includes(searchString)){
//             filteredCoffees.push(coffee);
//         }
//     });
//     tbody.innerHTML = renderCoffees(filteredCoffees);
// }

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var searchBar = document.querySelector("#myInput");
var addCoffee = document.querySelector("#addNewCoffee");
var roastSelection2 = document.querySelector('#roast-strength');


tbody.innerHTML = renderCoffees(coffees.reverse());

submitButton.addEventListener('click', updateCoffees);
searchBar.addEventListener("keyup", updateCoffees);
roastSelection.addEventListener("change",updateCoffees);
addCoffee.addEventListener("submit",addNewCoffee);
roastSelection2.addEventListener("submit",addNewCoffee);