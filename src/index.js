import noise from './noise'
require('./styles/main.scss')

const svgDir = document.getElementById('svg-container'),
      svgns = 'http://www.w3.org/2000/svg',
      height = document.body.clientHeight,
      width = document.body.clientWidth;


const noiseGen = iter => {
	const multiplier = 500;
	const subt = 400;
	return Math.abs(iter - (noise(0, iter / 300) * multiplier) - subt)
}


const makeRect = ( className, iter, color) => {
  let rect = document.createElementNS(svgns, 'rect');
  rect.setAttribute('class', className);
  rect.setAttributeNS(null, 'y', iter * 50);
  rect.setAttributeNS(null, 'height', iter * 2 );
  rect.setAttributeNS(null, 'width', width-100 );
  rect.setAttributeNS(null, 'fill', color);
  return rect;
}


const init = () => {
  const noiseVars = [];
	for (let j = 10; j < height; j += 5) {
		noiseVars.push( noiseGen(j) );
	}

	for (let i = 0; i < noiseVars.length; i++) {
    const r1 = makeRect('root-rect', i, '#0000FF');
    const r2 = makeRect('top-rect', i, '#FF0000');
    svgDir.appendChild(r1);
    svgDir.appendChild(r2);
	}
  
  const rects = document.getElementsByClassName('top-rect');
  for (let r of rects ) {   
    r.setAttributeNS(null, 'width', Math.abs(r.getBoundingClientRect().top));
  }
}


document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', e => {
    const rects = document.getElementsByClassName('top-rect');
    for (let r of rects ) {   
      r.setAttributeNS(null, 'width', Math.abs(r.getBoundingClientRect().top));
    }
  })
})


init();






