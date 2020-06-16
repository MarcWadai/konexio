

import React from 'react';
import { Card, Avatar,  } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import constants from '../services/config';
import "../styles/components/ProfileCard.scss";

const { Meta } = Card;

function ProfileCard({ user }) {
    const statusTostring = status => constants.status[status]
    const actions = user.isCurrent ? [<EditOutlined key="edit" />] : []
    return (
        <Card 
            hoverable={true}
            actions={actions}
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