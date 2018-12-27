function floatEl(el, index) {	
	var alfa = 0;
	el.style.position = 'absolute';
	el.style.zIndex = 10;
	document.body.appendChild(el);
	setInterval(function () {
	  var x = (window.innerWidth/2 - 100) + (250 * Math.cos((alfa + (index * 25)) * Math.PI/180));
	  var y = (window.innerHeight/2 - 100) + (250 * Math.sin((alfa + (index * 10)) * Math.PI/180));    
	  el.style.top = y + 'px';
	  el.style.left = x + 'px';
	  alfa+= 10;
	  if(alfa > 360) alfa = 0;	  
	}, 100);
}

function floatIt(selector) {
 var elems = document.querySelectorAll(selector);
 for(var i = 0; i < elems.length; i++) floatEl(elems[i], i); 
}

/*
Usage:
  floatIt('.rc .r h3');
  floatIt('img');
*/
