// Creates canvas 320 × 200 at 10, 50
var paper = Raphael(10, 50, 320, 200);

// Creates circle at x = 50, y = 40, with radius 10
var circle = paper.circle(50, 40, 10);
// Sets the fill attribute of the circle to red (#f00)
circle.attr("fill", "#f00");

// Sets the stroke attribute of the circle to white
circle.attr("stroke", "#fff");

Raphael.el.red = function () {
    var hsb = this.paper.raphael.rgb2hsb(this.attr("fill"));
    hsb.h = 1;
    this.attr({fill: this.paper.raphael.hsb2rgb(hsb).hex});
}

var anim = Raphael.animation({cx: 10, cy: 20},2e3);
//circle.animate(anim); // run the given animation immediately
circle.animate(anim.delay(500)); // run the given animation after 500 ms

var line = paper.rect(10,10,50,50)
line.attr({
	fill: "green",
	width: 100
})
line.node.onclick = function() {  
    line.animate({
		height: 100
	}, 200, function() {  
		animate_width();
		window.location.href="http://google.com";
		
    });  
}  

function animate_width(){
	line.animate({
		width:300
	},300)
}


window.onload = function() {
    var paper = new Raphael(document.getElementById('canvas_container'), 500, 500);  
    var tetronimo = paper.path("M 250 250 l 0 -50 l -50 0 l 0 -50 l -50 0 l 0 50 l -50 0 l 0 50 z");  
    tetronimo.attr(  
        {  
            gradient: '90-#526c7a-#64a0c1',  
            stroke: '#3b4449',  
            'stroke-width': 10,  
            'stroke-linejoin': 'round',  
            rotation: -90  
        }  
    );  
  
    tetronimo.animate({rotation: 360}, 2000, 'bounce');  
}