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
	s("#flowos").value = localStorage.flowlink;
	checkCon();
	localStorage.prxylink = s("#prxyl").value;

	if (!localStorage.prxylink.includes("https://")) {
		let newlcs = localStorage.prxylink.split("");
		newlcs.unshift("https://");
		localStorage.prxylink = newlcs.join("");
	}
	s("#prxyl").value = localStorage.prxylink;
	checkCon();
	localStorage.panicurl = s("#panicurl").value;
	if (!localStorage.panicurl.includes("https://")) {
		let newlcs = localStorage.panicurl.split("");
		newlcs.unshift("https://");
		localStorage.panicurl = newlcs.join("");
	}
	s("#panicurl").value = localStorage.panicurl;
	checkCon();
};
