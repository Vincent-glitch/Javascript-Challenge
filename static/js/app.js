var tableData = data;

var tbody = d3.select("tbody");
tableData.forEach(function(dataSearch) {
	    var row = tbody.append("tr");
	Object.entries(dataSearch).forEach(function([key, value]) {
		var cell = row.append("td");
		cell.text(value);
    });
  });
  
