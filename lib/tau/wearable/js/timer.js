console.log("start");

function startTimer(wkSec,paSec, cycles, display) {
    var timer = wkSec;
    var type = "work";
    var interval = setInterval(function () {
    	console.log("tick");
    	
    	
        display.innerHTML = type+" : "+timer+", cycle:"+cycles;

        if (--timer < 0) {
        	cycles--;
        	if(cycles < 0){
        		clearInterval(interval);
        	}else{
        		if(type == "work"){
        			type = "pause";
        			timer = paSec;
        		}else{
        			type = "work";
        			timer = wkSec;
        		}
        	}
        	
        }else{
        	timer--;
        }
    }, 1000);
}

