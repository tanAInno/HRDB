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
                            <img src="../assets/images/noprofilemale.gif" />
                        </div>
                    </div>
                    <div className="detail-wrapper">
                        <div className="headerWrapper">Fill in the information</div>
                        <div className="detail-text-wrapper"><FontAwesomeIcon icon="id-badge" className="icon" /> ID : {person.id}</div>
                        <div className="detail-text-wrapper"><FontAwesomeIcon icon="file-signature" className="icon" />Name : {person.name}</div>
                        <div className="detail-text-wrapper"><FontAwesomeIcon icon="briefcase" className="icon" /> Position : {person.position}</div>
                        <div className="detail-text-wrapper"><FontAwesomeIcon icon="building" className="icon" /> Department : {person.department}</div>
                        <Link to="/"><button className="back-button">Back</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(state => state)(ViewPerson)