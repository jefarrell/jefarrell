"use strict";

var d3 = _interopRequireWildcard(require("d3"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function() {
    return cache;
  };
  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (typeof obj !== "object" && typeof obj !== "function")) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

/*
 * Multi-line waveform animation in D3
 * Based off of Bostock's Circle Wave
 * https://bl.ocks.org/mbostock/2d466ec3417722e3568cd83fc35338e3
 */
const param = 48;
const arr = [];

for (let i = 0; i < 24; i++) arr.push(1);

const svg = d3.select("svg");
const width = window.innerWidth;
const height = +svg.attr("height");
const x = d3.scaleLinear().range([0, width]);
const angles = d3.range(0, 2 * Math.PI, Math.PI / 10);
const path = svg
  .append("g")
  .attr("transform", `translate(0, ${height / 2})`)
  .attr("fill", "none")
  .attr("stroke-width", 1.75)
  .attr("opacity", 0.8)
  .selectAll("path")
  .data(arr)
  .enter()
  .append("path")
  .attr("stroke", "#000")
  .datum((d, i) => {
    return d3
      .line()
      .curve(d3.curveBasisOpen)
      .x(angles => {
        return x(angles / 2);
      })
      .y(angles => {
        const t = d3.now() / 3000;
        return (
          Math.sin(angles * 4 - (i * 2 * Math.PI) / param + t) *
          Math.pow((2 + Math.cos(angles - t)) / 2, 4) *
          16
        );
      });
  });
d3.timer(() => {
  path.attr("d", d => {
    return d(angles);
  });
});
