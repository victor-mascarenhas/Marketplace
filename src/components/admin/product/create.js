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
import { useDispatch, useSelector } from "react-redux";
import { createNewProduct, updateProduct } from "../../../store/product/product.action";
import { getAllCategories } from '../../../store/category/category.action'
import React, { useState } from 'react'
import history from '../../../config/history'
import styled from 'styled-components'
import { useEffect } from 'react'

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

const Create = (props) => {

  const product = useSelector((state) => state.product.edit)
  const [updatePhoto, setUpdatePhoto] = useState(false)
  const allCategories = useSelector((state) => state.category.all)
  const isEdit = Object.keys(product).length > 0
  const typeReq = (data) => isEdit ? dispatch(updateProduct(product._id, data)) : dispatch(createNewProduct(data))

  
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    ...product
  })

  useEffect(() => {
    dispatch(getAllCategories())    
  }, [dispatch])


  const removePhoto = () => {
    setUpdatePhoto(true)
    setForm({
      ...form,
      photo: ""
    })
  }

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

    typeReq(data, config)
    setForm({})
    if (isEdit) {
      setTimeout(() => props.edit(), 500)
    }
    history.push('/admin/product/list')
  };


  const changes = (event, allevents) => {
    setForm({ ...allevents })
    if (allevents.photo && allevents.photo[0].originFileObj ) {
      setForm({
        ...allevents,
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
        ...form
      }}
      onValuesChange={changes}
    >

      <Form.Item
        name='title'
        label="Nome"

        rules={[
          {
            required: true,
            message: 'Insira um nome',
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
            message: 'Selecione uma categoria',
          },
        ]}
      >
        <Select placeholder="Selecione uma categoria">
        {allCategories.map((ctg, i) => (
          <Option key={i} value={ctg._id}>{ctg.name}</Option>
        ))}
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
        {updatePhoto ? <Upload name="logo" listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload> : ""}        
        
      </Form.Item>

      {isEdit && !updatePhoto ? <Thumb>
        <img src={form.photo} alt="thumbnail" />
        <span onClick={removePhoto}>Remover</span>
      </Thumb>
      : "" }


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

const Thumb = styled.div`
display: flex; 
flex-direction: column;
margin: 2rem 5rem;
img{
max-height: 200px;
max-width: 200px;
}
span{
    color:red;
    &:hover{
        cursor:pointer;
    }
    
}
`