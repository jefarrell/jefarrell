require('./styles/main.scss')

function genDivs(v){ 
  var e = document.body; // whatever you want to append the rows to: 
  for(var i = 0; i < v; i++){ 
    var row = document.createElement("div"); 
    row.className = "row"; 
    for(var x = 0; x <= v; x++){ 
        var cell = document.createElement("div"); 
        cell.className = "row-item"; 
        row.appendChild(cell); 
    } 
    e.appendChild(row); 
  } 
}

genDivs(7)