$(document).ready(function () {
    $("button").click(showPopup);

    $("#closeIcon").click(closePopup);

    showPopup();


    function center() {
        var modal = $("#modal");

        // Get the distance from the edge of the window to its center
        var top = Math.max($(window).height() - modal.outerHeight(), 0) / 2;
        var left = Math.max($(window).width() - modal.outerWidth(), 0) / 2;

        // Position the modal window using absolute positioning.
        // .scrollTop and .scrollLeft give the number of pixels hidden offscreen
        // because the window has been scrolled
        modal.css("top", top + $(window).scrollTop());
        modal.css("left", left + $(window).scrollLeft());
    }

    function showPopup() {
        // Center the popup
        // center();

        // Tell the window (browser) to re-center the popup when it is resized
        // $(window).resize(center);

        // Show the transparent overlay that stops the user from interacting
        // with anything underneath
        $("#overlay").show();

        // Show the modal window
        $("#modal").show();
    }

    function closePopup() {
        // Hide the transparent overlay
        $("#overlay").hide();

        // Hide the modal content
        $("#modal").hide();

        // The browser can stop resizing the modal now
        // $(window).off("resize");
    }
});