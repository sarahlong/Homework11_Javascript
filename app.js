// from data.js
var tableData = data;  // data is the js data file var name

// Get a reference to the table body
var newtable = d3.select("ufo-table");

// Console.log the data from data.js
console.log(data);

// Connect to HTML buttons using D3
var populate = d3.select ("#populate-btn");
var filter = d3.select ("#filter-btn");




// 1. Append table to web page, adding new rows of data for each UFO sighting
// Debugging note: this function logs correct info to console, but not to table
populate.on("click", function() {

    // Prevent refreshing
    d3.event.preventDefault();

    data.forEach (function (tableData)  {
        console.log (tableData);
        var row = newtable.append("tr");
        Object.entries(tableData).forEach(function ([key,value]) {
            console.log (key,value);
            
            var cell = row.append ("td");
            cell.text(value);        
        });
    });
});


// 2. Use Filter Table button to find rows that match user input date
filter.on("click", function () {

    // Get dynamic value of input element with d3

    var dateEntered = d3.select ("#datetime")

    var dateValue = dateEntered.property("value")

    // Update table 
    data.forEach (function (tableData)  {
        // conditional based on date entered 
        if (tableData.datetime == dateValue)  {
            console.log (tableData)
            var row = newtable.append("tr");
            Object.entries(tableData).forEach(function ([key,value]) {
                console.log (key,value);
                
                var cell = row.append ("td");
                cell.text(value);    
        
            })
        }
    })
})