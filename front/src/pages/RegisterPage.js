import React, { useState } from 'react';
import Layout from '../components/myLayout';
import {
  Form,
  Input,
  Select,
  Checkbox,
  Button,
  Alert,
  Spin
} from 'antd';
import "../styles/pages/RegisterPage.scss"
import { register } from '../services/network'
import { withUser } from '../store/UserProvider';
import Upload from '../components/imageUpload'


const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const RegisterPage = (props) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const onFinish = values => {
    setLoading(true)
    setError(false);
    setSuccess(false)
    delete values.agreement
    delete values.confirm
    register(values).then(res => {
      setLoading(false)
      setSuccess(true)
      props.setUser(res.user)
    }).catch(err => {
      console.error(err);
      setError(true);
      setSuccess(false)
      setLoading(false)
    })
  };

  const handleImage = (picture) => {
    form.setFieldsValue({ picture })
  }

  return (
    <Layout error={error}>
      {(success) ? <Alert message="Creation succeed" type="success" /> : null}
      <div className="registerPage">
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          scrollToFirstError
        >
          <Form.Item
            name="picture"
            label="Profil picture"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Upload setImage={handleImage}></Upload>
          </Form.Item>
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
          <Form.Item
            name="lastname"
            label="Lastname"
            initialValue=""
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
              {
                min: 8,
                message: 'Please input min 6 char',
              }
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject('The two passwords that you entered do not match!');
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name="status" label="Status" rules={[{ required: true }]}>
            <Select
              placeholder="Select a status"
              allowClear
            >
              <Option value="TEACHER">Teacher</Option>
              <Option value="TEACHER_ASSISTANT">Teacher assistant</Option>
              <Option value="STUDENT">Student</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="newsletter"
            valuePropName="checked"
            initialValue={false}
            {...tailFormItemLayout}
          >
            <Checkbox defaultChecked={false}>
              Subscribe to newsletter
          </Checkbox>
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value ? Promise.resolve() : Promise.reject('Should accept agreement'),
              },
            ]}
            {...tailFormItemLayout}
          >
            <Checkbox>
              I have read the agreement
          </Checkbox>
          </Form.Item>
          {loading ?
            <div> <Spin size="large"/> </div>:
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          }
        </Form>
      </div>
    </Layout>
  );
};


export default withUser(RegisterPage);