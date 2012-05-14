window.onload = function() {
    var paper = new Raphael(document.getElementById('canvas_container'), 900, 900);  
	
	var test1 = paper.image("test1.png",300, 567,354,34)
	var arr1 = paper.rect(300, 300, 33, 300)
	arr1.attr({"fill":'#eb8e23', 'stroke':0});
	
	arr1.click(function(){
		arr1.animate({height:400},500,'<');
		test1.animate({x:300, y:667}, 500,'<');
	})
	
	
	
   /*
	var anim = Raphael.animation({cx: 10, cy: 20}, 2e3);//animation object
	
	var arrow4 = paper.path("M449.375,637.25H111.25V341h32.5l-0.125,263.75l305.75-0.25l15,16L449.375,637.25z");
	//var arrow4_c1 = paper.path("M354.501,604.604h14.333l15.5,16.069l-14.916,16.576h-14.917l14.917-15.561");
	//var arrow4_c2 = paper.path("M384.334,604.604h14.333l15.5,16.069l-14.916,16.576h-14.917l14.917-15.561"); 
	//var arrow4_c3 = paper.path("M414.167,604.604H428.5l15.5,16.069l-14.916,16.576h-14.917l14.917-15.561"); 
  	var arrow4_c_image = paper.image("arrow_chevrons.png", 340, 604, 90, 33)
	
	arrow4.attr({'fill': '#E13020','stroke':'#E13020'});
	//arrow4_c1.attr({'fill': '#333','stroke-width':'0','stroke':'0'});
	//arrow4_c2.attr({'fill': '#333','stroke-width':'0','stroke':'0'});
	//arrow4_c3.attr({'fill': '#333','stroke-width':'0','stroke':'0'});

	
	
  arrow4.click(function(){
	//arrow1_mask.animate({transform: "r60,100,100"}, 1000, "<>");
	arrow4.animate({path: "MM449.375,747.25H111.25V341h32.5l-0.125,373.75l305.75-0.25l15,16L449.375,747.25z"},500,'<');
	arrow4_c_image.animate({x:340, y:714}, 500,'<');
	//arrow4_c1.animate({path: "M354.501,714.604h14.333l15.5,16.069l-14.916,16.576h-14.917l14.917-15.561"},490,'<');
	//arrow4_c2.animate({path: "M384.334,714.604h14.333l15.5,16.069l-14.916,16.576h-14.917l14.917-15.561"},490,'<');
	//arrow4_c3.animate({path: "M414.167,714.604H428.5l15.5,16.069l-14.916,16.576h-14.917l14.917-15.561"},490,'<');
	//arrow2.animate({path: "M555.375,549.5H217.25v-253h32.5L249.625,517l305.75-0.25l15,16L555.375,549.5z"},500,'<');
	
  })  
    //arrow1.animate({rotation: 160}, 2000, 'bounce');  
	*/
}