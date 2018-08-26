import React from "react";
import http from 'axios';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';

class Singin extends React.Component {

    state = {
        validate: [
            {
                name: 'username',
                valid: true,
                msg: 'Enter valid Email / Username',
                value: ''
            },
            {
                name: 'password',
                valid: true,
                msg: 'Enter valid password',
                value: ''
            }
        ]
    }

    formValidation = (e) => {
        e.preventDefault();
        var usernameErr=true;
        var passwordErr=true;
        var form = e.target;
        this.setState(prev => {
            var username = prev.validate.find(f => f.name == 'username');
            var password = prev.validate.find(f => f.name == 'password');
            usernameErr = username.valid = username.value == '' ? false : true;
            passwordErr = password.valid = password.value == '' ? false : true;
            return prev;
        }, () => {
            if(usernameErr && passwordErr) {
                this.validateUser(form);
            }
        })
    } 

    validateUser = (form) => {
        var arr = $(form).serialize();
        http.post('/login',arr).then(res => {
            if(!res.data.hasOwnProperty('message')){
                this.props.setUser(res.data);
            }
            else {
                this.setState(prev => {
                    var err = prev.validate.find(f => f.name == res.data.type)
                    err.msg = res.data.message;
                    err.valid = false;
                    return prev;
                })
            }
        });
    }

    render() {
        var state = this.state;
        var username = state.validate.find(f => f.name == 'username');
        var password = state.validate.find(f => f.name == 'password');
        var { message } = this.props.location.state ? this.props.location.state : {};
        return (
            <div className="peers ai-s fxw-nw h-100vh">
                <div className="d-n@sm- peer peer-greed h-100 pos-r bgr-n bgpX-c bgpY-c bgsz-cv" style={{ backgroundImage: `url('${baseurl}assets/images/bg.jpg')`}}>
                    <div className="pos-a centerXY">
                        <div className="bgc-white bdrs-50p pos-r" style={{ width: '120px', height: '120px' }}>
                            <img className="pos-a centerXY" src={baseurl + 'assets/images/logo.png'} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 peer pX-40 pY-80 h-100 bgc-white scrollable pos-r" style={{ minWidth: '320px' }} >
                    {!message || (
                        <div className="alert alert-success">
                            <strong>Success!</strong> {message}
                            <button type="button" className="close" data-dismiss="alert">&times;</button>
                        </div>
                    )}
                    <h4 className="fw-300 c-grey-900 mB-40">Login</h4>
                    <form onSubmit={this.formValidation}>
                        <div className="form-group">
                            <label className="text-normal text-dark">Username</label>
                            <input type="text" className={`form-control ${username.valid || 'is-invalid' }`} placeholder="Username / Email Address" name={username.name} value={username.value} onChange={(e) => {
                                var val = e.target.value;
                                this.setState(prev => {
                                    username.value = val;
                                    return prev;
                                })
                            } } />
                            <div className="invalid-feedback">{username.msg}</div>
                        </div>
                        <div className="form-group">
                            <label className="text-normal text-dark">Password</label>
                            <input type="password" className={`form-control ${password.valid || 'is-invalid' }`} placeholder="Password" name={password.name} value={password.value} onChange={(e) => {
                                var val = e.target.value;
                                this.setState(prev => {
                                    password.value = val;
                                    return prev;
                                })
                            } } />
                            <div className="invalid-feedback">{password.msg}</div>
                        </div>
                        <div className="form-group">
                            <div className="peers ai-c jc-sb fxw-nw">
                                <div className="peer">
                                    <div className="checkbox checkbox-circle checkbox-info peers ai-c">
                                        <input type="checkbox" id="inputCall1" name="inputCheckboxesCall" className="peer" />
                                        <label htmlFor="inputCall1" className=" peers peer-greed js-sb ai-c">
                                            <span className="peer peer-greed">Remember Me</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="peer">
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <hr />
                    <div>
                        Don't have an account? <Link to="/singup">Singup Now</Link>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default withRouter(Singin);