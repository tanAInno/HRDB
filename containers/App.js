import React, {Component} from 'react';
import Banner from '../components/banner';
import NavBar from '../components/navbar';
import Card from '../components/card';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdBadge, faFileSignature, faBriefcase, faBuilding, faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faIdBadge,faFileSignature,faBriefcase,faBuilding,faSearch)

class App extends Component {
    state = {
        cardList : []
    }

    componentDidMount() {
        axios.get("http://localhost:8000/api/contacts/")
        .then(response => {
            console.log(response.data.data)
            const card_list = response.data.data.map(c => {
                return({
                    id : c.employee_id,
                    name : c.name,
                    position : c.position,
                    department : c.department     
                })
            })
            this.setState({cardList : card_list})
        }).catch(error => console.log(error))
    }

    render () {
        return (
            <div style={container}>
                <div style={wrapper}>
                    <Banner style={banner}/>
                    <div style={contentContainer}>
                        <NavBar style={navbar}/>
                        <div style={content}>
                            <div style={headerContainer}>
                                <div style={searchResultText}>Search Results</div>
                                <Link style={addButtonWrapper} to="/add">
                                    <button style={addButton}>Add +</button>
                                </Link>
                            </div>
                            <div style={cardContainer}>
                                {this.state.cardList.map((data, index) => {
                                    return(
                                        <Card 
                                            id={ data.id }
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

export default App;

const container = {
    width: '100%'
}

const wrapper = {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    width: '100%'
}

const contentContainer = {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
}

const content = {
    width: '80%',
    height: window.innerHeight + 'px'
}

const cardContainer = {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
}

const navbar = {
    width: '20%',
    height: window.innerHeight + 'px'
}

const banner = {
    width: '100%',
    height: '100%'
}

const headerContainer = {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    marginTop: '5px',
    justifyContent: 'center',
    alignItems: 'center'
}

const searchResultText = {
    fontSize: '24px',
    marginLeft: '7px'
}

const addButton = {
    width: '100%',
    height: '37px',
    backgroundColor: '#00007f',
    border: '2px solid #00004c',
    color: 'white',
    borderRadius: '5px',
    fontSize: '16px'
}

const addButtonWrapper = {
    width: '8%',
    height: '37px',
    marginLeft: 'auto'
}