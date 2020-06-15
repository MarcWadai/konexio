

import React from 'react';
import { Card, Avatar } from 'antd';
import constants from '../services/config';
import "../styles/components/ProfileCard.scss";

const { Meta } = Card;

function ProfileCard({ user }) {
    const statusTostring = status => constants.status[status]
        
    return (
        <Card 
            hoverable={true}
        >
            <Meta
                avatar={<Avatar size="large" src={user.picture}/>}
                title={`${user.firstname} ${user.lastname}`}
                description={statusTostring(user.status)}
            />
        </Card>
      );
}

export default ProfileCard