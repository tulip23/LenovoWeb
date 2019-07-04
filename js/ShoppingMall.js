window.onload = function(){
	//------------------吸顶	-----------------
	var Nav = document.getElementById("header");
	var Naver = document.getElementById("heng");				
	document.onscroll = function(){
		var oTop = document.documentElement.scrollTop
		console.log(document.documentElement.scrollTop)
//		距离顶部的距离为138.38px
		if(oTop >= 31.2){
			Nav.style.display = 'none';
			Naver.style.display = 'block';
		    Naver.style.top = 0;
		    Naver.style.position = 'fixed';
		   }else{
			Naver.style.display = 'none';
			Nav.style.display = 'block';
		   }
	}
	//侧边栏显示隐藏
	
	
	var fix = document.getElementById('fixed')
	if(oTop>100){
		alert('bbbbb')
		fix.style.display = 'block';
	}
	else{
		fix.style.display = 'none';
	}
//-------------------轮播--------------------

	var oPicsBox = document.getElementById('picsbox');
	var oPic = document.getElementsByClassName('pic');
	var oBefore = document.getElementById('before');
	var oNext = document.getElementById('next');	
	movebox();
	
	//定义一个全局变量iNow
	var iNow = 0;

	//定时器 						
	function movebox(){
		timer = setInterval(function(){
			iNow++;
			console.log('zidong'+iNow);
			
			if(iNow>oPic.length-1){
				iNow = 0;
				move();
				oPicsBox.style.transition = '';
			}else{
				oPicsBox.style.transition = 'left .2s';
				move();
			}
		},3000)	
	}
	
	//整个ul向左移动800像素
	function move(){			
		var movel = -(iNow)*1519;
		console.log(movel)
		//拼接 800和px
		oPicsBox.style.left = movel + 'px';
	}
	
	//向前
	oBefore.onclick = function(){
		clearInterval(timer);
		iNow -- ;
		if(iNow<0){
			iNow = oPic.length-1;
		}
		console.log('前'+iNow);
		move();
		movebox();
	}
	//向后
	oNext.onclick = function(){
		clearInterval(timer);
		iNow ++ ;
		if(iNow>oPic.length-1){
			iNow = 0;
		}
		console.log('后'+iNow);
		move();
		movebox();
	}
	
	
	
	//-----------------倒计时-------------------
				var intDiff = parseInt(172800);//倒计时总秒数量
				function timer(intDiff){
				    setInterval(function(){
				    var day=0,
				        hour=0,
				        minute=0,
				        second=0;    
				   		if(intDiff > 0){
					        day = Math.floor(intDiff / (60 * 60 * 24));
					        hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
					        minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
					        second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
					    }
				    if (minute <= 9) minute = minute;
				    if (second <= 9) second = second;
					    $('.hour').html(hour);
					    $('.minute').html(minute);
					    $('.second').html(second);
					    intDiff--;
					}, 1000);
				} 
				$(function(){
				    timer(intDiff);
				}); 

}
