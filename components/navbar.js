import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/navbar.css'
import { setCardlist } from '../actions/cardlist'
import { connect } from 'react-redux'

class NavBar extends Component {
    state = {
        id : '',
        name : '',
        position : '',
        department : ''
    }

    _onChange = (key,value) => {
        if(key == "id")
            this.setState({id : value})
        if(key == "name")
            this.setState({name : value})
        if(key == "position")
            this.setState({position : value})
        if(key == "department")
            this.setState({department : value})
    }

    _onSubmit = () => {
        const filter_list = []
        const card_list = this.props.cardlistReducer.permCardlist;
        console.log(" i "+this.state.id+" n "+this.state.name+" p "+this.state.position+" d "+this.state.department)
        for(let i=0; i < card_list.length; i++){
            if(card_list[i].employee_id.match(this.state.id) || this.state.id.length <= 0)
            if(card_list[i].name.toLowerCase().match(this.state.name) || this.state.name.length <= 0)
            if(card_list[i].position.toLowerCase().match(this.state.position) || this.state.position.length <= 0)
            if(card_list[i].department.toLowerCase().match(this.state.department) || this.state.department.length <= 0)
                filter_list.push(card_list[i])
        }
        this.props.dispatch(setCardlist(filter_list))
    }
    
    _onClear = () => {
        this.setState({id : ''})
        this.setState({name : ''})
        this.setState({position : ''})
        this.setState({department : ''},() => this._onSubmit())
    }

    _handleKeyPress = (e) => {
        if (e.key === 'Enter') 
            this._onSubmit()
    }

    render() {
        return(
            <div className="nav-container">
                <a className="filter-text">Search Filter <FontAwesomeIcon icon="search" className="search-icon" /></a>
                <div className="filter-container">
                    <div className="text-set-wrapper">
                        <div className="nav-text-wrapper"><FontAwesomeIcon icon="id-badge" className="nav-icon" /> ID</div>
                    </div>
                    <input type="text" 
                        className="nav-input-field"
                        value={this.state.id}
                        onChange={e => this._onChange("id",e.target.value)}
                        onKeyPress={this._handleKeyPress}></input>
                    <div className="nav-text-wrapper"><FontAwesomeIcon icon="file-signature" className="nav-icon" />Name</div>
                    <input type="text" 
                        className="nav-input-field"
                        value={this.state.name}
                        onChange={e => this._onChange("name",e.target.value)}
                        onKeyPress={this._handleKeyPress}></input>
                    <div className="nav-text-wrapper"><FontAwesomeIcon icon="briefcase" className="nav-icon" /> Position</div>
                    <input type="text" 
                        className="nav-input-field"
                        value={this.state.position}
                        onChange={e => this._onChange("position",e.target.value)}
                        onKeyPress={this._handleKeyPress}></input>
                    <div className="nav-text-wrapper"><FontAwesomeIcon icon="building" className="nav-icon" /> Department</div>
                    <input type="text" 
                        className="nav-input-field"
                        value={this.state.department}
                        onChange={e => this._onChange("department",e.target.value)}
                        onKeyPress={this._handleKeyPress}></input>
                    <button className="clear-button"
                        onClick={this._onClear}>
                        Clear
                    </button>
                    <button className="search-button"
                        onClick={this._onSubmit}>
                        Search
                    </button>
                </div>
            </div>
        )
    }
}

export default connect(state => state)(NavBar)

