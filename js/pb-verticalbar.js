;
(function() {
	var doc = document,
		bar = doc.getElementById("bar"),
		triangle = doc.getElementById("triangle"),
		height = 0,
		timer = setInterval(function() {
			if (height >= 100) {
				triangle.style.animation = "none";
				triangle.style.display = "none";
				clearInterval(timer);
			} else {
				height += 5;
				bar.style.height = height + "%";
				bar.innerHTML = height + "%";
			}
		}, 500);
})();