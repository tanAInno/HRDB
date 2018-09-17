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
import { faIdBadge, faFileSignature, faBriefcase, faBuilding, 
    faSearch, faCheckCircle, faPhoneSquare, faEnvelope, faWifi, 
    faPrint, faLaptop } from '@fortawesome/free-solid-svg-icons'
import '../css/app.css'

library.add(faIdBadge,faFileSignature,faBriefcase,faBuilding,
    faSearch,faCheckCircle,faPhoneSquare,faEnvelope,faWifi,faPrint
    ,faLaptop)

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
                    image : c.image,
                    position : c.position,
                    department : c.department,
                    status : c.status,
                    phone : c.phone,
                    email : c.email,
                    last_edited : c.last_edited,
                    wifi_password : c.wifi_password,
                    printer_password : c.printer_password,
                    assets : c.assets,     
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
                                            image={ data.image }
                                            position={ data.position }
                                            department={ data.department }
                                            status={ data.status }
                                            phone={ data.phone }
                                            email={ data.email }
                                            last_edited={ data.last_edited }
                                            wifi_password={ data.wifi_password }
                                            printer_password={ data.printer_password }
                                            assets={ data.assets }
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
