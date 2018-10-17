import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link,Redirect } from 'react-router-dom';
import { Tabs,TabLink,TabContent } from 'react-tabs-redux'
import '../css/app.css'

class ActivityCard extends Component{
    
    render(){
        return(
            <div className="activity-card-container">
                <div className="card-date">{this.props.date}</div>
                <div className="card-user">{this.props.user}</div>
                <div className="card-action">{this.props.action}</div>
                <div className="card-target">{this.props.target}</div>
            </div>
        )
    }

}

export default ActivityCard