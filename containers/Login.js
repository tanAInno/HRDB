import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import route from '../api';
import axios from 'axios';
import '../css/login.css';

class Login extends Component {

    state = {
        username: '',
        password: '',
        isLoggedIn: false,
        isSuccess: true,
    }

    _onChange(key,value) {
        if(key == "username")
            this.setState({username: value})
        if(key == "password")
            this.setState({password: value})
    }

    async _onSubmit() {
        await axios.post(route+'/login',{
            username: this.state.username,
            password: this.state.password
        }).then(response => {
            console.log(response)
            if (response.data == "login success")
                this.setState({isLoggedIn : true})
        }).catch(error=> {
            this.setState({isSuccess : false})
            console.log(error)
        })
        console.log(this.state.isLoggedIn)
    }

    _handleKeyPress = (e) => {
        if (e.key === 'Enter') 
            this._onSubmit()
    }

    render(){
        if (this.state.isLoggedIn){
            return <Redirect to="/main" />
        }
        return(
            <div className="login-container">
                <div className="login-wrapper">
                    <div className="login-header-text">Login</div>
                    <div className="input-container">
                        <div className="login-text">Username</div>
                        <input 
                            className="login-input-field"
                            value={this.state.username}
                            onChange={e => this._onChange("username",e.target.value)}
                            onKeyPress={this._handleKeyPress}/>
                        <div className="login-text">Password</div>
                        <input 
                            className="login-input-field" 
                            type="password"
                            value={this.state.password}
                            onChange={e => this._onChange("password",e.target.value)}
                            onKeyPress={this._handleKeyPress}/>
                    </div>
                    {!this.state.isSuccess && <div className="warning-text">Invalid username or password</div>}
                    <button className="login-button" onClick={() => this._onSubmit()}>Login</button>
                </div>
            </div>
        )
    }
}

export default Login