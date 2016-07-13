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
import {GridList, GridTile} from 'material-ui/GridList';

import FileUpload from '../components/FileUpload';

import {fetchUploadFile} from '../actions/qiniu';


class Share extends Component {

    uploadCallback(file) {
        this.props.dispatch(fetchUploadFile(file, file.name));
    }

    render() {
        const {upload} = this.props;
        var images = [];
        for (var i = 0; i < upload.length; i++) {
            images.push(
                <GridTile
                    key={upload[i].uniqueId}
                >
                    <img src={upload[i].sourceUrl}/>
                </GridTile>)
        }

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
                        <GridList cols={6} cellHeight={200}>
                            {images}
                        </GridList>
                        <FileUpload uploadCallback={this.uploadCallback.bind(this)}/>
                    </div>
                </form>
            </div>
        )
    }
}

Share.propTypes = {
    upload: PropTypes.array
};

function mapStateToProps(state) {
    return {
        upload: state.upload
    }
}

export default connect(mapStateToProps)(Share)
