import React, {Component, PropTypes} from 'react'
import FlatButton from 'material-ui/FlatButton';


export default class FileUpload extends Component {

    handleSubmit() {
        this.props.uploadCallback(this.props.token, this.refs.file);
    }

    render() {
        console.log('file upload', this.props.token);
        return (
            <div>
                <input type="file" name="file" ref="file"/>
                <FlatButton
                    label="Login"
                    primary={true}
                    type="submit"
                    onTouchTap={this.handleSubmit.bind(this)}
                />
            </div>
        )
    }
}

FileUpload.propTypes = {
    token: PropTypes.string.isRequired,
    uploadCallback: PropTypes.func.isRequired
}
