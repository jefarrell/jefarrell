import anime from 'animejs'
require('./styles/main.scss');

const COLS = [
'#FFF',
'#C7CB00',
'#54DADA',
'#65D800',
'#E146F6',
'#CF3100',
'#505BF5'
];

const CLASSES = {
  ROW: 'row',
  ROW_ITEM: 'row-item',
  ROW_ITEM_DOT: 'row-item__dot',
  DOT: 'dot'
};

const createGrid = (rows) => { 
  return new Promise((resolve) => {
    const root = document.getElementById('root'); 
    for (let i = 0; i < rows; i++){ 
      const row = document.createElement('div'); 
      row.className = CLASSES.ROW; 
      for (let x = 0; x < rows; x++){ 
          const cell = document.createElement('div'); 
          cell.className = CLASSES.ROW_ITEM; 
          for (let d = 0; d < 5; d++) {
            const dot = document.createElement('div');
            dot.className = `${CLASSES.ROW_ITEM_DOT} ${CLASSES.DOT}-${d}`;
            dot.style.backgroundColor = COLS[i]
            cell.appendChild(dot);
          }
          row.appendChild(cell); 
      } 
      root.appendChild(row); 
      resolve();
    } 
  });
}

const anim = (index) => {
  const OFFSET = 20;
  return new Promise((resolve) => {
    anime({
      targets: document.getElementsByClassName('row-item__dot'),
      translateY: index * OFFSET,
      delay: anime.stagger(index * OFFSET),
      direction: 'alternate',
      loop: true,
    });    
  })
}

const animateAll = () => {
  return new Promise((resolve) => {
    const rows = Array.from(document.getElementsByClassName('row'))
    rows.forEach((row, index) => anim(index));
  });
}

const main = async() => {
  try {
    await createGrid(COLS.length);
    await animateAll()
  }
  catch(e) {
    console.log("e - ", e);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  main();
});