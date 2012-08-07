
// determine rendering engine
var isWebKit = typeof navigator.userAgent.split("WebKit/")[1] !== "undefined";
var isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
var isMozilla = navigator.appVersion.indexOf('Gecko/') >= 0 || ((navigator.userAgent.indexOf("Gecko") >= 0) && !this.isWebKit && (typeof navigator.appVersion !== "undefined"));
if(isWebKit) {console.log("WebKit browser detected");}
if(isChrome) {console.log("Chrome browser detected");}
if(isMozilla) {console.log("Mozilla browser detected");}
if(!isWebKit && !isChrome && !isMozilla) {	// check support
	// unsupported browser, throw error
	console.error("Browser unsupported");
	alert("Sorry, your browser is not supported. Please switch to Firefox, Chrome, or Safari");

	var link = document.createElement("link");
	link.setAttribute("rel","stylesheet");
	link.setAttribute("href","breakup.css");
	var head = document.getElementsByTagName("head")[0];
	head.appendChild(link);

	var _ie_background = document.createElement("DIV");
	_ie_background.style.width = "100%";
	_ie_background.style.height = "100%";
	_ie_background.style.position = "absolute";
	_ie_background.style.top = "0px";
	_ie_background.style.left = "0px";
	_ie_background.style.background = "rgba(0,0,0,0.8)";
	_ie_background.style.zindex = "10000";
	document.body.appendChild(_ie_background); 

	var _ie_div = document.createElement("DIV");
	_ie_div.style.position = "absolute";
	_ie_div.style.top = "20%";
	_ie_div.style.left = "26%";
	_ie_div.style.marginLeft = "none";
	_ie_div.style.background = "white";
	_ie_div.style.border = "5px solid";
	_ie_div.style.borderColor = "rgb(11,72,107)";
	_ie_div.style.zindex = "10000";
	_ie_background.appendChild(_ie_div); 

	var _ie_frame = document.createElement("IFRAME"); 
	_ie_frame.setAttribute("src", "breakup.html"); 
	_ie_frame.style.width = "640px"; 
	_ie_frame.style.height = "280px"; 
	_ie_frame.frameBorder = "0";
	_ie_frame.scrolling = "no";
	_ie_frame.style.marginBottom = "-5px";
	_ie_div.appendChild(_ie_frame);

	var _ie_kill = document.createElement("DIV");
	_ie_kill.style.position = "absolute";
	_ie_kill.style.top = "250px";
	_ie_kill.style.left = "240px";
	_ie_kill.innerHTML = 
		'<a href="javascript:void(0)" onclick="_remove_ie();">Take me there anyways</a>';
	_ie_div.appendChild(_ie_kill);

	function _remove_ie() {
		// go through elements backwards and remove all
		_ie_div.removeChild(_ie_kill);
		_ie_div.removeChild(_ie_frame);
		_ie_background.removeChild(_ie_div);
		document.body.removeChild(_ie_background);
	};
}
