import React, {Component} from 'react';
import '../css/card.css';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { setPerson } from '../actions/person';
import { setPersonId } from '../actions/personid';
import Modal from 'react-modal';
import axios from 'axios';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

Modal.setAppElement('body')

class Card extends Component {
    
    constructor() {
        super()

        this.state = {
            modalIsOpen : false
        }

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    async deletePerson() {
        await axios.delete("http://localhost:8000/api/contacts/"+this.props.id)
        this.closeModal()
        location.reload()
    }

    openModal() {
        this.setState({modalIsOpen : true})
        console.log(this.props.id)
    }

    afterOpenModal() {
        this.subtitle.style.color = '#f00'
    }

    closeModal() {
        this.setState({modalIsOpen : false})
    }

    onView = () => {
        this.props.dispatch(setPerson({id : this.props.employee_id,name : this.props.name,
                                    position : this.props.position,department : this.props.department}))
    }

    onEdit = () => {
        console.log(this.props.id)
        this.props.dispatch(setPersonId(this.props.id))
    }

    render() {
        return (
            <div className="card-container">
                <img className="image-container" src="../assets/images/noprofilemale.gif"/>
                <div className="detail-container">
                    <div className="text-wrapper" style={{marginTop: '5px'}}>ID : {this.props.employee_id}</div>
                    <div className="text-wrapper">Name : {this.props.name}</div>
                    <div className="text-wrapper">Position : {this.props.position}</div>
                    <div className="text-wrapper">Department : {this.props.department}</div>
                </div>
                <div className="card-button-wrapper">
                    <Link to="/view"><button className="view-button" onClick={this.onView}>View</button></Link>
                    <Link to="/edit"><button className="edit-button" onClick={this.onEdit}>Edit</button></Link>
                    <button className="delete-button" onClick={this.openModal}>Delete</button>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                        style={customStyles}
                        contentLabel="Confirm Deletion"
                    >
                        <h2 ref={subtitle => this.subtitle = subtitle} className="modal-sub-title">Confirm Delete</h2>
                        <div className="modal-detail">Are you sure you want to delete this person?</div>
                        <div className="modal-button-wrapper">
                            <button onClick={() => {this.deletePerson()}} className="modal-confirm-button">Confirm</button>
                            <button onClick={this.closeModal} className="modal-cancel-button">Cancel</button>
                        </div>
                    </Modal>
                </div>
            </div>
        )
    }
}

export default connect(state =>  state)(Card)
