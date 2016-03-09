//设置进度条参数
//elem:进度条元素
//option：进度条改变参数，为对象，包括属性{width:"",height:"",time:"",color:""}
function setProgress(elem, option) {
	//进度条完成时间
	if (option.time !== "" || option.time !== undefined) {
		elem.style.transitionDuration = option.time;
	}
	//进度条边框外发光颜色
	if (option.color !== "" || option.color !== undefined) {
		var boxShadow = '0px 0px 10px 1px ' + option.color + ', 0 0 1px ' + option.color + ', 0 0 1px ' + option.color + ', 0 0 1px ' + option.color + ', 0 0 1px ' + option.color + ', 0 0 1px ' + option.color + ', 0 0 1px ' + option.color;
		elem.style.boxShadow = boxShadow;
	}
	//进度条宽度
	if (option.width !== "" || option.width !== undefined) {
		elem.style.width = option.width;
		elem.nextElementSibling.innerHTML = option.width;
	}
	//进度条高度
	if (option.height !== "" || option.height !== undefined) {
		elem.style.height = option.height;
		elem.parentElement.style.height = option.height;
	}
}
window.onload = function() {
	var doc = document,
		changeWidth = doc.getElementById('default'),
		changeTime = doc.getElementById('time'),
		changeHeight = doc.getElementById('height'),
		changeColor = doc.getElementById('color'),
		mywidth = 0;

	//进度百分比
	setProgress(changeWidth, {
		width: '50%'
	});
	//进度完成所需时间
	setProgress(changeTime, {
		width: '50%',
		time: '5s'
	});
	//进度条高度
	setProgress(changeHeight, {
		width: '30%',
		height: '15px'
	});
	//进度条发光颜色
	setProgress(changeColor, {
		width: '70%',
		color: 'blue'
	});
};