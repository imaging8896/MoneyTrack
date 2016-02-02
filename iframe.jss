//pass parameter to iframe by change src
function deIframe(iframeId) {
	this.iframe = document.getElementById(iframeId);
	this.hasParameter = false;
	this.parameters = '';
	this.frameSrc = '';
	
	var src = this.iframe.src;
	if(src.search("\\?") === -1) {
		this.frameSrc = src;
		this.hasParameter = false;
	} else {
		this.frameSrc = src.substr(0, src.search("\\?"));
		this.parameters = src.substr(src.search("\\?"));
		this.hasParameter = true;
	}
	
	this.addParameter = function(key, value) {
		if(this.hasParameter) {
		    this.parameters = this.parameters + '&' + key + '=' + value;
		} else {
			this.parameters = '?' + key + '=' + value;
			this.hasParameter = true;
		}
		
		this.resetSrc();
	}
	
	this.addParameters = function(keys, values) {
		for(var i = 0; i < keys.length; i++) {
			this.addParameter(keys[i], values[i]);
		}
	}
	
	this.clearParameters = function() {
		this.hasParameter = false;
		this.parameters = '';
		
		this.resetSrc();
	}
	
	this.resetSrc = function() {
		this.iframe.src = this.frameSrc + this.parameters;
	}
}
