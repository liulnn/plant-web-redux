import React, {Component, PropTypes} from 'react'

import Moment from './Moment';

export default class MomentList extends Component {

    render() {
        const {moments} = this.props;
        return (
            <div>
                {moments.map((moment) => (
                    <Moment
                        key={moment.mid}
                        mid={moment.mid}
                        author={moment.author}
                        avatar={moment.avatar}
                        content={moment.content}
                        images={moment.images}
                        address={moment.address}
                    />
                ))}
            </div>
        );
    }
}

MomentList.propTypes = {
    moments: PropTypes.array.isRequired
}