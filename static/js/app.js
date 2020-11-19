// from data.js
var tableData = data;
// 
var tbody = d3.select("tbody");

// YOUR CODE HERE!
tableData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

var button = d3.select("#filter-btn");
var form =  d3.select("#form");

button.on("click", runEnter);

    function runEnter(){
        d3.event.preventDefault();
        tbody.html("");
        var inputElement = d3.select("#datetime");
        var inputValue = inputElement.property("value");
        var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    filteredData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });

    };