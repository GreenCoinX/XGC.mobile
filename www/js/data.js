html5sql.openDatabase("com.greencoinx.data", "GreenCoinXAddress", 3*1024*1024);

function checkDB(){
	html5sql.process(
	[
	"CREATE TABLE if not exists addresses (id INTEGER PRIMARY KEY, address TEXT);",
	"SELECT * FROM addresses;"
	],
	function(transaction, results, rowsArray){
		if(rowsArray.length > 1){
//			readDB();
		}else{
			//do nothing....
			console.log("No Data...");
		}
	}, catchError);
}

function readDB(){
	html5sql.process(
	[
	"SELECT * FROM addresses ORDER BY id desc;",
	],
	function(transaction, results, rowsArray){
		var xhtml = '';
		for(var i=0; i<rowsArray.length; i++){
			var id = rowsArray[i].id;
			var address = rowsArray[i].address;
			xhtml += '<li class="table-view-cell"><code><a href="#" data-id="' + id + '" onclick="ShowDetails(this);" data-name="' + address + '">' + address + '</a></code></li>';
		}
		$("#XGCAddresses").append(xhtml);	
	}, catchError);
	
}

function dropTables(){
	html5sql.process(
	[
	"DROP TABLE addresses;",
	],
	function(){
	console.log("Dropped!");
	}, catchError);
}

function addAddresses(address){
	html5sql.process(
	[
	"INSERT INTO addresses (address) VALUES ('" + address + "');"
	],
	function(){
	$("#address").val("");
	readDB();
	}, catchError);
}


function catchError(error, statement){
	console.error("Error: " + error.message + " when processing " + statement);
}