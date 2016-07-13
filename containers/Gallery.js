import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionSearch from 'material-ui/svg-icons/action/search';

import Tabs from '../components/Tabs';
import PlantList from '../components/PlantList';

import {getPlants} from '../actions/plants';


class Gallery extends Component {

    componentWillMount() {
        this.props.dispatch(getPlants([]))
    }

    render() {
        const {plants} = this.props;
        return (
            <div>
                <AppBar
                    title="Plant"
                    iconElementLeft={<IconButton linkButton={true} href="#/"><ActionHome /></IconButton>}
                    iconElementRight={<IconButton><ActionSearch /></IconButton>}
                />
                <PlantList plants={plants}/>
                <Tabs index={0}/>
            </div>
        )
    }
}

Gallery.propTypes = {
    plants: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        plants: state.plants
    }
}

export default connect(mapStateToProps)(Gallery)
