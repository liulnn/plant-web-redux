import React, {PropTypes} from 'react'

import Snackbar from 'material-ui/Snackbar';


export default class Toast extends React.Component {
    render() {
        const {open, message, autoHideDuration, onRequestClose} = this.props;
        return (
            <div>
                <Snackbar
                    open={open}
                    message={message}
                    autoHideDuration={autoHideDuration}
                    onRequestClose={onRequestClose}
                />
            </div>
        )
    }
}

Toast.propTypes = {
    open: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    autoHideDuration: PropTypes.number.isRequired,
    onRequestClose: PropTypes.func.isRequired
};
