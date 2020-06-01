// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// UFO sighting values using a normal function
// data.forEach(function(tableData){
//     console.log(tableData);
//     var row = tbody.append("tr");
//     Object.entries(tableData).forEach(function([key, value]){
//         console.log(key, value);
//         var cell = row.append("td");
//         cell.text(value);
//     });
// });


//UFO sighting values using an arrow function
data.forEach((tableData) => {
    var row = tbody.append("tr");
    Object.entries(tableData).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});


// Select the button
var button = d3.select("#filter-btn");
var reset_button = d3.select("#reset-btn");

// Select form
var form = d3.select("form");

// Use D3 to create an event handler

// Create event handlers
button.on("click", searchUFO);
reset_button.on("click", resetPage);
form.on("submit", searchUFO);


function searchUFO() {
    // Use D3 to remove table search results from the DOM
    d3.select("tbody").selectAll("tr").remove();

    // Prevent page refresh
    d3.event.preventDefault();

    // Get input element and value to filter on
    var inputElement = d3.select(".form-control");
    var inputValue = inputElement.property("value");

    // Get dropdown element value
    var dropdownMenu = d3.select("#searchType");
    var searchItem = dropdownMenu.property("value");

    if (searchItem == "datetime") {
        var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    }

    else if (searchItem == "city") {
        var filteredData = tableData.filter(tableData => tableData.city === inputValue)
    }

    else if (searchItem == "state") {
        var filteredData = tableData.filter(tableData => tableData.state === inputValue)
    }

    else if (searchItem == "country") {
        var filteredData = tableData.filter(tableData => tableData.country === inputValue)
    }

    else if (searchItem == "shape") {
        var filteredData = tableData.filter(tableData => tableData.shape === inputValue)
    }


    console.log(filteredData);
    
    filteredData.forEach((filteredData) => {
        var row = tbody.append("tr");
        Object.entries(filteredData).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });

};

function resetPage() {
    location.reload();
}

// datetime: "1/1/2010",
// city: "benton",
// state: "ar",
// country: "us",
// shape: "circle",
// durationMinutes: "5 mins.",
// comments: "4 bright gree"