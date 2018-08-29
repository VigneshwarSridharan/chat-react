var socket = require('socket.io');
var passport = require('./passport');

var activeUsers = []
module.exports = function (app) {
    var io = socket(app);
    io.on('connection', function (socket) {
        activeUsers.push(socket);
        socket.on('setActive',(data) => {
            var userInx = activeUsers.findIndex(f => f.id == socket.id);
            activeUsers[userInx].user = data;
            var authUsers = activeUsers.filter(f => f.user);
            authUsers.map(user => {
                user.emit('activeUsers',activeUsers.map(m => m.user).filter(f => f));
                console.log(authUsers.map(m => m.user)); 
            })
        })
        socket.on('disconnect', function() {
            activeUsers.splice(activeUsers.findIndex(f => f.id == socket.id),1);
            activeUsers.map(user => {
                user.emit('activeUsers',activeUsers.map(m => m.user).filter(f => f && f.id != socket.id));
            })
        });
    });

    return io;
};


