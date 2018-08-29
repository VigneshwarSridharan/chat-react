import React from 'react';
import { connect } from 'react-redux'
import http from 'axios';

import Dashboard from './layout/dashboard';
import Public from './layout/Public';


const App = (props) => {
    if(!props.user) {
        return (
            <Public setUser={props.setUser} user={props.user}/>
        )
    }
    return (
        <Dashboard
            sidebarIsOpen={props.sidebarIsOpen}
            user={props.user}
            toggleSidebar={props.toggleSidebar}
            activeUsers={props.activeUsers}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        sidebarIsOpen: state.sidebarIsOpen,
        user: state.user,
        activeUsers: state.activeUsers
    }
}

const mapDispactToProps = (dispatch) => {
    return {
        toggleSidebar: () => {
            dispatch({
                type: 'TOGGLE_SIDEBAR'
            })
        },
        setUser: (user) => {
            dispatch({
                type: 'SET_USER',
                user
            })
        }
    }
}

export default connect(mapStateToProps, mapDispactToProps)(App);