// Data.js information in variable
var tableData = data;
// 
var tbody = d3.select("tbody");

// forEach on the TableData
tableData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

var button = d3.select("#filter-btn");
var form =  d3.select("#form");
//Couldn't enter to work the same as clicking to run enter
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
