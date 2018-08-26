import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";


import Sidebar from '../components/sidebar';
import Navigation from '../components/navigation';
import Home from '../pages/home';
import Chat from '../pages/chat';
import Footer from '../components/footer';

const Dashboard = (props) => {
    return (
        <Router>
            <div className={`${!props.sidebarIsOpen || 'is-collapsed'}`}>
                <Sidebar/>
                <div className="page-container">
                    <Navigation toggleSidebar={props.toggleSidebar} user={props.user} />
                    <main className="main-content bgc-grey-100">
                        <div id="mainContent">
                            <Switch>
                                <Route exact={true} path="/" component={Home} />
                                <Route path="/chat" component={Chat} />
                                <Redirect from="/singin" to="/" />
                            </Switch>
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
        </Router>
    )
}

export default Dashboard;