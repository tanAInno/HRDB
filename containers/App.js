import React, {Component} from 'react';
import Banner from '../components/banner';
import NavBar from '../components/navbar';
import Card from '../components/card';
import {connect} from 'react-redux';
import {setMessage} from '../actions/message';
import {Link} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdBadge, faFileSignature, faBriefcase, faBuilding, faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faIdBadge,faFileSignature,faBriefcase,faBuilding,faSearch)

class App extends Component {
    state = {
        cardList : [{id:"111111",name:"John",position:"Engineer",department:"IT"},
                    {id:"112211",name:"Mark",position:"Manager",department:"IT"},
                    {id:"222222",name:"Jack",position:"Engineer",department:"Site"},
                    {id:"323221",name:"Nate",position:"HR",department:"HR"}]
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
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    width: '100%'
}

const wrapper = {
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
    border: '2px solid #32CD32',
    borderRadius: '5px',
    fontSize: '16px',
    backgroundColor: '#00FF00'
}

const addButtonWrapper = {
    width: '8%',
    height: '37px',
    marginLeft: 'auto'
}