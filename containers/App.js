import React, {Component} from 'react';
import Banner from '../components/banner';
import NavBar from '../components/navbar';
import Card from '../components/card';
import {connect} from 'react-redux';
import {setCardlist, setPermaCardList} from '../actions/cardlist';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdBadge, faFileSignature, faBriefcase, faBuilding, faSearch } from '@fortawesome/free-solid-svg-icons'
import '../css/app.css'

library.add(faIdBadge,faFileSignature,faBriefcase,faBuilding,faSearch)

class App extends Component {

    componentDidMount() {
        axios.get("http://localhost:8000/api/contacts/")
        .then(response => {
            console.log(response.data.data)
            const card_list = response.data.data.map(c => {
                return({
                    id : c._id,
                    employee_id : c.employee_id,
                    name : c.name,
                    position : c.position,
                    department : c.department     
                })
            })
        this.props.dispatch(setPermaCardList(card_list))
        this.props.dispatch(setCardlist(card_list))
        }).catch(error => console.log(error))
    }

    render () {
        return (
            <div className="app-container">
                <div className="app-wrapper">
                    <Banner className="app-banner"/>
                    <div className="app-content-container">
                        <NavBar className="navbar"/>
                        <div className="content">
                            <div className="app-header-container">
                                <div className="search-result-text">Search Results</div>
                                <Link className="app-add-button-wrapper" to="/add">
                                    <button className="app-add-button">Add +</button>
                                </Link>
                            </div>
                            <div className="app-card-container">
                                {this.props.cardlistReducer.cardlist.map((data, index) => {
                                    return(
                                        <Card 
                                            id = { data.id }
                                            employee_id={ data.employee_id }
                                            name={ data.name }
                                            position={ data.position }
                                            department={ data.department }
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(state => state)(App);
