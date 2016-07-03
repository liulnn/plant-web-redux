import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const App = React.createClass({

    childContextTypes: {
        muiTheme: React.PropTypes.object.isRequired,
    },

    getChildContext: function () {
        return {muiTheme: getMuiTheme()}
    },
    render() {
        return (
            <div>
                <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <div>
                        {this.props.children}
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }
});


export default connect()(App)
