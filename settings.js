s("#flowos").addEventListener("change", () => {
	localStorage.flowlink = s("#flowos").value;
	if (!localStorage.flowlink.includes("https://")) {
		let newlcs = localStorage.flowlink.split("");
		newlcs.unshift("https://");
		localStorage.flowlink = newlcs.join("");
	}
	s("#flowos").value = localStorage.flowlink;
	checkCon();
});

s("#flowos").value = localStorage.flowlink;

s("#prxyl").addEventListener("change", () => {
	localStorage.prxylink = s("#prxyl").value;

	if (!localStorage.prxylink.includes("https://")) {
		let newlcs = localStorage.prxylink.split("");
		newlcs.unshift("https://");
		localStorage.prxylink = newlcs.join("");
	}
	s("#prxyl").value = localStorage.prxylink;
	checkCon();
});

s("#prxyl").value = localStorage.prxylink;

s("#panicurl").addEventListener("change", () => {
	localStorage.panicurl = s("#panicurl").value;
	if (!localStorage.panicurl.includes("https://")) {
		let newlcs = localStorage.panicurl.split("");
		newlcs.unshift("https://");
		localStorage.panicurl = newlcs.join("");
	}
	s("#panicurl").value = localStorage.panicurl;
	checkCon();
});

s("#panicurl").value = localStorage.panicurl;

document.onclick = () => {
	checkCon();
	localStorage.flowlink = s("#flowos").value;
	if (!localStorage.flowlink.includes("https://")) {
		let newlcs = localStorage.flowlink.split("");
		newlcs.unshift("https://");
		localStorage.flowlink = newlcs.join("");
	}
	if (!localStorage.flowlink && document.activeElement === document.body) {
		localStorage.flowlink = "https://mymaths.academy/";
	}
	localStorage.prxylink = s("#prxyl").value;
	s("#flowos").value = localStorage.flowlink;
	checkCon();

	if (!localStorage.prxylink.includes("https://")) {
		let newlcs = localStorage.prxylink.split("");
		newlcs.unshift("https://");
		localStorage.prxylink = newlcs.join("");
	}
	if (!localStorage.prxylink && document.activeElement === document.body) {
		localStorage.prxylink = "https://leclipse.onrender.com/";
	}
	localStorage.panicurl = s("#panicurl").value;
	s("#prxyl").value = localStorage.prxylink;
	checkCon();
	if (!localStorage.panicurl.includes("https://")) {
		let newlcs = localStorage.panicurl.split("");
		newlcs.unshift("https://");
		localStorage.panicurl = newlcs.join("");
	}
	if (!localStorage.panicurl && document.activeElement === document.body) {
		localStorage.panicurl = "https://google.com/";
	}
	localStorage.panicurl = s("#panicurl").value;
	s("#panicurl").value = localStorage.panicurl;
	checkCon();
};
