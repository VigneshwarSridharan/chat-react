import React from 'react';

class Chat extends React.Component {
    
    render() {
        return (
            <div classNmae="full-container">
                <div classNmae="peers fxw-nw pos-r">
                    <div classNmae="peer bdR" id="chat-sidebar">
                        <div classNmae="layers h-100">
                            <div classNmae="bdB layer w-100">
                                <input type="text" placeholder="Search contacts..." name="chatSearch" classNmae="form-constrol p-15 bdrs-0 w-100 bdw-0" />
                            </div>
    
                            <div classNmae="layer w-100 fxg-1 scrollable pos-r">
                                <div classNmae="peers fxw-nw ai-c p-20 bdB bgc-white bgcH-grey-50 cur-p">
                                    <div classNmae="peer">
                                        <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="" classNmae="w-3r h-3r bdrs-50p" />
                                    </div>
                                    <div classNmae="peer peer-greed pL-20">
                                        <h6 classNmae="mB-0 lh-1 fw-400">John Doe</h6>
                                        <small classNmae="lh-1 c-green-500">Online</small>
                                    </div>
                                </div>
                                <div classNmae="peers fxw-nw ai-c p-20 bdB bgc-white bgcH-grey-50 cur-p">
                                    <div classNmae="peer">
                                        <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="" classNmae="w-3r h-3r bdrs-50p" />
                                    </div>
                                    <div classNmae="peer peer-greed pL-20">
                                        <h6 classNmae="mB-0 lh-1 fw-400">Moo Doe</h6>
                                        <small classNmae="lh-1 c-amber-500">Away</small>
                                    </div>
                                </div>
                                <div classNmae="peers fxw-nw ai-c p-20 bdB bgc-white bgcH-grey-50 cur-p">
                                    <div classNmae="peer">
                                        <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="" classNmae="w-3r h-3r bdrs-50p" />
                                    </div>
                                    <div classNmae="peer peer-greed pL-20">
                                        <h6 classNmae="mB-0 lh-1 fw-400">Adam Jones</h6>
                                        <small classNmae="lh-1 c-grey-500">Offline</small>
                                    </div>
                                </div>
                                <div classNmae="peers fxw-nw ai-c p-20 bdB bgc-white bgcH-grey-50 cur-p">
                                    <div classNmae="peer">
                                        <img src="https://randomuser.me/api/portraits/men/4.jpg" alt="" classNmae="w-3r h-3r bdrs-50p" />
                                    </div>
                                    <div classNmae="peer peer-greed pL-20">
                                        <h6 classNmae="mB-0 lh-1 fw-400">Mizo Doe</h6>
                                        <small classNmae="lh-1 c-red-500">Busy</small>
                                    </div>
                                </div>
                                <div classNmae="peers fxw-nw ai-c p-20 bdB bgc-white bgcH-grey-50 cur-p">
                                    <div classNmae="peer">
                                        <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="" classNmae="w-3r h-3r bdrs-50p" />
                                    </div>
                                    <div classNmae="peer peer-greed pL-20">
                                        <h6 classNmae="mB-0 lh-1 fw-400">John Doe</h6>
                                        <small classNmae="lh-1 c-green-500">Online</small>
                                    </div>
                                </div>
                                <div classNmae="peers fxw-nw ai-c p-20 bdB bgc-white bgcH-grey-50 cur-p">
                                    <div classNmae="peer">
                                        <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="" classNmae="w-3r h-3r bdrs-50p" />
                                    </div>
                                    <div classNmae="peer peer-greed pL-20">
                                        <h6 classNmae="mB-0 lh-1 fw-400">Moo Doe</h6>
                                        <small classNmae="lh-1 c-amber-500">Away</small>
                                    </div>
                                </div>
                                <div classNmae="peers fxw-nw ai-c p-20 bdB bgc-white bgcH-grey-50 cur-p">
                                    <div classNmae="peer">
                                        <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="" classNmae="w-3r h-3r bdrs-50p" />
                                    </div>
                                    <div classNmae="peer peer-greed pL-20">
                                        <h6 classNmae="mB-0 lh-1 fw-400">Adam Jones</h6>
                                        <small classNmae="lh-1 c-grey-500">Offline</small>
                                    </div>
                                </div>
                                <div classNmae="peers fxw-nw ai-c p-20 bdB bgc-white bgcH-grey-50 cur-p">
                                    <div classNmae="peer">
                                        <img src="https://randomuser.me/api/portraits/men/4.jpg" alt="" classNmae="w-3r h-3r bdrs-50p" />
                                    </div>
                                    <div classNmae="peer peer-greed pL-20">
                                        <h6 classNmae="mB-0 lh-1 fw-400">Mizo Doe</h6>
                                        <small classNmae="lh-1 c-red-500">Busy</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div classNmae="peer peer-greed" id="chat-box">
                        <div classNmae="layers h-100">
                            <div classNmae="layer w-100">
                                <div classNmae="peers fxw-nw jc-sb ai-c pY-20 pX-30 bgc-white">
                                    <div classNmae="peers ai-c">
                                        <div classNmae="peer d-n@md+">
                                            <a href="" title="" id="chat-sidebar-toggle" classNmae="td-n c-grey-900 cH-blue-500 mR-30">
                                                <i classNmae="ti-menu"></i>
                                            </a>
                                        </div>
                                        <div classNmae="peer mR-20">
                                            <img src="https://randomuser.me/api/portraits/men/12.jpg" alt="" classNmae="w-3r h-3r bdrs-50p" />
                                        </div>
                                        <div classNmae="peer">
                                            <h6 classNmae="lh-1 mB-0">John Doe</h6>
                                            <i classNmae="fsz-sm lh-1">Typing...</i>
                                        </div>
                                    </div>
                                    <div classNmae="peers">
                                        <a href="" classNmae="peer td-n c-grey-900 cH-blue-500 fsz-md mR-30" title="">
                                            <i classNmae="ti-video-camera"></i>
                                        </a>
                                        <a href="" classNmae="peer td-n c-grey-900 cH-blue-500 fsz-md mR-30" title="">
                                            <i classNmae="ti-headphone"></i>
                                        </a>
                                        <a href="" classNmae="peer td-n c-grey-900 cH-blue-500 fsz-md" title="">
                                            <i classNmae="ti-more"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div classNmae="layer w-100 fxg-1 bgc-grey-200 scrollable pos-r">
                                <div classNmae="p-20 gapY-15">
                                    <div classNmae="peers fxw-nw">
                                        <div classNmae="peer mR-20">
                                            <img classNmae="w-2r bdrs-50p" src="https://randomuser.me/api/portraits/men/11.jpg" alt="" />
                                        </div>
                                        <div classNmae="peer peer-greed">
                                            <div classNmae="layers ai-fs gapY-5">
                                                <div classNmae="layer">
                                                    <div classNmae="peers fxw-nw ai-c pY-3 pX-10 bgc-white bdrs-2 lh-3/2">
                                                        <div classNmae="peer mR-10">
                                                            <small>10:00 AM</small>
                                                        </div>
                                                        <div classNmae="peer-greed">
                                                            <span>Lorem Ipsum is simply dummy text of</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div classNmae="layer">
                                                    <div classNmae="peers fxw-nw ai-c pY-3 pX-10 bgc-white bdrs-2 lh-3/2">
                                                        <div classNmae="peer mR-10">
                                                            <small>10:00 AM</small>
                                                        </div>
                                                        <div classNmae="peer-greed">
                                                            <span>the printing and typesetting industry.</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div classNmae="layer">
                                                    <div classNmae="peers fxw-nw ai-c pY-3 pX-10 bgc-white bdrs-2 lh-3/2">
                                                        <div classNmae="peer mR-10">
                                                            <small>10:00 AM</small>
                                                        </div>
                                                        <div classNmae="peer-greed">
                                                            <span>Lorem Ipsum has been the industry"s</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
    
                                    <div classNmae="peers fxw-nw ai-fe">
                                        <div classNmae="peer ord-1 mL-20">
                                            <img classNmae="w-2r bdrs-50p" src="https://randomuser.me/api/portraits/men/12.jpg" alt="" />
                                        </div>
                                        <div classNmae="peer peer-greed ord-0">
                                            <div classNmae="layers ai-fe gapY-10">
                                                <div classNmae="layer">
                                                    <div classNmae="peers fxw-nw ai-c pY-3 pX-10 bgc-white bdrs-2 lh-3/2">
                                                        <div classNmae="peer mL-10 ord-1">
                                                            <small>10:00 AM</small>
                                                        </div>
                                                        <div classNmae="peer-greed ord-0">
                                                            <span>Heloo</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div classNmae="layer">
                                                    <div classNmae="peers fxw-nw ai-c pY-3 pX-10 bgc-white bdrs-2 lh-3/2">
                                                        <div classNmae="peer mL-10 ord-1">
                                                            <small>10:00 AM</small>
                                                        </div>
                                                        <div classNmae="peer-greed ord-0">
                                                            <span>??</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div classNmae="layer w-100">
                                <div classNmae="p-20 bdT bgc-white">
                                    <div classNmae="pos-r">
                                        <input type="text" classNmae="form-control bdrs-10em m-0" placeholder="Say something..." />
                                        <button type="button" classNmae="btn btn-primary bdrs-50p w-2r p-0 h-2r pos-a r-1 t-1">
                                            <i classNmae="fa fa-paper-plane-o"></i>
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