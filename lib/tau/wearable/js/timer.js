console.log("start");
var isPause = false;


function startTimer(wkSec,paSec, cycles) {
	
	document.getElementById('pause-btn').onclick = function(){
		if(isPause){
			isPause = false;
			this.innerHTML = "Pause"
		}else{
			isPause = true;
			this.innerHTML = "Resume"
		}
	}
	
    var timer = wkSec;
    var type = "work";
    var cssClass = "red";
    var interval = setInterval(function () {
    	if(!isPause){
	    	console.log("tick");
	    	try {	
	    		document.getElementById('wk-type').innerHTML = type.toUpperCase();
	    		document.getElementById('wk-timer').innerHTML = timer;
	    		document.getElementById('wk-timer').className = cssClass;
	    		document.getElementById('cc-timer').innerHTML = cycles;
		
		        if (--timer < 0) {
		        	cycles--;
		        	if(cycles < 0){
		        		clearInterval(interval);
		        	}else{	        		
	        		    tizen.feedback.play("SIP", "TYPE_SOUND");
		        		
		        		if(type == "work"){
		        			navigator.vibrate(1000);
		        			type = "pause";
		        			cssClass = "green";
		        			timer = paSec;
		        		}else{
		        			navigator.vibrate(1000);
		        			type = "work";
		        			cssClass = "red";
		        			timer = wkSec;
		        		}
		        	}
		        	
		        }
	    	} catch (err) {
    		    console.log(err.name + ': ' + err.message);
    		}
	    }
	}, 
    1000);
    
    document.getElementById('pause-btn').innerHTML = "Back";
    document.getElementById('pause-btn').onclick = function(){
    	window.location = "index.html";
    }
}

