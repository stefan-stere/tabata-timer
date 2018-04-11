(function () {
	try {
		console.log("SCREEN_NORMAL")
		tizen.power.request('SCREEN', 'SCREEN_NORMAL');
	} catch (err) {
		console.log(err.name + ': ' + err.message);
	}
	
	window.addEventListener("tizenhwkey", function (ev) {
		if (ev.keyName === "back") {
			try {
				console.log("exiting...")
				tizen.application.getCurrentApplication().exit();
			} catch (err) {
				console.log(err.name + ': ' + err.message);
			}
		}
	});
}());