import React, { useEffect, useState } from 'react';
import Layout from '../components/myLayout'
import { useParams } from "react-router";
import { Input, Form, Button, Alert } from 'antd';
import "../styles/pages/DetailPage.scss";
import { withUser } from '../store/UserProvider';
import { getUser, updateFirstname } from '../services/network';

function DetailPage(props) {
  let { userId } = useParams();
  const [user, setUser] = useState({})
  const [error, setError] = useState(false)
  const [isCurrent, setIsCurrent] = useState(false)
  const [success, setSuccess] = useState(false)
  const [form] = Form.useForm();

  useEffect(() => {
    if (props.currentUser && props.currentUser.id && props.currentUser.id === userId) {
      setIsCurrent(true)
    }
    getUser(userId).then(result => {
      setUser(result)
      form.setFieldsValue({ firstname: result.firstname })
    }).catch(err => setError(true))
  }, [form, props.currentUser, userId])

  const onUpdate = (data) => {
    setError(false)

    updateFirstname({id: userId, firstname: data.firstname}).then((data) => {
      setSuccess(true)
    }).catch(err => {
      setError(true)
    })
  }


  return (
    <Layout error={error}>
      {(success) ? <Alert message="Update succeed" type="success" /> : null}
      <div className="detailPage">
        <h2>Detail information about {user.firstname}</h2>

        <div >
          <img src={user.picture} alt="avatar"/>
        </div>
        {isCurrent ?
          <div>
            <Form
              form={form}
              name="update"
              onFinish={onUpdate}
              layout="inline"
            >
              <Form.Item
                name="firstname"
                label="Firstname"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Update
                </Button>
              </Form.Item>
            </Form>
          </div> :
          <Input className="inputItem"
            addonBefore="Firstname"
            disabled={true}
            value={user.firstname || ""}
          ></Input>
        }
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
        <Input className="inputItem"
          addonBefore="id"
          disabled={true}
          value={user.id || false}
        ></Input>
      </div>
    </Layout>
  );
}

export default withUser(DetailPage);
