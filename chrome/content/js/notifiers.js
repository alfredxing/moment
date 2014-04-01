
var redditAPI = "http://www.reddit.com/message/unread.json";
var facebookAPI = "https://www.facebook.com/desktop_notifications/counts.php";

 
    fbdata = $.getJSON(facebookAPI, function() {
        $('#fbnotifier').append('Facebook: ' + fbdata.responseJSON.notifications.num_unread);
        });

    redditdata = $.getJSON(redditAPI, function() {
        $('#redditnotifier').append('Reddit: ' + redditdata.responseJSON.data.children.length);
        });

    