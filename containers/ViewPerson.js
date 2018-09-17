import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Banner from '../components/banner';
import '../css/viewperson.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';

class ViewPerson extends Component {
    render() {
        const {person} = this.props.personReducer
        return(
            <div>
                <Banner/>
                <div className="view-container">
                    <div className="image-wrapper">
                        <div className="imgPreview">
                            <img src={person.image} />
                        </div>
                    </div>
                    <div className="detail-wrapper">
                        <div className="headerWrapper">Person information</div>
                        <div className="detail-text-wrapper"><FontAwesomeIcon icon="id-badge" className="icon" /> ID : {person.id}</div>
                        <div className="detail-text-wrapper"><FontAwesomeIcon icon="file-signature" className="icon" />Name : {person.name}</div>
                        <div className="detail-text-wrapper"><FontAwesomeIcon icon="briefcase" className="icon" /> Position : {person.position}</div>
                        <div className="detail-text-wrapper"><FontAwesomeIcon icon="building" className="icon" /> Department : {person.department}</div>
                        <div className="detail-text-wrapper"><FontAwesomeIcon icon="check-circle" className="icon" /> Status : {person.status}</div>
                        <div className="detail-text-wrapper"><FontAwesomeIcon icon="phone-square" className="icon" /> Phone No. : {person.phone}</div>
                        <div className="detail-text-wrapper"><FontAwesomeIcon icon="envelope" className="icon" /> E-mail : {person.email}</div>
                        <div className="detail-text-wrapper"><FontAwesomeIcon icon="wifi" className="icon" /> Wi-Fi Password : {person.wifi_password}</div>
                        <div className="detail-text-wrapper"><FontAwesomeIcon icon="print" className="icon" /> Printer Password : {person.printer_password}</div>
                        <div className="detail-text-wrapper"><FontAwesomeIcon icon="laptop" className="icon" /> Assets : {person.assets}</div>
                        <Link to="/"><button className="back-button">Back</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(state => state)(ViewPerson)