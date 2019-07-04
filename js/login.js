$(document).ready(function() {
	    /*这是一个自定义的函数,作用是设置class1类为隐藏,class2类显示*/
	function showDiv(class1, class2) {
		$(class1).css("display", "none");
		$(class2).css("display", "block");
	}
	/*给图标设置点击事件*/
	$('.app .top img').click(function() {
		showDiv(".app", ".pc");
	})
	$('.pc .top .toggle').click(function() {
		showDiv(".pc", ".app");
	})
	
	$('.loginalert').click(function(){
		$('.all').show()
	})
	
	$('.close').click(function(){
//		alert('tantan')
		$('.all').hide();
	})
})