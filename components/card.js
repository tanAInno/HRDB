import React, {Component} from 'react';
import '../css/card.css';

class Card extends Component {
    render() {
        return (
            <div className="card-container">
                <img className="image-container" src="../assets/images/noprofilemale.gif"/>
                <div className="detail-container">
                    <div className="text-wrapper" style={{marginTop: '5px'}}>ID : {this.props.id}</div>
                    <div className="text-wrapper">Name : {this.props.name}</div>
                    <div className="text-wrapper">Position : {this.props.position}</div>
                    <div className="text-wrapper">Department : {this.props.department}</div>
                </div>
                <div className="card-button-wrapper">
                    <button className="view-button">View</button>
                    <button className="edit-button">Edit</button>
                    <button className="delete-button">Delete</button>
                </div>
            </div>
        )
    }
}

export default Card
