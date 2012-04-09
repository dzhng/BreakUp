
var _ie_frame = document.createElement("IFRAME"); 

var _ie_background = document.createElement("DIV");
_ie_background.style.width = "100%";
_ie_background.style.height = "100%";
_ie_background.style.position = "absolute";
_ie_background.style.top = "0px";
_ie_background.style.left = "0px";
_ie_background.style.background = "rgba(0,0,0,0.8)";
document.body.appendChild(_ie_background); 

var _ie_div = document.createElement("DIV");
_ie_background.appendChild(_ie_div); 
_ie_div.appendChild(_ie_frame);

_ie_frame.setAttribute("src", "breakup.html"); 
_ie_frame.style.width = "640px"; 
_ie_frame.style.height = "280px"; 
_ie_frame.frameBorder = "0";
_ie_frame.scrolling = "0";

_ie_div.style.position = "absolute";
_ie_div.style.top = "20%";
_ie_div.style.left = "50%";
_ie_div.style.width = "280px";
_ie_div.style.marginLeft = "-320px";
_ie_div.style.background = "white";
_ie_div.style.border = "5px solid";
_ie_div.style.borderColor = "rgb(11,72,107)";


