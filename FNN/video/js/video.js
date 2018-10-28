//Video on FNN Javascript
//This code allows for the user to select a video from the playlist and have that choice transfer over to the video player
$(function() {
    $("#playlistitem li").on("click", function() {
        $("#videoarea").attr({
            "src": $(this).attr("url"),
            "poster": "",
            "autoplay": "autoplay"
        })
    })
    $("#videoarea").attr({
        "src": $("#playlistitem li").eq(0).attr("url"),
        "poster": $("#playlistitem li").eq(0).attr("poster")
    })
})