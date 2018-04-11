var elemSel = document.getElementById('wk-in');
//document.getElementById('wk-in-tr').className = "tr-border";


function setElement(element){
	var trs = document.getElementsByClassName("tr-border");
	for(i=0; i<trs.length; i++){
		trs[i].className = "";
	}
	elemSel = element;
	document.getElementById(elemSel.id + '-tr').className = "tr-border";
}

document.addEventListener('rotarydetent', function(ev) {
    var direction = ev.detail.direction;
    if(direction == "CW" && Number(elemSel.value) < 999){
    	elemSel.value = Number(elemSel.value) + 1;
    }else if(direction == "CCW" && Number(elemSel.value) > 0){     
    	elemSel.value = Number(elemSel.value) - 1;
    }
});