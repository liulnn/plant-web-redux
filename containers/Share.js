import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import RaisedButton from 'material-ui/RaisedButton';
import MapsPlace from 'material-ui/svg-icons/maps/place';
import FileFileUpload from 'material-ui/svg-icons/file/file-upload';
import ContentCreate from 'material-ui/svg-icons/content/create';
import {GridList, GridTile} from 'material-ui/GridList';

import Formsy from 'formsy-react';
import {FormsyText} from 'formsy-material-ui/lib';

import FileUpload from '../components/FileUpload';

import {fetchUploadFile} from '../actions/qiniu';
import {fetchAddMoment} from '../actions/moments';


class Share extends Component {

    uploadCallback(file) {
        this.props.dispatch(fetchUploadFile(file, file.name));
    }

    handleSubmit(data) {
        var upload = this.props.upload;
        var images = [];
        for (var i = 0; i < upload.length; i++) {
            images.push({source: upload[i].sourceUrl});
        }
        this.props.dispatch(fetchAddMoment('test', data.content, data.place, images));
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
                <Formsy.Form
                    onValidSubmit={this.handleSubmit.bind(this)}
                >
                    <AppBar
                        iconElementLeft={<IconButton href="#/"><NavigationArrowBack /></IconButton>}
                        iconElementRight={<RaisedButton label="Send" type="submit" />}
                    />
                    <div>
                        <ContentCreate />
                        <FormsyText
                            name="content"
                            required
                            hintText="Write what you want to share!"
                            multiLine={true}
                        />
                    </div>
                    <div>
                        <MapsPlace />
                        <FormsyText
                            name="place"
                            required
                            hintText="Write your address"
                        />
                    </div>
                    <div>
                        <GridList cols={6} cellHeight={200}>
                            {images}
                        </GridList>
                        <FileFileUpload />
                        <FileUpload uploadCallback={this.uploadCallback.bind(this)}/>
                    </div>
                </Formsy.Form>
            </div>
        )
    }
}

Share.propTypes = {
    upload: PropTypes.array,
    share: PropTypes.object
};

function mapStateToProps(state) {
    return {
        upload: state.upload,
        share: state.share
    }
}

export default connect(mapStateToProps)(Share)
