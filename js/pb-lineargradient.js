window.onload = function() {
	var mywidth = 0,
		elem = document.getElementById('setWidth');
	var timer = setInterval(function() {
		if (mywidth >= 100) {
			elem.className += " finalcolor";
			elem.style.animation = "none";
			clearInterval(timer);
		} else {
			mywidth += 5;
			elem.style.width = mywidth + '%';
		}
	}, 500);
	//0.5*（100/5）+0.5=10.5（动画完成所需时间）；0.5为定时间隔时间，100为最大百分比，5为每次定时增加的百分比，10.5为bganimation动画所需时间
};