
var color_picker1 = Math.floor(Math.random() * 101);
var color_picker2 = Math.floor(Math.random() * 71);
var color_picker3 = Math.floor(Math.random() * 91);

d3.select("svg")
    .append("text")
    .attr("font-size","20px")
    .attr("font-family","'Indie Flower', cursive")
    .attr("x", 250)
    .attr("y", 200)
    .style("opacity", 0)
    .text("Hi!There! Try to find the LETTER computer think of!");

var pathData = d3.symbol()
  .type(d3.symbolStar)
  .size(170);


var points = [
  [200, 60],
  [30, 80],
  [320, 75],
  [80, 140],
  [250, 160],
  [490, 175],
  [420, 145], 
  [510, 85]
];


d3.select("g")
  .selectAll("path")
  .data(points)
  .enter()
  .append("path")
  .attr("d", pathData)
  .style("opacity", 0)
  .style("fill", "white");


d3.selectAll("text")
  .transition()
  .delay(2000)
  .duration(5000)
  .attr("font-size", "180%")
  .style("fill","rgb(241,241,241)" )
  .style("opacity", 1)
  .attr("x", 30)
  .attr("y", 130);

d3.selectAll("path")
  .transition()
  .delay(2000)
  .duration(4000)
  .style("opacity", 0.6)
  .attr("transform", function(d) { return "translate(" + d + ")"; });
