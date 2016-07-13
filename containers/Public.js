import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ActionHome from 'material-ui/svg-icons/action/home';
import Tabs from '../components/Tabs';
import MomentList from '../components/MomentList';

import {fetchGetMoments} from '../actions/moments';


class Public extends Component {

    componentWillMount() {
        this.props.dispatch(fetchGetMoments())
    }

    render() {
        const {moments} = this.props;
        return (
            <div>
                <AppBar
                    title="Plant"
                    iconElementLeft={<IconButton linkButton={true} href="#/"><ActionHome /></IconButton>}
                    iconElementRight={<IconButton linkButton={true} href="#/share"><ContentAdd /></IconButton>}
                />
                <MomentList moments={moments}/>
                <Tabs index={1}/>
            </div>
        )
    }
}

Public.propTypes = {
    moments: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        moments: state.moments
    }
}

export default connect(mapStateToProps)(Public)
