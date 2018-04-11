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
    var cssClass = "green";
    var interval = setInterval(function () {
    	if(!isPause){
	    	//console.log("tick");
	    	try {	
	    		document.getElementById('wk-type').innerHTML = type.toUpperCase();
	    		document.getElementById('wk-timer').innerHTML = timer;
	    		document.getElementById('wk-timer').className = cssClass;
	    		document.getElementById('cc-timer').innerHTML = cycles;
	    		
	    		timer--;
		        if (timer < 0) {
		        	
		        	tizen.feedback.play("CHARGING_ERROR", "TYPE_SOUND");    		    
		        		
	        		if(type == "work"){
	        			navigator.vibrate(500);
	        			type = "pause";
	        			cssClass = "red";
	        			timer = paSec;		        			
	        		}else{
	        			navigator.vibrate(200);
	        			type = "work";
	        			cssClass = "green";
	        			timer = wkSec;
	        			
	        			cycles--;
	        			if(cycles <= 0){
			        		clearInterval(interval);
			        		document.getElementById('cc-timer').innerHTML = cycles;
			        		document.getElementById('pause-btn').innerHTML = "Back";
			        	    document.getElementById('pause-btn').onclick = function(){
			        	    	window.location = "index.html";
			        	    }
	        			}
	        		}
		        	
		        	
		        }
	    	} catch (err) {
    		    console.log(err.name + ': ' + err.message);
    		}
	    }
	}, 
    1000);
    
    
}

