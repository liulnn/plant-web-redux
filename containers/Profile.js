import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionSettings from 'material-ui/svg-icons/action/settings';

import Tabs from '../components/Tabs';
import UserInfo from '../components/UserInfo';


class Profile extends Component {

    render() {
        const {user} = this.props;
        return (
            <div>
                <AppBar
                    title="Plant"
                    iconElementLeft={<IconButton href="#/"><ActionHome /></IconButton>}
                    iconElementRight={<IconButton href="#/setting"><ActionSettings /></IconButton>}
                />
                <UserInfo user={user}/>
                <Tabs index={2}/>
            </div>
        )
    }
}

Profile.propTypes = {
    user: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Profile)
