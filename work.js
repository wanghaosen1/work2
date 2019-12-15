window.onload = function(){
	var box = document.getElementById('box');
var oNavlist = document.getElementById('nav').children;
var slider = document.getElementById('slider');
var left = document.getElementById('left');
var right = document.getElementById('right');
var index = 1;
var timer;
var isMoving = false;
function next(){
	index++;
	navChange();
	animate(slider,{left:-1200*index},function(){
		if(index === 6){
			slider.style.left = "-1200px";
			index = 1;
		}
	});
}
function prev(){
	index--;
	animate(slider,{left:-1200*index},function(){
		if(index === 6){
			slider.style.left = "-1200px";
			index = 1;
		}
	})
}
var timer = setInterval(next,2000);		
box.onmouseover = function(){
animate(left,{opacity:50});
animate(right,{opacity:50});
clearInterval(timer);
}
box.onmouseout = function(){
	animate(left,{opacity:0});
	animate(right,{opacity:0});
	timer = setInterval(next,2000);
}
	right.onclick = next;
left.onclick = prev;
for(var i = 0;i<oNavlist.length;i++){
	oNavlist[i].idx = i;
	oNavlist[i].onclick = function(){
		index = this.idx + 1;
		navChange();
		animate(slider,{left:-1200*index})
	}
}
function navChange(){
	for(var i = 0;i<oNavlist.length;i++){
		oNavlist[i].className = ' ';
	}
	if(index === 6){
		oNavlist[0].className = 'active';
	}else{
		oNavlist[index - 1].className = 'active';
	}
		}
}
