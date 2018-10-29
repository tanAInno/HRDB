import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link,Redirect } from 'react-router-dom';
import { Tabs,TabLink,TabContent } from 'react-tabs-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import Modal from 'react-modal'
import route from '../api'
import '../css/app.css'
import { setActivitylist } from '../actions/cardlist';

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

class ActivityCard extends Component{
    
    constructor() {
        super()

        this.state = {
            modalIsOpen : false
        }

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen : true})
    }

    afterOpenModal() {
        this.subtitle.style.color = '#f00'
    }

    closeModal() {
        this.setState({modalIsOpen : false})
    }

    async deleteActivity(){
        await axios.delete(route+"activities/"+this.props.id)
        let temp_act_list = this.props.cardlistReducer.act_list
        temp_act_list.splice(this.props.index,1)
        this.props.dispatch(setActivitylist(temp_act_list))
        this.closeModal()
    }

    render(){
        return(
            <div className="activity-card-container">
                <div className="card-date">{this.props.date}</div>
                <div className="card-user">{this.props.user}</div>
                {this.props.action == "Added" &&
                    <div className="card-action" style={{color: "#228B22"}}>{this.props.action}</div>
                }
                {this.props.action == "Edited" &&
                    <div className="card-action" style={{color: "#ffa500"}}>{this.props.action}</div>
                }
                {this.props.action == "Deleted" &&
                    <div className="card-action" style={{color: "#b20000"}}>{this.props.action}</div>
                }
                <div className="card-target">{this.props.target}</div>
                <button className="card-button" onClick={this.openModal}>
                    <FontAwesomeIcon icon="trash-alt" className="delete-icon"/>
                </button>
                <Modal
                        isOpen={this.state.modalIsOpen}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                        contentLabel="Confirm Deletion"
                        style={customStyles}
                    >
                        <h2 ref={subtitle => this.subtitle = subtitle} className="modal-sub-title">Confirm Delete</h2>
                        <div className="modal-detail">Are you sure you want to delete this activity?</div>
                        <div className="modal-button-wrapper">
                            <button onClick={() => {this.deleteActivity()}} className="modal-confirm-button">Confirm</button>
                            <button onClick={this.closeModal} className="modal-cancel-button">Cancel</button>
                        </div>
                    </Modal>
            </div>
        )
    }

}

export default connect(state => state)(ActivityCard)