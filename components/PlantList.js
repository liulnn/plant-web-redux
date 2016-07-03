import React, {Component, PropTypes} from 'react'
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    gridList: {
        overflowY: 'auto',
    },
};


export default class PlantList extends Component {
    render() {
        const {plants} = this.props;
        return (
            <div style={styles.root}>
                <GridList cols={2} cellHeight={200} style={styles.gridList}>
                    {plants.map((tile) => (
                        <GridTile
                            key={tile.pid}
                            title={tile.title}
                            subtitle={<span>by <b>{tile.author}</b></span>}
                            actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                        >
                            <img src={tile.img}/>
                        </GridTile>
                    ))}
                </GridList>
            </div>
        )
    }
}


PlantList.propTypes = {
    plants: PropTypes.array.isRequired
};
