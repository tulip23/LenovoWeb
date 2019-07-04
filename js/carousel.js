window.onload = function(){
	
	var num = 0;
	var timer = 0;
	//定时器自动轮播
	function auto(){ 
		timer = setInterval(function(){ //设置自动播放的定时器
			next();
			iconHover(num);
			},3000) 
		}
	auto();
	
	$("#next").click(function(){ 
		//下一张
		next();
	});
	$("#before").click(function(){
		//上一张
		before();
	})
	
	function next(){
		num++;
		if(num>7){
		/*
		当图片到最后一张时跳回第一张，本例中在最后一张中放入了第一张的图片，为实现无缝切换图片的效果。
		*/
		$("#picsbox").animate({left:-(num)*1519},500); 
		 num = 0;
		$("#picsbox").animate({left:0},0); //
	}
		
	    $("#picsbox").animate({left:-num*1519},500);
	    iconHover(num);
}
	
		function before(){
		num--;
		if(num < 0 ){
			num = 0;
			$("#picsbox").animate({left:-(num+1)*1519},0);
		}
		$("#picsbox").animate({left:-num*1519},500);
		iconHover(num);
	}
				//鼠标碰触圆点图标实现图片左右轮播
		$(".icon-list li").mouseover(function(){ 
			var num = $(this).index();
			$("#picsbox").animate({left:-num*1519},500);
			iconHover(num);
		})
			//实现被选图片对应圆点图标索引更新
		function iconHover(index){
			$(".icon-list li").eq(index).addClass("active").siblings().removeClass("active");
		}
			
			$("#box").mouseover(function(){ 
				//鼠标移入 定时器取消
				clearInterval(timer);
			})
			$("#box").mouseleave(function(){ 
				//鼠标离开 定时器开启
				auto();
			}) 
			
			
			
			
			
			
			
			
			
			
			
			
			
			//-------------------底部轮播------------------------
			
			
}
