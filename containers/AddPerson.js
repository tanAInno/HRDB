import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Banner from '../components/banner';
import axios from 'axios'
import '../css/addperson.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class AddPerson extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            imagePreviewUrl: '',
            employee_id: '',
            name: '',
            position: '',
            department: '',
            imageUrl: ''
        };
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

    async addPerson() {
        console.log("in add")
        await axios.post("http://localhost:8000/api/contacts/",{
            employee_id: this.state.employee_id,
            name: this.state.name,
            position: this.state.position,
            department: this.state.department
        }).catch(error => console.log(error))
        location.reload()
    }

    handleChangeWithKey = (key,e) => {
        if(key == "id")
            this.setState({employee_id : e.target.value})
        if(key == "name")
            this.setState({name : e.target.value})
        if(key == "position")
            this.setState({position : e.target.value})
        if(key == "department")
            this.setState({department : e.target.value})
    }

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
                        <input className="fileInput" 
                          type="file" 
                          onChange={(e)=>this.handleImageChange(e)}/>
                        <button className="submitButton" 
                          type="submit"
                          onClick={(e)=>this.handleSubmit(e)}>
                            Upload Image
                        </button>
                    </form>
                    <div className="imgPreview">
                        {$imagePreview}
                    </div>
                </div>
              </div>
              <div className="inputWrapper">
                  <div className="headerWrapper">Fill in the information</div>
                  <div className="textWrapper"><FontAwesomeIcon icon="id-badge" className="icon" /> ID</div>
                  <input type="text" 
                      className="input-field" 
                      value={this.state.employee_id}
                      onChange={e => this.handleChangeWithKey("id",e)}></input>
                  <div className="textWrapper"><FontAwesomeIcon icon="file-signature" className="icon" />Name</div>
                  <input type="text" 
                      className="input-field" 
                      value={this.state.name}
                      onChange={e => this.handleChangeWithKey("name",e)}></input>
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
