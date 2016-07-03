import React, {Component, PropTypes} from 'react'
import SocialPerson from 'material-ui/svg-icons/social/person';
import CommunicationPhone from 'material-ui/svg-icons/communication/phone';
import CommunicationEmail from 'material-ui/svg-icons/communication/email';
import ContentAdd from 'material-ui/svg-icons/content/add';
import MapsPlace from 'material-ui/svg-icons/maps/place';
import {Card, CardMedia} from 'material-ui/Card';
import TextField from 'material-ui/TextField';

export default class UserInfo extends Component {
    render() {
        const {user} = this.props;
        return (
            <div>
                <Card>
                    <CardMedia>
                        <img src={user.avatar}/>
                    </CardMedia>
                </Card>
                <div>
                    <SocialPerson />
                    <TextField
                        id="text-field-default"
                        defaultValue={user.username}
                    />
                </div>
                <div>
                    <CommunicationPhone />
                    <TextField
                        id="text-field-default"
                        defaultValue={user.phone}
                    />
                </div>
                <div>
                    <CommunicationEmail />
                    <TextField
                        id="text-field-default"
                        defaultValue={user.email}
                    />
                </div>
                <div>
                    <MapsPlace />
                    <TextField
                        id="text-field-default"
                        defaultValue={user.place}
                    />
                </div>
                <div>
                    <ContentAdd />
                    <TextField
                        hintText="add note"
                    />
                </div>
            </div>
        )
    }
}

UserInfo.propTypes = {
    user: PropTypes.object.isRequired,
}
