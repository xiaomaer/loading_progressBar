;
(function() {
	var mywidth = 0,
		doc = document,
		progress = doc.getElementById('percent'),
		count = doc.getElementById("num");

	function hasClass(elem, cName) {
		return elem.className.match(new RegExp("(\\s|^)" + cName + "(\\s|$)"));
	}

	function addClass(elem, cName) {
		if (!hasClass(elem, cName)) {
			elem.className += " " + cName;
		}
	}

	function loading() {
		mywidth += 5;
		//根据变化百分比动画切换到不同的背景色
		if (mywidth >= 100) {
			addClass(progress, "bg-blue");
			addClass(progress, "animate-finish"); //停止animation动画效果
			clearInterval(timer); //停止定时执行任务
		} else if (mywidth >= 75) {
			addClass(progress, "bg-green");
		} else if (mywidth >= 50) {
			addClass(progress, "bg-yellow");
		} else if (mywidth >= 25) {
			addClass(progress, "bg-orange");
		}
		progress.style.width = mywidth + "%";
		count.innerHTML = mywidth + "%";
	}
	var timer = setInterval(loading, 1000);
})();