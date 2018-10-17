import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/navbar.css'
import { setCardlist,setPermaCardList,setCounter } from '../actions/cardlist'
import { connect } from 'react-redux'

class HomeNavBar extends Component {
    state = {
        id : '',
        name : '',
        position : '',
        department : ''
    }

    _onChange = (key,value) => {
        if(key == "id")
            this.setState({id : value},() => this._onSubmit())
        if(key == "name")
            this.setState({name : value},() => this._onSubmit())
        if(key == "position")
            this.setState({position : value},() => this._onSubmit())
        if(key == "department")
            this.setState({department : value},() => this._onSubmit())
    }

    _onSubmit = () => {
        const filter_list = []
        const card_list = this.props.cardlistReducer.filterCardlist;
        for(let i=0; i < card_list.length; i++){
            if(card_list[i].employee_id.match(this.state.id) || this.state.id.length <= 0)
            if(card_list[i].name.toLowerCase().match(this.state.name.toLowerCase()) || this.state.name.length <= 0)
            if(card_list[i].position.toLowerCase().match(this.state.position.toLowerCase()) || this.state.position.length <= 0)
            if(card_list[i].department.toLowerCase().match(this.state.department.toLowerCase()) || this.state.department.length <= 0)
               filter_list.push(card_list[i])
        }
        this.props.dispatch(setPermaCardList(filter_list))
        this.props.dispatch(setCounter(20))
        this.props.dispatch(setCardlist(filter_list.slice(0,20)))
    }

    _onSelect(value){
        this.setState({department : value},() => this._onSubmit())
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

                    <form>
                        <div className="radio-wrapper">
                        <label>
                            <input type="radio"
                            name="selectedDepartment"
                            defaultChecked="true"
                            onChange={() => this._onSelect("")} 
                            value=""/> All</label></div>
                        <div className="radio-group-wrapper">
                            <div className="radio-wrapper">
                            <label>
                                <input type="radio"
                                name="selectedDepartment"
                                onChange={() => this._onSelect("Executive")} 
                                value="executive"/> EXEC</label></div>
                            <div className="radio-wrapper">
                            <label>
                                <input type="radio"
                                name="selectedDepartment"
                                onChange={() => this._onSelect("Building Services Engineering")} 
                                value="Building Services Engineering"/> BSE</label></div>
                        </div>
                        <div className="radio-group-wrapper">
                            <div className="radio-wrapper">
                            <label>
                                <input type="radio"
                                name="selectedDepartment"
                                onChange={() => this._onSelect("Engineering Consulting Services")}  
                                value="Engineering Consulting Services"/> EEC</label></div>
                            <div className="radio-wrapper">
                            <label>
                                <input type="radio"
                                name="selectedDepartment"
                                onChange={() => this._onSelect("Engineering Support Services")}  
                                value="Engineering Support Services"/> ESS</label></div>
                        </div>
                        <div className="radio-group-wrapper">
                            <div className="radio-wrapper">
                            <label>
                                <input type="radio"
                                name="selectedDepartment"
                                onChange={() => this._onSelect("Business Development")}  
                                value="Business Development"/> BD</label></div>
                            <div className="radio-wrapper">
                            <label>
                                <input type="radio"
                                name="selectedDepartment"
                                onChange={() => this._onSelect("Quality System")}  
                                value="Quality System"/> QS</label></div>
                        </div>
                        <div className="radio-group-wrapper">
                            <div className="radio-wrapper">
                            <label>
                                <input type="radio"
                                name="selectedDepartment"
                                onChange={() => this._onSelect("Accounting")} 
                                value="Accounting"/> ACC</label></div>
                            <div className="radio-wrapper">
                            <label>
                                <input type="radio" 
                                name="selectedDepartment" 
                                onChange={() => this._onSelect("Human Resource")}
                                value="Human Resource"/> HR</label></div>
                        </div>
                        <div className="radio-group-wrapper">
                            <div className="radio-wrapper">
                            <label>
                                <input type="radio"
                                name="selectedDepartment"
                                onChange={() => this._onSelect("Administration")}  
                                value="Administration"/> ADM</label></div>
                            <div className="radio-wrapper">
                            <label>
                                <input type="radio"
                                name="selectedDepartment" 
                                onChange={() => this._onSelect("Oxyz")} 
                                value="Oxyz"/> Oxyz(PD)</label></div>
                        </div>
                    </form>

                    <button className="clear-button"
                        onClick={this._onClear}>
                        Clear
                    </button>
                </div>
            </div>
        )
    }
}

export default connect(state => state)(HomeNavBar)

