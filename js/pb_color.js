var SetPercent = (function() {
	var width = 0,
		speed = 25,
		doc = document,
		bar = doc.getElementById("bar"),
		num = doc.getElementById("num");
	//不同百分比，进度条颜色不同
	function progress() {
		if (width >= 100) {
			width = 0;
			bar.style.backgroundColor = "#f27011";
		} else if (width >= 75) {
			bar.style.backgroundColor = "#86e01e";
		} else if (width >= 50) {
			bar.style.backgroundColor = "#f2d31b";
		} else if (width >= 25) {
			bar.style.backgroundColor = "#f2b01e";
		}
		width += speed;
		bar.style.width = width + "%";
		num.innerHTML = width + "%";
	}
	return {
		setPercent: progress
	}
})();
document.getElementById("addpercent").addEventListener("click", SetPercent.setPercent, false);