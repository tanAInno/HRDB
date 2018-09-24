import React, {Component} from 'react';
import '../css/banner.css';
import {Link} from 'react-router-dom';
import Cookies from 'js-cookie'

class Banner extends Component {

    _onSubmit() {
        Cookies.remove('access-token')
    }

    render() {
        return(
            <div className="backGround">
                    <p className="headerText">Innovation</p>
                    <Link to="/"><button className="logout-button" onClick={() => this._onSubmit()}>Logout</button></Link>
            </div>
        )
    }
}

export default Banner;

