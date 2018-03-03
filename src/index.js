import noise from './noise'
require('./styles/main.scss')


const noiseGen = iter => {
	const multiplier = 500;
	const subt = 400;
	return Math.abs(iter - (noise(0, iter / 300) * multiplier) - subt)
}

const init = () => {

  	const height = document.body.clientHeight;
  	const width = document.body.clientWidth;
  	const noiseVars = [];

	for (let j = 10; j < height; j += 5) {
		noiseVars.push( noiseGen(j) );
	}

	const svgDir = document.getElementById('svg-container');
	const svgns = 'http://www.w3.org/2000/svg';
  	for (let i = 0; i < noiseVars.length; i++) {
  		
  		let rect = document.createElementNS(svgns, 'rect');
  		rect.setAttribute('class', 'root-rect');
  		rect.setAttributeNS(null, 'x', width * 0.05);
  		rect.setAttributeNS(null, 'y', i * 50);
  		rect.setAttributeNS(null, 'height', i * 2.5);
  		rect.setAttributeNS(null, 'width', '90%');
  		rect.setAttributeNS(null, 'fill', 'rgba(0, 0, 255, 1')
  		svgDir.appendChild(rect);

  	}
 }



init();






