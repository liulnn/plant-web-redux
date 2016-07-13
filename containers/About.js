import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';

class About extends Component {

    render() {
        return (
            <div>
                <AppBar
                    title="Plant"
                    iconElementLeft={<IconButton href="#/"><ActionHome /></IconButton>}
                />
                About
            </div>
        )
    }
}

export default connect()(About)
