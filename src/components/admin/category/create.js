import {
  Form,
  Switch,
  Input,
  Button
} from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { createNewCategory, patchCategory } from "../../../store/category/category.action";
import React, { useState } from 'react'
import history from '../../../config/history'

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

const Create = (props) => {

  const category = useSelector((state) => state.category.edit)
  const isEdit = Object.keys(category).length > 0
  const typeReq = (data) => isEdit ? dispatch(patchCategory(category._id, data)) : dispatch(createNewCategory(data))


  const dispatch = useDispatch();
  const [form, setForm] = useState({
    ...category
  })
  

  const onFinish = (values) => {      
    typeReq(form)
    setForm({})
    if(isEdit){
      setTimeout(() => props.edit(), 500) 
    }
    history.push('/admin/category/list')
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
        ...form
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