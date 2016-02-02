//add parameter to iframe src
function iframeCriteria(iframeId) {
	this.iframe = document.getElementById(iframeId);
	this.hasParameter = false;
	this.parameters = '';
	this.frameSrc = '';
	
	var srcStr = '' + this.iframe.src;
	if(this.iframe.src.search("\\?") === -1) {
		this.frameSrc = srcStr;
		this.hasParameter = false;
	} else {
		this.frameSrc = srcStr.substr(0, srcStr.search("\\?"));
		this.parameters = srcStr.substr(srcStr.search("\\?"));
		this.hasParameter = true;
	}
	
	this.addParameter = function(key, value) {
		if(this.hasParameter) {
		    this.parameters = this.parameters + '&' + key + '=' + value;
		} else {
			this.parameters = '?' + this.parameters + '&' + key + '=' + value;
			this.hasParameter = true;
		}
		
		this.resetSrc();
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
