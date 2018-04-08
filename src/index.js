import noise from './noise'
require('./styles/main.scss')


const svgDir = document.getElementById('svg-container')
const svgns = 'http://www.w3.org/2000/svg'
let height = document.body.clientHeight
let width = document.body.clientWidth


const noiseGen = iter => {
	const multiplier = 500;
	const subt = 400;
	return Math.abs(iter - (noise(0, iter / 300) * multiplier) - subt)
}


const makeRect = ( className, iter, color) => { 
  const rect = document.createElementNS(svgns, 'rect')
  rect.setAttribute('class', className)
  rect.setAttributeNS(null, 'y', iter * 50)
  rect.setAttributeNS(null, 'height', iter * 2 )
  rect.setAttributeNS(null, 'fill', color)
  return rect;
}


const init = () => {
  return new Promise( (resolve, reject) => {
    
    const noiseVars = []
  	for (let j = 10; j < height; j += 5) {
  		noiseVars.push( noiseGen(j) )
  	}
    
    resolve(noiseVars)

  })
}


const createRects = arr => {
  return new Promise ( (resolve,reject) => {
    for (let i = 0; i < arr.length; i++) {
      const r1 = makeRect('root-rect', i, '#0000FF')
      const r2 = makeRect('top-rect', i, '#FF0000')
      svgDir.appendChild(r1)
      svgDir.appendChild(r2)
    }
    resolve()
  })
}


const setRectWidths = () => {
  return new Promise( (resolve,reject) => {
    const topRects = document.getElementsByClassName('top-rect')
    const rootRects = document.getElementsByClassName('root-rect')

    for (let rr of rootRects ) {   
      rr.setAttributeNS(null, 'width', width)
    }
    for (let tr of topRects ) { 
      tr.setAttributeNS(null, 'width', Math.abs(tr.getBoundingClientRect().top*2))
    }

    resolve()
  })
}


const asyncWrap = async () => {
  try {
    const makeNoise = await init()
    const rectGroup = await createRects(makeNoise)
    await setRectWidths(rectGroup)
  }
  catch (err) {
    throw err
  }
}


document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('root').setAttribute('style', `border: ${width*0.02}px solid #000000`)
  
  asyncWrap()
  
  window.addEventListener('scroll', e => {
    const rects = document.getElementsByClassName('top-rect')
    for (let r of rects ) {   
      r.setAttributeNS(null, 'width', Math.abs(r.getBoundingClientRect().top*2))
    }
  })

  window.addEventListener('resize', () => { 
    height = document.body.clientHeight
    width = document.body.clientWidth
    setRectWidths()
  })
})

