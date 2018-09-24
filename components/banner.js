import React, {Component} from 'react';
import '../css/banner.css';
import {Link} from 'react-router-dom';

class Banner extends Component {
    render() {
        return(
            <div className="backGround">
                    <p className="headerText">Innovation</p>
                    <Link to="/"><button className="logout-button">Logout</button></Link>
            </div>
        )
    }
}

export default Banner;

