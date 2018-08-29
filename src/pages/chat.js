import React from 'react';

class Chat extends React.Component {

    state = {
        userList: []
    }

    componentDidMount() {
        var {activeUsers} = this.props;
    }
    
    render() {
        var userList = [];
        var { activeUsers } = this.props;
        if(window.localStorage) {
            if(localStorage.userList) {
                var oldUsers = JSON.parse(localStorage.userList);
                var newuser = activeUsers.filter( f => !oldUsers.find(fi => fi.user_id == f.user_id) );
                userList = [...oldUsers, ...newuser]
                localStorage.userList = JSON.stringify([...oldUsers, ...newuser]);
            }
            else {
                userList = activeUsers;
                localStorage.userList = JSON.stringify(activeUsers);
            }
        }
        userList = userList.map( m => {
            if(activeUsers.find(f => f.user_id == m.user_id)) {
                m.status = 'active';
            }
            return m
        })
        return (
            <div className="full-container">
                <div className="peers fxw-nw pos-r">
                    <div className="peer bdR" id="chat-sidebar">
                        <div className="layers h-100">
                            <div className="bdB layer w-100">
                                <input type="text" placeholder="Search contacts..." name="chatSearch" className="form-constrol p-15 bdrs-0 w-100 bdw-0" />
                            </div>

                            <div className="layer w-100 fxg-1 scrollable pos-r">
                                {
                                    userList.map((user, userk)=>{
                                        console.log(user);
                                        return (
                                            <div key={'user-'+user.user_id} className="peers fxw-nw ai-c p-20 bdB bgc-white bgcH-grey-50 cur-p">
                                                <div className="peer">
                                                    <img src={user.profile} alt="" className="w-3r h-3r bdrs-50p" />
                                                </div>
                                                <div className="peer peer-greed pL-20">
                                                    <h6 className="mB-0 lh-1 fw-400">{user.username}</h6>
                                                    <small className={`lh-1 ${ user.hasOwnProperty('status') ? 'c-green-500' : 'c-gray-500'}`}>{user.hasOwnProperty('status') ? 'Online' : 'Offline'}</small>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                    <div className="peer peer-greed" id="chat-box">
                        <div className="layers h-100">
                            <div className="layer w-100">
                                <div className="peers fxw-nw jc-sb ai-c pY-20 pX-30 bgc-white">
                                    <div className="peers ai-c">
                                        <div className="peer d-n@md+">
                                            <a href="" title="" id="chat-sidebar-toggle" className="td-n c-grey-900 cH-blue-500 mR-30">
                                                <i className="ti-menu"></i>
                                            </a>
                                        </div>
                                        <div className="peer mR-20">
                                            <img src="https://randomuser.me/api/portraits/men/12.jpg" alt="" className="w-3r h-3r bdrs-50p" />
                                        </div>
                                        <div className="peer">
                                            <h6 className="lh-1 mB-0">John Doe</h6>
                                            <i className="fsz-sm lh-1">Typing...</i>
                                        </div>
                                    </div>
                                    <div className="peers">
                                        <a href="" className="peer td-n c-grey-900 cH-blue-500 fsz-md mR-30" title="">
                                            <i className="ti-video-camera"></i>
                                        </a>
                                        <a href="" className="peer td-n c-grey-900 cH-blue-500 fsz-md mR-30" title="">
                                            <i className="ti-headphone"></i>
                                        </a>
                                        <a href="" className="peer td-n c-grey-900 cH-blue-500 fsz-md" title="">
                                            <i className="ti-more"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="layer w-100 fxg-1 bgc-grey-200 scrollable pos-r">
                                <div className="p-20 gapY-15">
                                    <div className="peers fxw-nw">
                                        <div className="peer mR-20">
                                            <img className="w-2r bdrs-50p" src="https://randomuser.me/api/portraits/men/11.jpg" alt="" />
                                        </div>
                                        <div className="peer peer-greed">
                                            <div className="layers ai-fs gapY-5">
                                                <div className="layer">
                                                    <div className="peers fxw-nw ai-c pY-3 pX-10 bgc-white bdrs-2 lh-3/2">
                                                        <div className="peer mR-10">
                                                            <small>10:00 AM</small>
                                                        </div>
                                                        <div className="peer-greed">
                                                            <span>Lorem Ipsum is simply dummy text of</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="layer">
                                                    <div className="peers fxw-nw ai-c pY-3 pX-10 bgc-white bdrs-2 lh-3/2">
                                                        <div className="peer mR-10">
                                                            <small>10:00 AM</small>
                                                        </div>
                                                        <div className="peer-greed">
                                                            <span>the printing and typesetting industry.</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="layer">
                                                    <div className="peers fxw-nw ai-c pY-3 pX-10 bgc-white bdrs-2 lh-3/2">
                                                        <div className="peer mR-10">
                                                            <small>10:00 AM</small>
                                                        </div>
                                                        <div className="peer-greed">
                                                            <span>Lorem Ipsum has been the industry"s</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="peers fxw-nw ai-fe">
                                        <div className="peer ord-1 mL-20">
                                            <img className="w-2r bdrs-50p" src="https://randomuser.me/api/portraits/men/12.jpg" alt="" />
                                        </div>
                                        <div className="peer peer-greed ord-0">
                                            <div className="layers ai-fe gapY-10">
                                                <div className="layer">
                                                    <div className="peers fxw-nw ai-c pY-3 pX-10 bgc-white bdrs-2 lh-3/2">
                                                        <div className="peer mL-10 ord-1">
                                                            <small>10:00 AM</small>
                                                        </div>
                                                        <div className="peer-greed ord-0">
                                                            <span>Heloo</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="layer">
                                                    <div className="peers fxw-nw ai-c pY-3 pX-10 bgc-white bdrs-2 lh-3/2">
                                                        <div className="peer mL-10 ord-1">
                                                            <small>10:00 AM</small>
                                                        </div>
                                                        <div className="peer-greed ord-0">
                                                            <span>??</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="layer w-100">
                                <div className="p-20 bdT bgc-white">
                                    <div className="pos-r">
                                        <input type="text" className="form-control bdrs-10em m-0" placeholder="Say something..." />
                                        <button type="button" className="btn btn-primary bdrs-50p w-2r p-0 h-2r pos-a r-1 t-1">
                                            <i className="fa fa-paper-plane-o"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Chat;