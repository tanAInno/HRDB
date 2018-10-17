import React, {Component} from 'react';
import Home from '../sidepages/home';
import Activity from '../sidepages/activity';
import Cookies from 'js-cookie'
import { connect } from 'react-redux';
import { setCardlist, setPermaCardList, setFilterCardList, setCounter } from '../actions/cardlist';
import { Link,Redirect } from 'react-router-dom';
import axios from 'axios';
import route from '../api'
import { Tabs,TabLink,TabContent } from 'react-tabs-redux'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdBadge, faFileSignature, faBriefcase, faBuilding, 
    faSearch, faCheckCircle, faPhoneSquare, faEnvelope, faWifi, 
    faPrint, faLaptop } from '@fortawesome/free-solid-svg-icons'
import '../css/app.css'
import '../css/banner.css'

library.add(faIdBadge,faFileSignature,faBriefcase,faBuilding,
    faSearch,faCheckCircle,faPhoneSquare,faEnvelope,faWifi,faPrint
    ,faLaptop)

class App extends Component {

    constructor() {
        super()
        this.state = {
            cookieExpired : false
        }
        this.handleOnScroll = this.handleOnScroll.bind(this)
    }

    componentDidMount() {
        let cookie = Cookies.get('access_token')
        console.log(cookie)
        if(cookie == '' || cookie == 'undefined' || cookie == undefined){
            this.setState({cookieExpired : true})
            console.log(this.state.cookieExpired)
        }
        else{
            this.getTable()
        }
        window.addEventListener('scroll', this.handleOnScroll);
    }
    
    componentWillMount() {
        window.removeEventListener('scroll', this.handleOnScroll);
    }

    async getTable(){
        await axios.get(route+"contacts/")
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
        card_list.sort(function(a,b){
            return a.employee_id - b.employee_id
        })
        this.props.dispatch(setPermaCardList(card_list))
        this.props.dispatch(setFilterCardList(card_list))
        this.props.dispatch(setCardlist(card_list.slice(0,20)))
        }).catch(error => console.log(error))
    }

    _onSubmit() {
        Cookies.remove('access-token')
    }

    handleOnScroll() {
        var scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        var scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
        var clientHeight = document.documentElement.clientHeight || window.innerHeight;
        var scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

        if (scrolledToBottom) {
            let counter = this.props.cardlistReducer.counter
            let addList = this.props.cardlistReducer.permCardlist.slice(counter,counter+20)
            this.props.dispatch(setCounter(counter+20))
            let newList = this.props.cardlistReducer.cardlist.concat(addList)
            this.props.dispatch(setCardlist(newList))
        }
      }

    render () {
        if(this.state.cookieExpired){
            return <Redirect to="/"/>
        }
        return (
            <Tabs className="app-container"
                activeLinkStyle={{borderBottom: "5px solid #00b8ff",fontColor: "#00b8ff"}}>
                <div className="app-wrapper">
                    <div className="backGround">
                        <TabLink className="header-text-wrapper" to="home">
                            <button className="header-text">Home</button>
                        </TabLink>
                        <TabLink className="header-text-wrapper" to="report">
                            <button className="header-text">Report</button>
                        </TabLink>
                        <TabLink className="header-text-wrapper" to="act">
                            <button className="header-text">Activities</button>
                        </TabLink>
                        <TabLink className="header-text-wrapper" to="user">
                            <button className="header-text">Manage Users</button>
                        </TabLink>
                        <Link to="/"><button className="logout-button" onClick={() => this._onSubmit()}>Logout</button></Link>
                    </div>
                    <TabContent for="home">
                        <Home/>
                    </TabContent>
                    <TabContent for="act">
                        <Activity/>
                    </TabContent>
                </div>
            </Tabs>
        )
    }
}

export default connect(state => state)(App);
