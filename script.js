var grid = document.getElementById("container")

var squareNum = 4096;

var container = document.getElementById("container")

for (i=0; i < squareNum; i++) {

    var square = document.createElement("div")
    square.className = "square"
    container.appendChild(square)
    console.log("chili")
}

var squares = document.getElementsByClassName("square");

// Loop through the squares
for (var i = 0; i < squares.length; i++) {
  // Change the background color to black on mouseover
  squares[i].addEventListener("mouseover", function() {
    this.style.backgroundColor = "black";
  })
}