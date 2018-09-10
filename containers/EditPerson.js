import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Banner from '../components/banner';
import '../css/editperson.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import axios from 'axios';

class EditPerson extends Component {
    state = {
        personID : '',
        personName : '',
        personPosition : '',
        personDepartment : ''
    }

    componentDidMount(){
        console.log(this.props.personIDReducer)
        axios.get("http://localhost:8000/api/contacts/"+this.props.personIDReducer.personid)
        .then(response => {
            console.log(response)
            this.setState({personID : response.data.data.employee_id})
            this.setState({personName :  response.data.data.name})
            this.setState({personPosition : response.data.data.position})
            this.setState({personDepartment : response.data.data.department})
        }).catch(error => console.log(error))
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

    async editPerson() {
        await axios.put("http://localhost:8000/api/contacts/"+this.props.personIDReducer.personid,{
            employee_id: this.state.personID,
            name: this.state.personName,
            position: this.state.personPosition,
            department: this.state.personDepartment
        }).catch(error => console.log(error))
        location.reload()
    }

    render() {
        return (
            <div>
                <Banner />
                <div className="edit-container">
                    <div className="edit-image-wrapper">
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
                            onChange={e => this._onChange("id",e.target.value)}></input>
                        <div className="textWrapper"><FontAwesomeIcon icon="file-signature" className="icon" />Name</div>
                        <input type="text" 
                            className="input-field" 
                            value={this.state.personName}
                            onChange={e => this._onChange("name",e.target.value)}></input>
                        <div className="textWrapper"><FontAwesomeIcon icon="briefcase" className="icon" /> Position</div>
                        <input type="text" 
                            className="input-field" 
                            value={this.state.personPosition}
                            onChange={e => this._onChange("position",e.target.value)}></input>
                        <div className="textWrapper"><FontAwesomeIcon icon="building" className="icon" /> Department</div>
                        <input type="text" 
                            className="input-field" 
                            value={this.state.personDepartment}
                            onChange={e => this._onChange("department",e.target.value)}></input>
                        <div className="add-button-wrapper">
                            <Link to="/"><button className="submit-button" onClick={() => {this.editPerson()}}>Submit</button></Link>
                            <Link to="/"><button className="cancel-button">Cancel</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(state => state)(EditPerson)