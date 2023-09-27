function everySecond() {
	s("#time").innerHTML =
		new Date().toLocaleTimeString() +
		"&nbsp;&nbsp;&nbsp;" +
		new Date().toLocaleDateString();
}

setInterval(everySecond, 1000);
everySecond();
