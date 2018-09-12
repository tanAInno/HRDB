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
        personID : '',
        personName : '',
        personPosition : '',
        personDepartment : '',
        imagePreviewUrl: '',
    }

    componentDidMount(){
        console.log(this.props.personIDReducer)
        axios.get("http://localhost:8000/api/contacts/"+this.props.personIDReducer.personid)
        .then(response => {
            console.log(response)
            this.setState({personID : response.data.data.employee_id})
            this.setState({personName :  response.data.data.name})
            this.setState({personPosition : response.data.data.position})
            this.setState({personDepartment : response.data.data.department})
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
        if(key == "id")
            this.setState({personID : value})
        if(key == "name")
            this.setState({personName : value})
        if(key == "position")
            this.setState({personPosition : value})
        if(key == "department")
            this.setState({personDepartment : value})
    }

    async editPerson() {
        await axios.put("http://localhost:8000/api/contacts/"+this.props.personIDReducer.personid,{
            employee_id: this.state.personID,
            name: this.state.personName,
            image: this.state.imagePreviewUrl,
            position: this.state.personPosition,
            department: this.state.personDepartment
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
                            value={this.state.personID} 
                            onChange={e => this._onChange("id",e.target.value)}></input>
                        <div className="textWrapper"><FontAwesomeIcon icon="file-signature" className="icon" />Name</div>
                        <input type="text" 
                            className="input-field" 
                            value={this.state.personName}
                            onChange={e => this._onChange("name",e.target.value)}></input>
                        <div className="textWrapper"><FontAwesomeIcon icon="briefcase" className="icon" /> Position</div>
                        <input type="text" 
                            className="input-field" 
                            value={this.state.personPosition}
                            onChange={e => this._onChange("position",e.target.value)}></input>
                        <div className="textWrapper"><FontAwesomeIcon icon="building" className="icon" /> Department</div>
                        <input type="text" 
                            className="input-field" 
                            value={this.state.personDepartment}
                            onChange={e => this._onChange("department",e.target.value)}></input>
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