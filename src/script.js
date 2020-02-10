window.onload = function() {

	//signature aleatoire
	const signature = document.getElementById('signature'),
		victor = "<a href='https://victor-azevedo.me/'>Victor Azevedo</a>",
		tahoe = "<a href='https://tahoe.be'>Tahoe Beetschen</a>",
		concat = (Math.random() > .5 ? `${victor} & ${tahoe}` : `${tahoe} & ${victor}`);

	signature.innerHTML = "<p>Made in France with ❤️<br> by " + concat;
	

	//download for different browsers
	const dl_a = document.getElementById("mainDownload"),
		dl_img = document.getElementById("dl_icon"),
		dl_desc = document.getElementById("dl_desc");

	const isMobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? true : false);

	const isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0,
		isFirefox = typeof InstallTrigger !== 'undefined',
		isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification)),
		isChrome = !!window.chrome;

	if (isMobile || isOpera) {
		dl_a.href = "https://online.bonjourr.fr";
		dl_desc.innerText = "Try Bonjourr online";
		dl_img.style.display = "none";
	}
	else if (isFirefox) {
		dl_a.href = "https://addons.mozilla.org/en-US/firefox/addon/bonjourr-startpage/";
		dl_desc.innerText = "Get Bonjourr on Firefox";
		dl_img.src = "src/images/firefox.svg";
	}
	else if (isSafari) {
		dl_a.href = "#otherdl";
		dl_desc.innerText = "How to install on Safari";
		dl_img.src = "src/images/safari.svg";
	}
	else if (isChrome) {
		dl_a.href = "https://chrome.google.com/webstore/detail/bonjourr-startpage/dlnejlppicbjfcfcedcflplfjajinajd";
		dl_desc.innerText = "Get Bonjourr on Chrome";
		dl_img.src = "src/images/chrome.svg";
	}
	
	else {
		dl_a.href = "https://online.bonjourr.fr";
		dl_desc.innerText = "Try Bonjourr online";
		dl_img.style.display = "none";
	}
}