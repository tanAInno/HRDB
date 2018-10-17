import React, {Component} from 'react';
import NavBar from '../components/activitynavbar';
import Card from '../components/activitycard';
import { connect } from 'react-redux';
import { Link,Redirect } from 'react-router-dom';
import { Tabs,TabLink,TabContent } from 'react-tabs-redux'
import '../css/app.css'

class Activity extends Component {

    state = {
        list: [{date: "17/10/2018",user: "Admin",action: "Added",target: "100101 Armstrong"},
            {date: "16/10/2018",user: "Admin",action: "Edited",target: "103455 Edward"},
            {date: "15/10/2018",user: "Admin",action: "Deleted",target: "123456 Alex"},]
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
                            {this.state.list.map((data,index) => {
                                return(
                                    <Card
                                        date={data.date}
                                        user={data.user}
                                        action={data.action}
                                        target={data.target}
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

export default Activity