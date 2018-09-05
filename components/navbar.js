import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class NavBar extends Component {
    render() {
        return(
            <div style={container}>
                <a style={filter}>Search Filter <FontAwesomeIcon icon="search" style={searchIcon} /></a>
                <div style={filterContainer}>
                    <div style={textSetWrapper}>
                        <div style={textWrapper}><FontAwesomeIcon icon="id-badge" style={icon} /> ID</div>
                    </div>
                    <input type="text" style={inputField}></input>
                        <div style={textWrapper}><FontAwesomeIcon icon="file-signature" style={icon} />Name</div>
                    <input type="text" style={inputField}></input>
                        <div style={textWrapper}><FontAwesomeIcon icon="briefcase" style={icon} /> Position</div>
                    <input type="text" style={inputField}></input>
                        <div style={textWrapper}><FontAwesomeIcon icon="building" style={icon} /> Department</div>
                    <input type="text" style={inputField}></input>
                </div>
            </div>
        )
    }
}

export default NavBar

const searchIcon = {
    fontSize: '25px',
    marginBottom: '2px'
}

const filter = {
    fontSize: '28px',
    marginTop: '10px',
    marginLeft: '10px'
}

const icon = {
    fontSize: '20px',
    marginBottom: '1px',
    color: '#00004c'
}

const container = {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    height: window.innerHeight + 'px',
    backgroundColor: '#4b738e'
}

const textWrapper = {
    fontSize: '20px'
}

const textSetWrapper = {
    display: 'flex',
    flex: 1,
    flexDirection: 'row'
}

const filterContainer = {
    marginTop: '10px',
    marginLeft: '10px'
}

const inputField = {
    width: '94%',
    marginTop: '5px',
    marginBottom: '5px',
    fontSize: '20px'
}