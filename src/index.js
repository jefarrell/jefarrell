require('./styles/main.scss');

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
          for (let d = 0; d < 3; d++) {
            const dot = document.createElement('div');
            dot.className = `${CLASSES.ROW_ITEM_DOT} ${CLASSES.DOT}-${d}`;
            cell.appendChild(dot);
          }
          row.appendChild(cell); 
      } 
      root.appendChild(row); 
      resolve();
    } 
  })

}

const clickHandler = () => {
  return new Promise((resolve) => {
    const allContainers = document.getElementsByClassName(CLASSES.ROW_ITEM);
    const containerArr = Array.from(allContainers);
    containerArr.forEach((container) => {
      container.onclick = (e) => {
        console.log("clicked", container);
        console.log("children", container.childNodes);
        const children = Array.from(container.childNodes);
        children.forEach((child) => {
          child.style.width = '75%';
          child.style.height = '75%'
          child.style.borderRadius = '84% 22% 38% 101% / 56% 70% 59% 47%'
        });
      }
      resolve();
    })
  })

}

const main = async() => {
  try {
    await createGrid(5);
    await clickHandler();
  }
  catch(e) {
    console.log("e - ", e);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  main();
});
