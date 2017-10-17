

window.onload = function(){
	var speedDiv = document.getElementById("div1");
	speedDiv.onmouseover = function ()
	{
		startMove(0);
	}
	
	speedDiv.onmouseout = function ()
	{
		startMove(-200);
	}
	
	var timer = null;
	function startMove(target)
	{
		clearInterval(timer);
		var speedDiv = document.getElementById("div1");
		var speed = 0;
		if (speedDiv.offsetLeft>target) {
			speed = -10;
		} else{
			speed = 10;
		}
		
		timer = setInterval(function(){
			if (speedDiv.offsetLeft == target) {
				clearInterval(timer);
			}else{
				speedDiv.style.left = speedDiv.offsetLeft+speed+'px';	
			}
		},30);
	}
	
	
	var alphaDiv = document.getElementById("div2");
	var timer2 = null;
	var alpha = 0.3;
	alphaDiv.onmouseover = function()
	{
		clearInterval(timer2);
		timer2 = setInterval(function(){
			if (this.offsetApha<=0.3) {
				alpha += 0.1;
				this.style.opacity = alpha; 
			}else{
				clearInterval(timer2);
			}	
		},30);
		
	}
	
}
