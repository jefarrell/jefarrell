import noise from './noise'
require('./styles/main.scss')


const noiseGen = iter => {
	const multiplier = 500;
	const subt = 400;
	return Math.abs(iter - (noise(0, iter / 300) * multiplier) - subt)
}




const gradient = (url, off1, off2) => {
	let grad = document.createElementNS(url, 'linearGradient');
	grad.setAttribute('class', 'root-rect-gradient');
	grad.setAttribute('x1', '0%');
	grad.setAttribute('x2', '50%');
	grad.setAttribute('y1', '0%');
	grad.setAttribute('y2', '100%');
	grad.setAttribute('offset', "50%");
	grad.setAttribute('stop-color', "red");
	grad.setAttribute('offset', "51%");
	grad.setAttribute('stop-color', "#FFF");


	var stops = [
	    {
	        "color": "#ff0000",
	        "offset": "50%"
	    },{
	        "color": "#fff",
	        "offset": "51%"
	    }
	];

	// Parses an array of stop information and appends <stop> elements to the <linearGradient>
	for (var i = 0, length = stops.length; i < length; i++) {

	    // Create a <stop> element and set its offset based on the position of the for loop.
	    var stop = document.createElementNS(url, 'stop');
	    stop.setAttribute('offset', stops[i].offset);
	    stop.setAttribute('stop-color', stops[i].color);

	    // Add the stop to the <lineargradient> element.
	    grad.appendChild(stop);

	}




	return grad;
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
  		let defs = document.createElementNS(svgns, 'defs');
  		let blah = gradient(svgns, 1, 1);
  		defs.appendChild(blah);
  		rect.appendChild(defs);
  		rect.setAttribute('class', 'root-rect');
  		rect.setAttributeNS(null, 'x', width * 0.05);
  		rect.setAttributeNS(null, 'y', i * 50);
  		rect.setAttributeNS(null, 'height', i * 2.5);
  		rect.setAttributeNS(null, 'width', '90%');
  		rect.setAttribute(null, 'fill', 'url(.root-rect-gradient)');
  		//rect.setAttributeNS(null, 'fill', 'rgba(0, 0, 255, 1')
  		svgDir.appendChild(rect);

  	}
 }



init();






