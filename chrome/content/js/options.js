var prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefService).getBranch("extensions.moment.");

$("#background").val(prefs.getCharPref('background'));
$("#text").val(prefs.getCharPref('text'));
$("#temp").val(prefs.getCharPref('temp'));
$("#clock").val(prefs.getCharPref('clock'));
$("#tform").val(prefs.getCharPref('tform'));
$("#dform").val(prefs.getCharPref('dform'));
$("#loc").val(prefs.getCharPref('loc'));
$("#font").val(prefs.getCharPref('font'));
$("#zero").val(prefs.getCharPref('zero'));
$("#css").val(prefs.getCharPref('css'));

$(document).ready(function() {
	$("#save").click(function () {
		console.log("Saved");
		var background = $("#background").val();
		var text = $("#text").val();
		var temp = $("#temp").val();
		var clock = $("#clock").val();
		var tform = $("#tform").val();
		var dform = $("#dform").val();
		var loc = $("#loc").val();
		var font = $("#font").val();
		var zero = $("#zero").val();
		var css = $("#css").val();
		prefs.setCharPref('background', background);
		prefs.setCharPref('text', text);
		prefs.setCharPref('temp', temp);
		prefs.setCharPref('clock', clock);
		prefs.setCharPref('tform', tform);
		prefs.setCharPref('dform', dform);
		prefs.setCharPref('loc', loc);
		prefs.setCharPref('font', font);
		prefs.setCharPref('zero', zero);
		prefs.setCharPref('css', css);
		$("#save").addClass("btn-success").text("Saved");
	});
	$("input").keyup(function() {
		$("#save").removeClass("btn-success").text("Save");
	});
	$("select").change(function() {
		$("#save").removeClass("btn-success").text("Save");
	})
})