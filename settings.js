s("#flowos").addEventListener("change", () => {
	localStorage.flowlink = s("#flowos").value;
	checkCon();
});

s("#flowos").value = localStorage.flowlink;
