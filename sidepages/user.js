import React, { Component } from 'react';
import { connect } from 'react-redux'; 

class User extends Component {
    
    render(){
        return(
            <div className="app-content-container">
                <div className="user-content">
                    <div className="data-set-wrapper">
                        <div className="data-box">
                            <div className="data-number">
                                {this.props.personReducer.mag.PM2_5}
                            </div>
                            <div className="data-text">
                                PM2_5
                            </div>
                        </div>
                        <div className="data-box">
                            <div className="data-number">
                                {this.props.personReducer.mag.Temperature}
                            </div>
                            <div className="data-text">
                                Temperature
                            </div>
                        </div>
                        <div className="data-box">
                            <div className="data-number">
                                {this.props.personReducer.mag.Humidity}
                            </div>
                            <div className="data-text">
                                Humidity
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default connect(state => state)(User)