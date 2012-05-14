window.onload = function() {
    var paper = new Raphael(document.getElementById('canvas_container'), 760,360);
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
	
	var arr2 = paper.image("arrow2.png",136,148,469,34)
	var arr2_rect = paper.rect(136,0, 33, 150).attr({"fill":'#a41f20', 'stroke':0});
	
	var arr3 = paper.image("arrow3.png",72,210,587,35)
	var arr3_rect = paper.rect(72,0, 33, 212).attr({"fill":'#dc6900', 'stroke':0});
	
	var arr4 = paper.image("arrow4.png",8,272,695,35)
	var arr4_rect = paper.rect(8,0, 33, 274).attr({"fill":'#eb8b00', 'stroke':0});
	var arr4_textHeader = "THIS IS WHERE TEXT CAN GO"
	var arr4_text = "At vero eos et accusamus et iusto odio dignissimos\nducimus qui blanditiis praesentium voluptatum deleniti\nquos dolores et quas molestias."
	arr1.click(function(){
		paper.setSize(760, 410);
		arr2_rect.animate({height:252, delay: 700},500,'<');
		arr2.animate({x:136, y:250}, 500,'<');
		
		arr3_rect.animate({height:300},500,'<');
		arr3.animate({x:72, y:300}, 500,'<');
		
		arr4_rect.animate({height:350},500,'<');
		arr4.animate({x:8, y:350}, 500,'<',function(){
				var textHead  = paper.text(210,155,arr4_textHeader).attr(textHeader_attr);
				var text = paper.text(220,200,arr4_text).attr(text_attr);
			});
		
		
		$('#canvas_container').animate(
                {height: '410px'}, {
                    duration: 'slow',
                    easing: 'easeOutQuad'
                });
		
		
	})//end arr1.click
	
}