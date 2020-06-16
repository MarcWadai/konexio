import React, { useEffect, useState } from 'react';
import Layout from '../components/myLayout'
import { useParams } from "react-router";
import { Input } from 'antd';
import "../styles/pages/DetailPage.scss";
import { withUser } from '../store/UserProvider';

function DetailPage(props) {
  let { userId } = useParams();
  const [user, setUser] = useState({})

  useEffect(() => {
    // code to run on component mount
    setUser({
      id: userId,
      firstname: 'firstname',
      lastname: "lastname",
      status: 'TEACHER',
      email: "aemame@fef.fr",
      newsletter: false
    })
  }, [])

  const canUpdate = () => {
  }

  return (
    <Layout>
      <div className="detailPage">
        Detail information about {userId}
        <Input className="inputItem"
          addonBefore="Firstname"
          disabled={true}
          value={user.firstname || ""}
        ></Input>
        <Input className="inputItem"
          addonBefore="Lastname"
          disabled={true}
          value={user.lastname || ""}
        ></Input>
        <Input className="inputItem"
          addonBefore="Email"
          disabled={true}
          value={user.email || ""}
        ></Input>
        <Input className="inputItem"
          addonBefore="Status"
          disabled={true}
          value={user.status || ""}
        ></Input>
        <Input className="inputItem"
          addonBefore="Subscribed to newsletter"
          disabled={true}
          value={user.newsletter || false}
        ></Input>
      </div>
    </Layout>
  );
}

export default withUser(DetailPage);
