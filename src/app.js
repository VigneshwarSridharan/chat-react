import React from 'react';
import { connect } from 'react-redux'

import Sidebar from './components/sidebar';
import Navigation from './components/navigation';
import Footer from './components/footer';

const App = (props) => {
    return (
        <div className={`${props.sidebarIsOpen ? 'is-collapsed':''}`}>
            <Sidebar sidebarIsOpen={props.sidebarIsOpen}/>
            <div className="page-container">
                <Navigation toggleSidebar={props.toggleSidebar} />
                <main className="main-content bgc-grey-100">
                    <div id="mainContent">

                    </div>
                </main>
                <Footer />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        sidebarIsOpen: state.sidebarIsOpen
    }
}

const mapDispactToProps = (dispatch) => {
    return {
        toggleSidebar: () => {
            dispatch({
                type: 'TOGGLE_SIDEBAR'
            })
        }
    }
}

export default connect(mapStateToProps, mapDispactToProps)(App);