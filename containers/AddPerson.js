import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Banner from '../components/banner';
import route from '../api';
import axios from 'axios'
import '../css/addperson.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import firebase from 'firebase'
import FileUploader from 'react-firebase-file-uploader'

class AddPerson extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            imagePreviewUrl: '../assets/images/noprofilemale.gif',
            employee_id: '',
            name: '',
            position: '',
            department: '',
            status: '',
            phone: '',
            email: '',
            last_edited : '',
            wifi_password: '',
            assets: '',
            printer_password: '',
            image: '',
            isUploading: false
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
        console.log('handle uploading-', this.state.file);
    }

    async addPerson() {
        console.log("in add")
        await axios.post(route+"contacts/",{
            employee_id: this.state.employee_id,
            name: this.state.name,
            image: this.state.imagePreviewUrl,
            position: this.state.position,
            department: this.state.department,
            status: this.state.status,
            phone: this.state.phone,
            email: this.state.email,
            last_edited: this.state.last_edited,
            wifi_password: this.state.wifi_password,
            assets: this.state.assets,
            printer_password: this.state.printer_password,
        }).catch(error => console.log(error))
        location.reload()
    }

    pad = (n) => {
        return (n < 10) ? ("0" + n) : n;
    }

    handleChangeWithKey = (key,e) => {
        let tempDate = new Date()
        let date = this.pad(tempDate.getDate())+'-'+this.pad(tempDate.getMonth())+'-'+tempDate.getFullYear()
        console.log(date)
        this.setState({ last_edited : date })
        if(key == "id")
            this.setState({employee_id : e.target.value})
        if(key == "name")
            this.setState({name : e.target.value})
        if(key == "position")
            this.setState({position : e.target.value})
        if(key == "department")
            this.setState({department : e.target.value})
        if(key == "status")
            this.setState({status : e.target.value})
        if(key == "phone")
            this.setState({phone : e.target.value})
        if(key == "email")
            this.setState({email : e.target.value})
        if(key == "wifi_password")
            this.setState({wifi_password : e.target.value})
        if(key == "printer_password")
            this.setState({printer_password : e.target.value})
        if(key == "assets")
            this.setState({assets : e.target.value})
    }

    handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
    handleProgress = progress => this.setState({ progress });
    handleUploadError = error => {
        this.setState({ isUploading: false });
        console.error(error);
    };
    handleUploadSuccess = filename => {
        this.setState({ image: filename, progress: 100, isUploading: false });
        firebase
        .storage()
        .ref("images")
        .child(filename)
        .getDownloadURL()
        .then(url => this.setState({ imagePreviewUrl: url }));
    };

    render () {
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
          $imagePreview = (<img src={imagePreviewUrl} />);
        } else {
          $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }

        return (
          <div>
            <Banner/>
            <div className="add-container">
              <div className="previewWrapper">
                <div className="previewComponent">
                    <form onSubmit={(e)=>this.handleSubmit(e)}>
                        <FileUploader
                            className="fileInput"
                            accept="image/*"
                            name="image"
                            randomizeFilename
                            storageRef={firebase.storage().ref("images")}
                            onUploadStart={this.handleUploadStart}
                            onUploadError={this.handleUploadError}
                            onUploadSuccess={this.handleUploadSuccess}
                            onProgress={this.handleProgress}
                        />
                    </form>
                    <div className="imgPreview">
                        {$imagePreview}
                    </div>
                </div>
              </div>
              <div className="inputWrapper">
                    <div className="headerWrapper">Fill in the information</div>
                    
                    <div className="text-group-wrapper">
                        <div className="input-field-wrapper">
                            <div className="textWrapper"><FontAwesomeIcon icon="id-badge" className="icon" /> ID</div>
                            <input type="text" 
                                className="input-field-half" 
                                value={this.state.employee_id}
                                onChange={e => this.handleChangeWithKey("id",e)}></input>
                        </div>
                        <div className="input-field-wrapper">
                            <div className="textWrapper"><FontAwesomeIcon icon="file-signature" className="icon" />Name</div>
                            <input type="text" 
                                className="input-field-half" 
                                value={this.state.name}
                                onChange={e => this.handleChangeWithKey("name",e)}></input>
                        </div>
                    </div>
                    
                    <div className="text-group-wrapper">
                        <div className="input-field-wrapper">
                            <div className="textWrapper"><FontAwesomeIcon icon="wifi" className="icon" /> Wi-Fi Password</div>
                            <input type="text" 
                                className="input-field-half" 
                                value={this.state.wifi_password}
                                onChange={e => this.handleChangeWithKey("wifi_password",e)}></input>
                        </div>
                        <div className="input-field-wrapper">    
                            <div className="textWrapper"><FontAwesomeIcon icon="print" className="icon" /> Printer Password</div>
                            <input type="text" 
                                className="input-field-half" 
                                value={this.state.printer_password}
                                onChange={e => this.handleChangeWithKey("printer_password",e)}></input>
                        </div>
                    </div>

                    <div className="text-group-wrapper">        
                        <div className="input-field-wrapper">
                            <div className="textWrapper"><FontAwesomeIcon icon="check-circle" className="icon" /> Status</div>
                            <input type="text" 
                                className="input-field-half" 
                                value={this.state.status}
                                onChange={e => this.handleChangeWithKey("status",e)}></input>
                        </div>
                        <div className="input-field-wrapper">    
                            <div className="textWrapper"><FontAwesomeIcon icon="phone-square" className="icon" /> Phone No.</div>
                            <input type="text" 
                                className="input-field-half" 
                                value={this.state.phone}
                                onChange={e => this.handleChangeWithKey("phone",e)}></input>
                        </div>
                    </div>

                    <div className="textWrapper"><FontAwesomeIcon icon="briefcase" className="icon" /> Position</div>
                    <input type="text" 
                        className="input-field" 
                        value={this.state.position}
                        onChange={e => this.handleChangeWithKey("position",e)}></input>
                    
                    <div className="textWrapper"><FontAwesomeIcon icon="building" className="icon" /> Department</div>
                    <input type="text" 
                        className="input-field" 
                        value={this.state.department}
                        onChange={e => this.handleChangeWithKey("department",e)}></input>
                    
                    <div className="textWrapper"><FontAwesomeIcon icon="envelope" className="icon" /> E-Mail</div>
                    <input type="text" 
                        className="input-field" 
                        value={this.state.email}
                        onChange={e => this.handleChangeWithKey("email",e)}></input>
                    
                    <div className="textWrapper"><FontAwesomeIcon icon="laptop" className="icon" /> Assets</div>
                    <textarea type="text" 
                        className="textarea-field" 
                        value={this.state.assets}
                        onChange={e => this.handleChangeWithKey("assets",e)}></textarea>
                    
                    <div className="add-button-wrapper">
                    <Link to="/"><button className="submit-button" onClick={() => {this.addPerson()}}>Submit</button></Link>
                    <Link to="/"><button className="cancel-button">Cancel</button></Link>
                  </div>
              </div>
            </div>
          </div>
        )
    }
}

export default AddPerson
