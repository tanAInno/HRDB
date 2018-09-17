import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Banner from '../components/banner';
import '../css/editperson.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import axios from 'axios';
import firebase from 'firebase';
import FileUploader from 'react-firebase-file-uploader'

class EditPerson extends Component {
    state = {
        id : '',
        name : '',
        position : '',
        department : '',
        status : '',
        phone : '',
        email : '',
        wifi_password: '',
        printer_password: '',
        assets: '',
        last_edited : '',
        imagePreviewUrl: '',
    }

    componentDidMount(){
        console.log(this.props.personIDReducer)
        axios.get("http://localhost:8000/api/contacts/"+this.props.personIDReducer.personid)
        .then(response => {
            console.log(response)
            this.setState({id : response.data.data.employee_id})
            this.setState({name :  response.data.data.name})
            this.setState({position : response.data.data.position})
            this.setState({department : response.data.data.department})
            this.setState({status : response.data.data.status})
            this.setState({phone : response.data.data.phone})
            this.setState({email : response.data.data.email})
            this.setState({wifi_password : response.data.data.wifi_password})
            this.setState({printer_password : response.data.data.printer_password})
            this.setState({assets : response.data.data.assets})
            this.setState({imagePreviewUrl: response.data.data.image})
        }).catch(error => console.log(error))
    }

    handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
        console.log('handle uploading-', this.state.file);
    }

    handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result
          });
        }

        reader.readAsDataURL(file)
    }

    _onChange = (key,value) => {
        let tempDate = new Date()
        let date = this.pad(tempDate.getDate())+'-'+this.pad(tempDate.getMonth())+'-'+tempDate.getFullYear()
        console.log(date)
        this.setState({ last_edited : date })
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
        if(key == "wifi_password")
            this.setState({wifi_password : value})
        if(key == "printer_password")
            this.setState({printer_password : value})
        if(key == "assets")
            this.setState({assets : value})
    }

    pad = (n) => {
        return (n < 10) ? ("0" + n) : n;
    }

    async editPerson() {
        await axios.put("http://localhost:8000/api/contacts/"+this.props.personIDReducer.personid,{
            employee_id: this.state.id,
            name: this.state.name,
            image: this.state.imagePreviewUrl,
            position: this.state.position,
            department: this.state.department,
            status: this.state.status,
            phone: this.state.phone,
            email: this.state.email,
            last_edited: this.state.last_edited,
            wifi_password: this.state.wifi_password,
            printer_password: this.state.printer_password,
            assets: this.state.assets
        }).catch(error => console.log(error))
        location.reload()
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

    render() {
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
          $imagePreview = (<img src={imagePreviewUrl} />);
        } else {
          $imagePreview = (<img src="../assets/images/noprofilemale.gif" />);
        }

        return (
            <div>
                <Banner />
                <div className="edit-container">
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
                    <div className="edit-detail-wrapper">
                        <div className="headerWrapper">Fill in the information</div>
                        
                        <div className="textWrapper"><FontAwesomeIcon icon="id-badge" className="icon" /> ID</div>
                        <input type="text" 
                            className="input-field" 
                            value={this.state.id} 
                            onChange={e => this._onChange("id",e.target.value)}></input>
                        
                        <div className="textWrapper"><FontAwesomeIcon icon="file-signature" className="icon" />Name</div>
                        <input type="text" 
                            className="input-field" 
                            value={this.state.name}
                            onChange={e => this._onChange("name",e.target.value)}></input>
                        
                        <div className="textWrapper"><FontAwesomeIcon icon="briefcase" className="icon" /> Position</div>
                        <input type="text" 
                            className="input-field" 
                            value={this.state.position}
                            onChange={e => this._onChange("position",e.target.value)}></input>
                        
                        <div className="textWrapper"><FontAwesomeIcon icon="building" className="icon" /> Department</div>
                        <input type="text" 
                            className="input-field" 
                            value={this.state.department}
                            onChange={e => this._onChange("department",e.target.value)}></input>
                        
                        <div className="textWrapper"><FontAwesomeIcon icon="check-circle" className="icon" /> Status</div>
                        <input type="text" 
                            className="input-field" 
                            value={this.state.status}
                            onChange={e => this._onChange("status",e.target.value)}></input>
                        
                        <div className="textWrapper"><FontAwesomeIcon icon="phone-square" className="icon" /> Phone No.</div>
                        <input type="text" 
                            className="input-field" 
                            value={this.state.phone}
                            onChange={e => this._onChange("phone",e.target.value)}></input>
                        
                        <div className="textWrapper"><FontAwesomeIcon icon="envelope" className="icon" /> E-Mail</div>
                        <input type="text" 
                            className="input-field" 
                            value={this.state.email}
                            onChange={e => this._onChange("email",e.target.value)}></input>
                        
                        <div className="textWrapper"><FontAwesomeIcon icon="wifi" className="icon" /> Wi-Fi Password</div>
                        <input type="text" 
                            className="input-field" 
                            value={this.state.wifi_password}
                            onChange={e => this._onChange("wifi_password",e.target.value)}></input>
                        
                        <div className="textWrapper"><FontAwesomeIcon icon="print" className="icon" /> Printer Password</div>
                        <input type="text" 
                            className="input-field" 
                            value={this.state.printer_password}
                            onChange={e => this._onChange("printer_password",e.target.value)}></input>

                        <div className="textWrapper"><FontAwesomeIcon icon="laptop" className="icon" /> Assets</div>
                        <textarea type="text" 
                            className="textarea-field" 
                            value={this.state.assets}
                            onChange={e => this._onChange("assets",e.target.value)}></textarea>

                        <div className="add-button-wrapper">
                            <Link to="/"><button className="submit-button" onClick={() => {this.editPerson()}}>Submit</button></Link>
                            <Link to="/"><button className="cancel-button">Cancel</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(state => state)(EditPerson)