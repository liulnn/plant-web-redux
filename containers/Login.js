import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'

import AppBar from 'material-ui/AppBar';
import AutoComplete from 'material-ui/AutoComplete';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton'
import ImageNature from 'material-ui/svg-icons/image/nature';

import {login} from '../actions/account';


class Login extends Component {

    handleSubmit() {
        this.props.dispatch(login(
            this.refs.username.input.value,
            this.refs.password.input.value)
        );
    }

    render() {
        return (
            <div>
                <AppBar
                    title="Plant"
                    iconElementLeft={<IconButton><ImageNature /></IconButton>}
                />
                <form onSubmit={this.handleSubmit}>
                    <AutoComplete
                        hintText="Type Username"
                        dataSource=""
                        onUpdateInput={this.handleUpdateUsernameInput}
                        floatingLabelText="Username"
                        fullWidth={true}
                        ref="username"
                    />
                    <TextField
                        hintText="Type Password"
                        floatingLabelText="Password"
                        value=""
                        type="password"
                        fullWidth={true}
                        ref="password"
                    />
                    <FlatButton
                        label="Login"
                        primary={true}
                        // linkButton={true}
                        // href="#/"
                        type="submit"
                    />
                </form>
            </div>

        )
    }
}

export default connect()(Login)
