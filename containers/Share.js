import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import MapsPlace from 'material-ui/svg-icons/maps/place';
import FileFileUpload from 'material-ui/svg-icons/file/file-upload';
import ContentCreate from 'material-ui/svg-icons/content/create';

import FileUpload from '../components/FileUpload';

import {getToken} from '../actions/qiniu';


class Share extends Component {
    componentWillMount() {
        this.props.dispatch(getToken())
    }

    uploadCallback(key) {
        console.log('heheh', key);
    }

    render() {
        const {token} = this.props;
        return (
            <div>
                <AppBar
                    iconElementLeft={<IconButton linkButton={true} href="#/"><NavigationArrowBack /></IconButton>}
                    iconElementRight={<FlatButton label="Send" />}
                />
                <form>
                    <div>
                        <ContentCreate />
                        <TextField
                            name="content"
                            multiLine={true}
                            hintText="Write what you want to share!"
                            ref="content"
                        />
                    </div>
                    <div>
                        <MapsPlace />
                        <TextField
                            name="place"
                            hintText="Write your address"
                            ref="place"
                        />
                    </div>
                    <div>
                        <FileFileUpload />
                        <FileUpload token={token} uploadCallback={this.uploadCallback.bind(this)}/>
                    </div>
                </form>
            </div>
        )
    }
}

Share.propTypes = {
    token: PropTypes.string.isRequired
};

function mapStateToProps(state) {
    return {
        token: state.token
    }
}

export default connect(mapStateToProps)(Share)
