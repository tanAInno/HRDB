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
        department : '',
        status : '',
        phone : '',
        email : '',
        wifi_password : '',
        printer_password : '',
        assets : ''
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
        if(key == "status")
            this.setState({status : value})
        if(key == "phone")
            this.setState({phone : value})
        if(key == "email")
            this.setState({email : value})
        if(key == "last_edited")
            this.setState({last_edited : value})
        if(key == "wifi_password")
            this.setState({wifi_password : value})
        if(key == "printer_password")
            this.setState({printer_password : value})
        if(key == "assets")
            this.setState({assets : value})
    }

    _onSubmit = () => {
        const filter_list = []
        const card_list = this.props.cardlistReducer.permCardlist;
        for(let i=0; i < card_list.length; i++){
            if(card_list[i].employee_id.match(this.state.id) || this.state.id.length <= 0)
            if(card_list[i].name.toLowerCase().match(this.state.name.toLowerCase()) || this.state.name.length <= 0)
            if(card_list[i].position.toLowerCase().match(this.state.position.toLowerCase()) || this.state.position.length <= 0)
            if(card_list[i].department.toLowerCase().match(this.state.department.toLowerCase()) || this.state.department.length <= 0)
            if(card_list[i].status.toLowerCase().match(this.state.status.toLowerCase()) || this.state.status.length <= 0)
            if(card_list[i].phone.toLowerCase().match(this.state.phone.toLowerCase()) || this.state.phone.length <= 0)
            if(card_list[i].email.toLowerCase().match(this.state.email.toLowerCase()) || this.state.email.length <= 0)
            if(card_list[i].wifi_password.toLowerCase().match(this.state.wifi_password.toLowerCase()) || this.state.wifi_password.length <= 0)
            if(card_list[i].printer_password.toLowerCase().match(this.state.printer_password.toLowerCase()) || this.state.printer_password.length <= 0)
            if(card_list[i].assets.toLowerCase().match(this.state.assets.toLowerCase()) || this.state.assets.length <= 0)
                filter_list.push(card_list[i])
        }
        this.props.dispatch(setCardlist(filter_list))
    }
    
    _onClear = () => {
        this.setState({id : ''})
        this.setState({name : ''})
        this.setState({position : ''})
        this.setState({department : ''})
        this.setState({status : ''})
        this.setState({phone : ''})
        this.setState({email : ''})
        this.setState({wifi_password : ''})
        this.setState({printer_password : ''})
        this.setState({assets : ''},() => this._onSubmit())
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
                    
                    <div className="nav-text-wrapper"><FontAwesomeIcon icon="check-circle" className="nav-icon" /> Status</div>
                    <input type="text" 
                        className="nav-input-field"
                        value={this.state.status}
                        onChange={e => this._onChange("status",e.target.value)}
                        onKeyPress={this._handleKeyPress}></input>
                    
                    <div className="nav-text-wrapper"><FontAwesomeIcon icon="phone-square" className="nav-icon" /> Phone No.</div>
                    <input type="text" 
                        className="nav-input-field"
                        value={this.state.phone}
                        onChange={e => this._onChange("phone",e.target.value)}
                        onKeyPress={this._handleKeyPress}></input>
                    
                    <div className="nav-text-wrapper"><FontAwesomeIcon icon="envelope" className="nav-icon" /> E-mail</div>
                    <input type="text" 
                        className="nav-input-field"
                        value={this.state.email}
                        onChange={e => this._onChange("email",e.target.value)}
                        onKeyPress={this._handleKeyPress}></input>
                    
                    <div className="nav-text-wrapper"><FontAwesomeIcon icon="wifi" className="nav-icon" /> Wifi-Password</div>
                    <input type="text" 
                        className="nav-input-field"
                        value={this.state.wifi_password}
                        onChange={e => this._onChange("wifi_password",e.target.value)}
                        onKeyPress={this._handleKeyPress}></input>
                    
                    <div className="nav-text-wrapper"><FontAwesomeIcon icon="print" className="nav-icon" /> Printer Password</div>
                    <input type="text" 
                        className="nav-input-field"
                        value={this.state.printer_password}
                        onChange={e => this._onChange("printer_password",e.target.value)}
                        onKeyPress={this._handleKeyPress}></input>
                    
                    <div className="nav-text-wrapper"><FontAwesomeIcon icon="laptop" className="nav-icon" /> Assets</div>
                    <input type="text" 
                        className="nav-input-field"
                        value={this.state.assets}
                        onChange={e => this._onChange("assets",e.target.value)}
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

