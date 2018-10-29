import React, {Component} from 'react';
import NavBar from '../components/activitynavbar';
import Card from '../components/activitycard';
import { connect } from 'react-redux';
import axios from 'axios';
import route from '../api'
import { Link,Redirect } from 'react-router-dom';
import { Tabs,TabLink,TabContent } from 'react-tabs-redux'
import '../css/app.css'
import { setActivitylist, setAddlist, setEditlist, setDeletelist } from '../actions/cardlist';

class Activity extends Component {

    state = {
        list: []
    }

    componentDidMount(){
        this.getActivities()
    }

    async getActivities(){
        await axios.get(route+"activities/")
        .then(response => {
            const act_list = response.data.data.map(c => {
                return({
                    id: c._id,
                    date: c.date,
                    user: c.user,
                    action: c.action,
                    target: c.target
                })
            })
            const add_list = []
            const edit_list = []
            const delete_list = []
            for(let i=0; i<act_list.length;i++){
                if(act_list[i].action == "Added")
                    add_list.push(act_list[i])
                if(act_list[i].action == "Edited")
                    edit_list.push(act_list[i])
                if(act_list[i].action == "Deleted")
                    delete_list.push(act_list[i])
            }
            this.props.dispatch(setActivitylist(act_list))
            this.props.dispatch(setAddlist(add_list))
            this.props.dispatch(setEditlist(edit_list))
            this.props.dispatch(setDeletelist(delete_list))
        })
    }

    render(){
        return(
            <div className="app-content-container">
                <NavBar/>
                <div className="content">
                    <Tabs className="table-wrapper"
                        activeLinkStyle={{backgroundColor: "#00b8ff"}}>
                        <div className="tab-box-container">
                            <TabLink className="tab-link-wrapper" to="all">
                                <button className="tab-link-container">All</button>
                            </TabLink>
                            <TabLink className="tab-link-wrapper" to="add">
                                <button className="tab-link-container">Added</button>
                            </TabLink>
                            <TabLink className="tab-link-wrapper" to="edit">
                                <button className="tab-link-container">Edited</button>
                            </TabLink>
                            <TabLink className="tab-link-wrapper" to="delete">
                                <button className="tab-link-container">Deleted</button>
                            </TabLink>
                        </div>
                        <div className="table-header-container">
                            <div className="table-header-date">Date</div>
                            <div className="table-header-name">By User</div>
                            <div className="table-header-action">Action</div>
                            <div className="table-header-target">Target</div>
                        </div>
                        <TabContent for="all">
                            {this.props.cardlistReducer.act_list.map((data,index) => {
                                return(
                                    <Card
                                        id={data.id}
                                        index={index}
                                        date={data.date}
                                        user={data.user}
                                        action={data.action}
                                        target={data.target}
                                        update={() => {this.forceUpdate()}}
                                    />
                                )
                            })}
                        </TabContent>
                        <TabContent for="add">
                            {this.props.cardlistReducer.add_list.map((data,index) => {
                                return(
                                    <Card
                                        id={data.id}
                                        index={index}
                                        date={data.date}
                                        user={data.user}
                                        action={data.action}
                                        target={data.target}
                                        update={() => {this.forceUpdate()}}
                                    />
                                )
                            })}
                        </TabContent>
                        <TabContent for="edit">
                            {this.props.cardlistReducer.edit_list.map((data,index) => {
                                return(
                                    <Card
                                        id={data.id}
                                        index={index}
                                        date={data.date}
                                        user={data.user}
                                        action={data.action}
                                        target={data.target}
                                        update={() => {this.forceUpdate()}}
                                    />
                                )
                            })}
                        </TabContent>
                        <TabContent for="delete">
                            {this.props.cardlistReducer.delete_list.map((data,index) => {
                                return(
                                    <Card
                                        id={data.id}
                                        index={index}
                                        date={data.date}
                                        user={data.user}
                                        action={data.action}
                                        target={data.target}
                                        update={() => {this.forceUpdate()}}
                                    />
                                )
                            })}
                        </TabContent>
                    </Tabs>
                </div>
            </div>
        )
    }

}

export default connect(state => state)(Activity)