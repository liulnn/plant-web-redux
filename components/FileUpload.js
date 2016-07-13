import React, {Component, PropTypes} from 'react'


export default class FileUpload extends Component {

    handleSubmit() {
        this.props.uploadCallback(this.refs.fileUpload.files[0]);
    }

    render() {
        return (
            <div>
                <input type="file" name="file" ref="fileUpload" onChange={this.handleSubmit.bind(this)}/>
            </div>
        )
    }
}

FileUpload.propTypes = {
    uploadCallback: PropTypes.func.isRequired
}
