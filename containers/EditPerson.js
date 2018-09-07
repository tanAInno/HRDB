import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Banner from '../components/banner';
import '../css/editperson.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';

class EditPerson extends Component {
    state = {
        personID : this.props.personReducer.id,
        personName : this.props.personReducer.name,
        personPosition : this.props.personReducer.position,
        personDepartment : this.props.personReducer.department
    }
    _onChange = (key,value) => {
        if(key == "id")
            this.setState({personID : value})
        if(key == "name")
            this.setState({personName : value})
        if(key == "position")
            this.setState({personPosition : value})
        if(key == "department")
            this.setState({personDepartment : value})
    }
    render() {
        return (
            <div>
                <Banner />
                <div className="edit-container">
                    <div className="image-wrapper">
                        <div className="imgPreview">
                            <img src="../assets/images/noprofilemale.gif"/>
                        </div>
                    </div>
                    <div className="detail-wrapper">
                        <div className="headerWrapper">Fill in the information</div>
                        <div className="textWrapper"><FontAwesomeIcon icon="id-badge" className="icon" /> ID</div>
                        <input type="text" 
                            className="input-field" 
                            value={this.state.personID} 
                            onChange={this._onChange("id",value)}></input>
                        <div className="textWrapper"><FontAwesomeIcon icon="file-signature" className="icon" />Name</div>
                        <input type="text" 
                            className="input-field" 
                            value={this.state.personName}></input>
                        <div className="textWrapper"><FontAwesomeIcon icon="briefcase" className="icon" /> Position</div>
                        <input type="text" 
                            className="input-field" 
                            value={this.state.personPosition}></input>
                        <div className="textWrapper"><FontAwesomeIcon icon="building" className="icon" /> Department</div>
                        <input type="text" 
                            className="input-field" 
                            value={this.state.personDepartment}></input>
                        <Link to="/"><button className="back-button">Back</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(state => state)(EditPerson)