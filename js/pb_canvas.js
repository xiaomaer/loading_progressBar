var mycanvas = document.getElementById("mycanvas"),
	ctx = mycanvas.getContext("2d"),
	particles = [],//像素位置
	particleNum = 25;//像素个数

function setCanvasBg() {
	//整个画布的颜色
	ctx.fillStyle = "#272822";
	ctx.fillRect(0, 0, 400, 200);
	//指定进度条区域的颜色
	ctx.fillStyle = "#171814";
	ctx.fillRect(25, 80, 350, 25);
	//绘制字体，即显示百分比
	ctx.font = " 14px Arial";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
}

function ProgressBar() {
	this.hue = 0; //色调
	this.width = 0; //进度条宽度
	//填充指定宽度的进度条
	this.draw = function() {
		//通过改变hsla()函数的第一个参数值，不同百分比显示不同颜色
		//hsla(色调，饱和度，亮度，透明度)，色调：0-360
		ctx.fillStyle = 'hsla(' + this.hue + ', 100%, 40%, 1)';
		ctx.fillRect(25, 80, this.width, 25);
		//创建线性渐变区域
		var gradient = ctx.createLinearGradient(0, 0, 0, 180);
		//渐变开始颜色，0表示开始颜色
		gradient.addColorStop(0, "transparent");
		//渐变结束颜色，1表示结束颜色
		gradient.addColorStop(1, "rgba(0,0,0,0.5)");
		//填充颜色
		ctx.fillStyle = gradient;
		//填充矩形区域，实现不同透明度的遮罩层
		ctx.fillRect(25, 80, this.width, 25);
		//显示进度百分比
		var percent = (this.width / 350 * 100).toFixed(2);
		ctx.fillStyle = "white";
		ctx.fillText(percent + "%", 340, 60);
	};
}
//绘制彩色像素
function Particle() {
	this.x = 23 + bar.width;
	this.y = 82;
	this.vx = 0.8 + Math.random() * 1;
	this.v = Math.random() * 5;
	this.g = 1 + Math.random() * 3;
	this.down = false;
	this.draw = function() {
		ctx.fillStyle = 'hsla(' + (bar.hue + 0.3) + ', 100%, 40%, 1)';;
		var size = Math.random() * 2;
		ctx.fillRect(this.x, this.y, size, size);
	};
}
//根据像素位置数组绘制一系列像素点
function update() {
	for (var i = 0; i < particles.length; i++) {
		var p = particles[i];
		p.x -= p.vx; //x坐标
		if (p.down == true) {
			p.g += 0.1;
			p.y += p.g; //y坐标
		} else {
			if (p.g < 0) {
				p.down = true;
				p.g += 0.1;
				p.y += p.g;
			} else {
				p.y -= p.g;
				p.g -= 0.1;
			}
		}
		p.draw();
	}
}
var bar = new ProgressBar();

function draw() {
	setCanvasBg(); //画布背景色和进度条背景色
	bar.hue += 0.8; //hsla()色调变化
	bar.width += 2; //进度条宽度变化
	if (bar.width >= 350) { //达到最大宽度，不再定时
		particles = []; //清空存储像素对象的数组，执行update()时不再绘制
		clearInterval(timer);
	} else {
		//存储像素对象
		for (var i = 0; i < particleNum; i += 10) {
			particles.push(new Particle());
		}
	}
	bar.draw(); //渐变背景进度条动画
	update(); //渐变像素动画
}
var timer = setInterval(draw, 1000 / 60);