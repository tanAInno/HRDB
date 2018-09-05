import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Banner from '../components/banner';
import '../css/addperson.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class AddPerson extends Component {
    constructor(props) {
      super(props);
      this.state = {file: '',imagePreviewUrl: ''};
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
                  <input type="text" className="input-field"></input>
                  <div className="textWrapper"><FontAwesomeIcon icon="file-signature" className="icon" />Name</div>
                  <input type="text" className="input-field"></input>
                  <div className="textWrapper"><FontAwesomeIcon icon="briefcase" className="icon" /> Position</div>
                  <input type="text" className="input-field"></input>
                  <div className="textWrapper"><FontAwesomeIcon icon="building" className="icon" /> Department</div>
                  <input type="text" className="input-field"></input>
                  <div className="add-button-wrapper">
                    <Link to="/"><button className="submit-button">Submit</button></Link>
                    <Link to="/"><button className="cancel-button">Cancel</button></Link>
                  </div>
              </div>
            </div>
          </div>
        )
    }
}

export default AddPerson
