window.onload = function() {
    var paper = new Raphael(document.getElementById('canvas_container'), 750,360);
	var textHeader_attr = {
		'font-family' 	: 'Georgia',
		'font-weight'	: 'bold',
		'font-size'		: 20,
		'fill'				: '#555',
		'text-anchor'	: 'start'
	};
	var text_attr = {
		'font-family' 	: 'Arial',
		'font-weight'	: 'normal',
		'font-size'		: 14,
		'fill'				: '#333',
		'width'			: 200,
		'text-anchor'	: 'start'
	};
	
	
	
	var arr1 = paper.image("arrow1.png",200,86,356,37)
	var arr1_rect = paper.rect(200,0, 33, 88).attr({"fill":'#e13020', 'stroke':0});
	arr1.id = "arrow1";
	
	var arr2 = paper.image("arrow2.png",136,148,469,34).attr({'opacity':1})
	var arr2_rect = paper.rect(136,0, 33, 150).attr({"fill":'#a41f20', 'stroke':0,'opacity':1});
	
	var arr3 = paper.image("arrow3.png",72,210,587,35).attr({'opacity':1})
	var arr3_rect = paper.rect(72,0, 33, 212).attr({"fill":'#dc6900', 'stroke':0,'opacity':1});
	
	var arr4 = paper.image("arrow4.png",8,272,695,35).attr({'opacity':1})
	var arr4_rect = paper.rect(8,0, 33, 274).attr({"fill":'#eb8b00', 'stroke':0, 'opacity':1});
	


	function arrowClickHandlers(callback){
		arr1.click(function(){
			viewArrow1();
		})//end arr1.click
		
		arr2.click(function(){
			viewArrow2();
		})//end arr1.click
		
		arr3.click(function(){
			viewArrow3();
		})//end arr1.click
		
		arr4.click(function(){
			viewArrow4();
		})//end arr1.click
		
		if (callback){
			callback();
		}
	}//end arrowClickHandlers
	function viewArrow1(){
			$('.ipo_text').css({display:'none'})
			paper.setSize(750, 410);
			
			arr2_rect.animate({height:252},352,'<');
			arr2.animate({x:136, y:250}, 352,'<');
			
			arr3_rect.animate({height:300},395,'<');
			arr3.animate({x:72, y:300}, 352,'<');
			
			arr4_rect.animate({height:350},352,'<');
			arr4.animate({x:8, y:350}, 352,'<',function(){
					//var textHead  = paper.text(210,155,arr4_textHeader).attr(textHeader_attr);
					//var text = paper.text(220,200,arr4_text).attr(text_attr);
				});
			$('#canvas_container').animate(
					{height: '410px'}, {
						duration: 'slow',
						easing: 'easeOutQuad'
					});
					
			$('#ipo_text1').animate({opacity:1}, 352,'easeOutQuad',function(){$(this).css('display','block')})
		}//end viewArrow1
		
		function viewArrow2(){
			$('.ipo_text').css({display:'none',height:'0px'})
			paper.setSize(750, 410);
			
			arr2_rect.animate({height:150},352,'<');
			arr2.animate({x:136, y:148}, 352,'<');
			
			arr3_rect.animate({height:300},352,'<');
			arr3.animate({x:72, y:300}, 352,'<');
			
			arr4_rect.animate({height:350},352,'<');
			arr4.animate({x:8, y:350}, 352,'<',function(){
				});
			$('#canvas_container').animate(
					{height: '410px'}, {
						duration: 'slow',
						easing: 'easeOutQuad'
					});
					
			$('#ipo_text2').animate({opacity:1}, 352,'easeOutQuad',function(){$(this).css('display','block')})
		}//end viewArrow2
		
		function viewArrow3(){
			$('.ipo_text').css({display:'none',height:'0px'})
			paper.setSize(750, 410);
			
			arr2_rect.animate({height:150},352,'<');
			arr2.animate({x:136, y:148}, 352,'<');
			
			arr3_rect.animate({height:212},352,'<');
			arr3.animate({x:72, y:210}, 352,'<');
			
			arr4_rect.animate({height:350},352,'<');
			arr4.animate({x:8, y:350}, 352,'<',function(){
				});
			$('#canvas_container').animate(
					{height: '410px'}, {
						duration: 'slow',
						easing: 'easeOutQuad'
					});
					
			$('#ipo_text3').animate({opacity:1}, 352,'easeOutQuad',function(){$(this).css('display','block')})
		}//end viewArrow3
		
		function viewArrow4(){
			$('.ipo_text').css({display:'none',height:'0px'})
			paper.setSize(750, 410);
			
			arr2_rect.animate({height:150},352,'<');
			arr2.animate({x:136, y:148}, 352,'<');
			
			arr3_rect.animate({height:212},352,'<');
			arr3.animate({x:72, y:210}, 352,'<');
			
			//var arr4_rect = paper.rect(8,0, 33, 274).attr({"fill":'#eb8b00', 'stroke':0, 'opacity':0});
			//var arr4 = paper.image("arrow4.png",8,272,695,35).attr({'opacity':0})
	
			arr4_rect.animate({height:274},352,'<');
			arr4.animate({x:8, y:272}, 352,'<',function(){
				});
			$('#canvas_container').animate(
					{height: '410px'}, {
						duration: 'slow',
						easing: 'easeOutQuad'
					});
					
			$('#ipo_text4').animate({opacity:1}, 352,'easeOutQuad',function(){$(this).css('display','block')})
		}//end viewArrow4
		
	$('svg image').hover(function(){$(this).css('cursor','pointer')}) //add pointer to arrows
	
	arrowClickHandlers(viewArrow2);
}