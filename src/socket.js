window.io = io();

if(window.user) {
    io.emit('setActive', window.user);
}


const socket = (store) => {
    io.on('activeUsers', (activeUsers) => {
        store.dispatch({
            type: 'ACTIVE_USERS',
            activeUsers
        })
    })
}

export default socket;