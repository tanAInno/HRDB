import React, {Component} from 'react';
import '../css/card.css';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { setPerson } from '../actions/person';

class Card extends Component {
    onView = () => {
        this.props.dispatch(setPerson({id : this.props.id,name : this.props.name,
                                    position : this.props.position,department : this.props.department}))
    }

    render() {
        const {person} = this.props.personReducer
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
                    <Link to="/view"><button className="view-button" onClick={this.onView}>View</button></Link>
                    <button className="edit-button">Edit</button>
                    <button className="delete-button">Delete</button>
                </div>
            </div>
        )
    }
}

export default connect(state =>  state)(Card)
