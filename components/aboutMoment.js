const Cc = Components.classes;const Ci = Components.interfaces;
Components.utils.import("resource://gre/modules/XPCOMUtils.jsm");
function AboutMoment() {}
AboutMoment.prototype = {
	classDescription: "about:newtab",
	contractID: "@mozilla.org/network/protocol/about;1?what=newtab",
	classID: Components.ID("{C5645D5B-2ADD-4309-83D4-8437C1051183}"),
	QueryInterface: XPCOMUtils.generateQI([Ci.nsIAboutModule]),
	
	getURIFlags: function(aURI) {
		return Ci.nsIAboutModule.ALLOW_SCRIPT;
	},
	
	newChannel: function(aURI) {
		let ios = Cc["@mozilla.org/network/io-service;1"].getService(Ci.nsIIOService);
		let channel = ios.newChannel("chrome://moment/content/index.html",
			null, null);
		channel.originalURI = aURI;
		return channel;
	}
};
const NSGetFactory = XPCOMUtils.generateNSGetFactory([AboutMoment]);