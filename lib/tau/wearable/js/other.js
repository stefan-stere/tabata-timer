var elemSel = document.getElementById('wk-in');


function setElement(element){
	elemSel = element;
}

document.addEventListener('rotarydetent', function(ev) {
    var direction = ev.detail.direction;
    if(direction == "CW"){
    	elemSel.value = Number(elemSel.value) + 1;
    }else if(Number(elemSel.value) > 0){    	
    	elemSel.value = Number(elemSel.value) - 1;
    }
});