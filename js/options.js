chrome.storage.sync.get(['background','text','temp','clock','tform','dform'], function(r) {
	$("#background").val(r['background']);
	$("#text").val(r['text']);
	$("#temp").val(r['temp']);
	$("#clock").val(r['clock']);
	$("#tform").val(r['tform']);
	$("#dform").val(r['dform']);
});

$(document).ready(function() {
	$("#save").click(function () {
		var background = $("#background").val();
		var text = $("#text").val();
		var temp = $("#temp").val();
		var clock = $("#clock").val();
		var tform = $("#tform").val();
		var dform = $("#dform").val();
		chrome.storage.sync.set({background:background, temp:temp, clock:clock, text:text, tform:tform, dform:dform}, function() {
			console.log('Moment: settings saved');
			$("#save").addClass("btn-success").text("Saved");
		});
	});
	$("input").keyup(function() {
		$("#save").removeClass("btn-success").text("Save");
	});
	$("select").change(function() {
		$("#save").removeClass("btn-success").text("Save");
	})
})