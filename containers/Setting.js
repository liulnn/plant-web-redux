import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';
import {Link} from 'react-router';


class Setting extends Component {


    logout() {
        console.log('logout');
    }

    render() {
        return (
            <div>
                <AppBar
                    title="Plant"
                    iconElementLeft={<IconButton href="#/"><ActionHome /></IconButton>}
                />
                <List>
                    <Subheader>Priority Interruptions</Subheader>
                    <ListItem primaryText="Events and reminders" rightToggle={<Toggle />}/>
                    <ListItem primaryText="Calls" rightToggle={<Toggle />}/>
                    <ListItem primaryText="Messages" rightToggle={<Toggle />}/>
                </List>
                <Divider />
                <List>
                    <Subheader>Hangout Notifications</Subheader>
                    <ListItem primaryText="Notifications" leftCheckbox={<Checkbox />}/>
                    <ListItem primaryText="Sounds" leftCheckbox={<Checkbox />}/>
                    <ListItem primaryText="Video sounds" leftCheckbox={<Checkbox />}/>
                </List>
                <Divider />
                <List>
                    <ListItem primaryText="About" containerElement={<Link to="/about" />}/>
                </List>
                <Divider />
                <div>
                    <List>
                        <ListItem primaryText="Logout" onTouchTap={this.logout}/>
                    </List>
                </div>
            </div>
        )
    }
}

Setting.propTypes = {};

export default connect()(Setting)
