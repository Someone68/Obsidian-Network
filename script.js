function everySecond() {
	s("#time").innerHTML =
		new Date().toLocaleTimeString() +
		"&nbsp;&nbsp;&nbsp;" +
		new Date().toLocaleDateString();
}

setInterval(everySecond, 1000);
everySecond();

function checkCon() {
	if (localStorage.favicon) {
		if (localStorage.title) {
			if (
				localStorage.title.trim().length >= 1 &&
				localStorage.favicon.trim().length >= 1
			) {
				s("title").innerHTML = localStorage.title;
				s(".favicon").href = localStorage.favicon;
			}
		}
	}
}

checkCon();
window.onload = checkCon;

function disguise(img, text) {
	localStorage.favicon = img;
	localStorage.title = text;
	checkCon();
}

function customdis() {
	let text = prompt("Tab Name*: ");
	let favicon = prompt("Tab Icon Link (OPTIONAL): ");
	if (!favicon) {
		favicon = "not set will cause 404 but it fine";
	}
	localStorage.favicon = favicon;
	localStorage.title = text;
	checkCon();
	alert("Disguise Set!");
}

function cloak() {
	let tab = window.open("about:blank");
	tab.document.body.innerHTML = `<style>*{padding:0;margin:0;}html,body{width:100%;height:100vh}</style><iframe src="https://lunar-eclipse.pages.dev" style="border:0px #ffffff none;" name="lunar" scrolling="yes" frameborder="0" marginheight="0px" marginwidth="0px" height="100%" width="100%" allowfullscreen></iframe>`;
}

document.addEventListener("DOMContentLoaded", () => {
	if (!localStorage.already) {
		localStorage.showPanic = "Yes";
	}
	localStorage.already = "Yes";
});

function replaceGoogle() {
	location.replace("https://google.com");
}

function checkPanic() {
	if (localStorage.showPanic) {
		qsall(".panic", (button) => {
			button.style.display = "inline-block";
			button.addEventListener("click", replaceGoogle);
		});
	} else {
		qsall(".panic", (button) => {
			button.style.display = "none";
		});
	}
}

checkPanic();

document.addEventListener("keydown", (e) => {
	if (localStorage.showPanic) {
		if (e.key.toLowerCase() === "p") {
			replaceGoogle();
		}
	}
});

function togglePanic() {
	if (localStorage.showPanic) {
		localStorage.removeItem("showPanic");
	} else {
		localStorage.showPanic = "Yes";
	}
	checkPanic();
}
