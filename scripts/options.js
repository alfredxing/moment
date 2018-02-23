function onError(error) {
  console.log(`Error: ${error}`);
}

$(document).ready(function() {
let prefs = browser.storage.local.get('prefs');
  prefs.then((res) => {
    console.log(res['prefs']['background']);
    $("#background").val(res['prefs']['background']);
    $("#text").val(res['prefs']['text']);
    $("#temp").val(res['prefs']['temp']);
    $("#clock").val(res['prefs']['clock']);
    $("#tform").val(res['prefs']['tform']);
    $("#dform").val(res['prefs']['dform']);
    if (res['prefs']['loc'] === ':auto') {
      $("#loc").val('i.e. Dallas, TX');
    } else {
      $("#loc").val(res['prefs']['loc']);
    }
    $("#font").val(res['prefs']['font']);
    $("#zero").val(res['prefs']['zero']);
    $("#css").val(res['prefs']['css']);

    $("#save").click(function () {
      let background = $("#background").val();
      let text = $("#text").val();
      let temp = $("#temp").val();
      let clock = $("#clock").val();
      let tform = $("#tform").val();
      let dform = $("#dform").val();
      let loc = $("#loc").val();
      let font = $("#font").val();
      let zero = $("#zero").val();
      let css = $("#css").val();
      let settings = {
        background : background,
        text : text,
        degrees : "",
        temp : temp,
        clock : clock,
        expires : "",
        weather : "",
        tform : tform,
        dform : dform,
        loc : loc,
        font : font,
        zero : zero,
        css : css
      };
      let store = browser.storage.local.set({"prefs" : settings});
      store.then(null, onError);
      $("#save").addClass("btn-success").text("Saved");
    });
  });

	$("input").keyup(function() {
		$("#save").removeClass("btn-success").text("Save");
	});
	$("select").change(function() {
		$("#save").removeClass("btn-success").text("Save");
	})
});