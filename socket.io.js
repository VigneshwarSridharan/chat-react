var socket = require('socket.io');
var passport = require('./passport');

var activeUsers = []
module.exports = function (app) {
    var io = socket(app);
    io.on('connection', function (socket) {
        activeUsers.push(socket);
        socket.on('disconnect', function() {
            activeUsers.splice(activeUsers.findIndex(f => f.id == socket.id),1);
            console.log('-----')
            console.log(activeUsers.map(m => m.id)); 
            console.log('-----')
        });
        console.log(activeUsers.map(m => m.id)); 
    });

    return io;
};


