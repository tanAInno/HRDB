import React, {Component} from 'react';
import NavBar from '../components/homenavbar';
import Card from '../components/card';
import { connect } from 'react-redux';
import { Link,Redirect } from 'react-router-dom';
import '../css/app.css'

class Home extends Component {

    render(){
        return(
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
        )
    }
}

export default connect(state => state)(Home)