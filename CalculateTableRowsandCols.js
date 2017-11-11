window.onload = function(){

function CalculateTableRowandCol() {
	
	var table = document.getElementById('crickettable');

	// use default rows.length to get no. of rows in a table including headers
	var numberOfRows = table.rows.length;

	var rowCount  = document.getElementById("RowCountExcludingHeaders-div");

	// display the count exclduing headers
	rowCount.innerHTML = "No. of rows excluding headers: "+(numberOfRows - 1);

	var colCount = document.getElementById("ColCount-div");

	// get the columns count by considering any row in a table and calculate that row cells length
	colCount.innerHTML = "No. of columns: " + table.rows[0].cells.length;
 }

 CalculateTableRowandCol();
}

