var grid = document.getElementById("container")

var rows = 16;

var cols = 16;

var container = document.getElementById("container")

for (i=0; i < rows; i++) {

    var row = document.createElement("div")
    row.className = "row" 
    container.appendChild(row)
}

for (j=0; j < cols; i++) {

        var col =document.createElement("div")
        col.className = "col"
        container.appendChild(col) 
}


container.appendChild(row);
container.appendChild(col);

console.log("chipachapa")