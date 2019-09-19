import React, { Component } from "react";
import axios from 'axios';
import './home.css';

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {

		};

        this.uploadFile = this.uploadFile.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);

	}

    onChangeHandler(event) {
        const file = event.target.files[0];
        this.setState({
            selectedFile: file
        });
    }

    uploadFile() {

        let data = new FormData();
        data.append('file', this.state.selectedFile);

        console.log(this.state.selectedFile);
        console.log(data);

        axios({
            method: 'POST',
            url: '/api/uploadImage',
            data,
            headers: {
                //'content-type': `multipart/form-data; boundary=${data._boundary}`,
            }
        });

    }

	render() {
		return (
			<div className="home">

                <input
                    type="file"
                    name="file"
                    onChange={this.onChangeHandler}
                />
                <button
                    type="button"
                    onClick={this.uploadFile}>
                Upload File
                </button>

			</div>
		);
	}
}

export default Home;
