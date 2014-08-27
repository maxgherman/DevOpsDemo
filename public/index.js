
$(function() {

    'use strict';

    var socket = io.connect();
    var userInput = $(".user-input");

    socket.on('update', function(data) {
        updateView(data);
    });

    userInput.keyup(function(e) {
        var value = userInput.val();

        updateView(value);
        socket.emit('type', value); // Broadcast draw.
    });

    function updateView(text){
        $(".text").text(text);
    }
});