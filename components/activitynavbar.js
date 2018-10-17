import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/navbar.css'
import { setCardlist,setPermaCardList,setCounter } from '../actions/cardlist'
import { connect } from 'react-redux'

class ActivityNavBar extends Component {

    render(){
        return(
            <div className="nav-container">
                <a className="filter-text">Search Filter <FontAwesomeIcon icon="search" className="search-icon" /></a>
                <div className="filter-container">
                    
                </div>    
            </div>
        )
    }

}

export default ActivityNavBar