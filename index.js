var express = require('express.io');
var app = express().http().io();

app.configure(function(){
    app.use(express.static(__dirname + '/public'));
});

// Broadcast all draw clicks.
app.io.route('type', function(req) {
    req.io.broadcast('update', req.data)
})


app.listen(80);