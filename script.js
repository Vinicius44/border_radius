//Modificar as bordas

topLeft = document.querySelector('#topLeft');
topRight = document.querySelector('#topRight');
bottomLeft = document.querySelector('#bottomLeft');
bottomRight = document.querySelector('#bottomRight');


textArea = document.querySelector('#textArea');
divBorder = document.querySelector('.borderRadius');





function apagarTextAreaTopLeft(){
	topLeftP = document.querySelector('#textArea > .topLeftP');

	if(topLeftP){
		topLeftP.parentNode.removeChild(topLeftP);
	}
	
}


function apagarTextAreaTopRight(){
	topRightP = document.querySelector('#textArea > .topRightP');

	if(topRightP){
		topRightP.parentNode.removeChild(topRightP);
	}
	
}

function apagarTextAreaBottomLeft(){
	bottomLeftP = document.querySelector('#textArea > .bottomLeftP');

	if(bottomLeftP){
		bottomLeftP.parentNode.removeChild(bottomLeftP);
	}
	
}


function apagarTextAreaBottomRight(){
	bottomRightP = document.querySelector('#textArea > .bottomRightP');

	if(bottomRightP){
		bottomRightP.parentNode.removeChild(bottomRightP);
	}
	
}

topLeft.addEventListener("keyup", function(){
		
      	
      	
      	divBorder.style.borderTopLeftRadius =+  topLeft.value+"px";
      	
      
      	if(topLeft.value == 0){
      		apagarTextAreaTopLeft();
      	}else if(topLeft.value <= 999){
      		apagarTextAreaTopLeft();
      		textArea.innerHTML += "<p class='topLeftP'>border-top-left-radius: "+topLeft.value+"px;<br/> -webkit-border-top-left-radius:"+topLeft.value+"px;<br/>-moz-border-radius-topleft:"+topLeft.value+"px;</p>";
    		//textArea.value += "-moz-border-radius-bottomleft:"+topLeft.value+"px";
      	}

}, false);

topRight.addEventListener("keyup", function(){
		
      	divBorder.style.borderTopRightRadius =+  topRight.value+"px";

      	if(topRight.value == 0){
      		apagarTextAreaTopRight();
      	}else if(topLeft.value <= 999){
      		apagarTextAreaTopRight();
      		textArea.innerHTML += "<p class='topRightP'>border-top-right-radius: "+topRight.value+"px;<br/> -webkit-border-top-right-radius:"+topRight.value+"px;<br/>-moz-border-radius-topright:"+topRight.value+"px;</p>";
    		//textArea.value += "-moz-border-radius-bottomleft:"+topLeft.value+"px";
      	}


}, false);

bottomLeft.addEventListener("keyup", function(){
		
      	divBorder.style.borderBottomLeftRadius =+  bottomLeft.value+"px";

      	if(bottomLeft.value == 0){
      		apagarTextAreaBottomLeft();
      	}else if(bottomLeft.value <= 999){
      		apagarTextAreaBottomLeft();
      		textArea.innerHTML += "<p class='bottomLeftP'>border-bottom-left-radius: "+bottomLeft.value+"px;<br/> -webkit-border-bottom-left-radius:"+bottomLeft.value+"px;<br/>-moz-border-radius-bottomleft:"+bottomLeft.value+"px;</p>";
    		//textArea.value += "-moz-border-radius-bottomleft:"+topLeft.value+"px";
      	}

}, false);

bottomRight.addEventListener("keyup", function(){
		
      	divBorder.style.borderBottomRightRadius =+  bottomRight.value+"px";

      	if(bottomRight.value == 0){
      		apagarTextAreaBottomRight();
      	}else if(bottomRight.value <= 999){
      		apagarTextAreaBottomRight();
      		textArea.innerHTML += "<p class='bottomRightP'>border-bottom-right-radius: "+bottomRight.value+"px;<br/> -webkit-border-bottom-right-radius:"+bottomRight.value+"px;<br/>-moz-border-radius-bottomright:"+bottomRight.value+"px;</p>";
    		//textArea.value += "-moz-border-radius-bottomleft:"+topLeft.value+"px";
      	}

}, false);


