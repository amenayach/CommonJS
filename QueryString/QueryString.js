//Case Sensitive
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


//Case InSensitive
function getQueryString(name) {
	name = name.replace(/[\[]/i, "\\[").replace(/[\]]/i, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)", "i"),
		results = regex.exec(location.search);
	return results === null ? "" : decodeURIComponent(results[1].replace(/\+/gi, " "));
}