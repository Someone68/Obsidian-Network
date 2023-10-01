s("#flowos").addEventListener("change", () => {
	localStorage.flowlink = s("#flowos").value;
	checkCon();
});

s("#flowos").value = localStorage.flowlink;

s("#prxyl").addEventListener("change", () => {
	localStorage.prxylink = s("#prxyl").value;
	checkCon();
});

s("#prxyl").value = localStorage.prxylink;
