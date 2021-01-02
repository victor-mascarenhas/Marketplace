import {
  Form,
  Switch,
  Input,
  Button
} from 'antd';
import { useDispatch } from "react-redux";
import { createNewCategory } from "../../../store/category/category.action";
import React, { useState } from 'react'

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

const Create = () => {

  const dispatch = useDispatch();
  const [form, setForm] = useState({})
  

  const onFinish = (values) => {      
    dispatch(createNewCategory(form))  
  };
  

const changes = (event, allevents) => {
  setForm({...allevents}) 
  
}

  return (
    <Form
      name="validate_other"
      {...formItemLayout}
      onFinish={onFinish}
      initialValues={{
      }}
      onValuesChange={changes}
    >

      <Form.Item
        name='name'
        label="Nome"        
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="status" label="Ativo?" valuePropName="checked">
        <Switch />
      </Form.Item>     

      <Form.Item
        wrapperCol={{
          span: 12,
          offset: 6,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
              </Button>
      </Form.Item>
    </Form>
  );
};




export default Create