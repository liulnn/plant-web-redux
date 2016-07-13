import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Link} from 'react-router';
import SocialPublic from 'material-ui/svg-icons/social/public';
import ImageCollections from 'material-ui/svg-icons/image/collections';
import SocialPerson from 'material-ui/svg-icons/social/person';

export default React.createClass({
    render() {
        return (
            <Tabs initialSelectedIndex={this.props.index}>
                <Tab containerElement={<Link to="/gallery" />} icon={<ImageCollections />}/>
                <Tab containerElement={<Link to="/public" />} icon={<SocialPublic />}/>
                <Tab containerElement={<Link to="/profile" />} icon={<SocialPerson />}/>
            </Tabs>
        )
    }
})
