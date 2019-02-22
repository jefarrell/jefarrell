require('./styles/main.scss')

const genDivs = (rows) =>{ 
  const root = document.getElementById('root'); 
  for (let i = 0; i < rows; i++){ 
    const row = document.createElement('div'); 
    row.className = 'row'; 
    for (let x = 0; x < rows; x++){ 
        const cell = document.createElement('div'); 
        cell.className = 'row-item'; 
        row.appendChild(cell); 
    } 
    root.appendChild(row); 
  } 
}

genDivs(7)