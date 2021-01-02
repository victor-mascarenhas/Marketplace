import {
  Form,
  Select,
  InputNumber,
  Switch,
  Input,
  Button,
  Upload
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useDispatch } from "react-redux";
import { createNewProduct } from "../../../store/product/product.action";
import React, { useState } from 'react'

const { Option } = Select;
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


  const normFile = (e) => {

    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };


  const onFinish = (values) => {                 

    let data = new FormData()
    Object.keys(form)
      .forEach(key => data.append(key, form[key]))
    const config = {      
      headers: {
        'Content-type': 'multipart/form-data'
      }
    } 


    dispatch(createNewProduct(data, config))  
  };
  

const changes = (event, allevents) => {
  setForm({...allevents}) 
  if(allevents.photo){
  setForm({
    ...form,
    photo: allevents.photo[0].originFileObj
  })
}
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
        name='title'
        label="Nome"
        
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item name='description' label="Descrição">
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        name="category"
        label="Categoria"
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please select your country!',
          },
        ]}
      >
        <Select placeholder="Please select a country">
          <Option value="5feb8792542ba538a0225c06">Ferramentas</Option>
          <Option value="5fec1c9af457382b24b4765e">Materiais de construção</Option>
        </Select>
      </Form.Item>

      <Form.Item label="preço">
        <Form.Item name="price" noStyle>
          <InputNumber min={0} max={1000} />
        </Form.Item>
      </Form.Item>

      <Form.Item name="highlight" label="Destaque" valuePropName="checked">
        <Switch />
      </Form.Item>

      <Form.Item
        name="photo"
        label="Imagem"
        valuePropName="file"
        getValueFromEvent={normFile}
      >
        <Upload name="logo" listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
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