import {
    Form,
    Input,
    Button,
    Upload
  } from 'antd';
  import { UploadOutlined } from '@ant-design/icons';
  import { useDispatch } from "react-redux";
  import { updatePartner } from "../../../store/partner/partner.action";
  import React, { useState } from 'react'
  import history from '../../../config/history'
  import styled from 'styled-components'
  
  const formItemLayout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 14,
    },
  };
  
  const FormPartner = (props) => {  
  
    const dispatch = useDispatch();
    const [updatePhoto, setUpdatePhoto] = useState(false)
    const isEdit = Object.keys(props.partner).length > 0

    const typeReq = (data) => dispatch(updatePartner(props.partner.id, data)) 
    
    
    const [form, setForm] = useState({
      ...props.partner
    }) 
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
      setTimeout(() => props.edit(), 500)
      history.push('/admin/')
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
          name='name'
          label="Nome da Loja"
  
          rules={[
            {
              required: true,
              message: 'Insira um nome',
            },
          ]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item name='email' label="E-mail" 
        rules={[
            {
              required: true,
              message: 'Insira um e-mail',
            },
          ]}>
          <Input />
        </Form.Item>
  
        <Form.Item
          name="password"
          label="Senha"
          rules={[
            {
              required: true,
              message: 'Insira uma senha',
            },
          ]}
        >
         <Input.Password/>
        </Form.Item>        
  
        <Form.Item
          name="photo"
          label="Imagem"
          valuePropName="file"
          getValueFromEvent={normFile}
        >
          {isEdit && !updatePhoto 
          ? 
          <Thumb>
          <img src={form.photo} alt="thumbnail" />
          <span onClick={removePhoto}>Remover</span>
         </Thumb>
         :
         <Upload name="logo" listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>  
          }        
          
        </Form.Item>      
  
  
        <Form.Item
          wrapperCol={{
            span: 12,
            offset: 6,
          }}
        >
          <Button block type="primary" htmlType="submit">
            Submit
                </Button>
        </Form.Item>
      </Form>
    );
  };
  
  
  
  
  export default FormPartner
  
  const Thumb = styled.div`
  img{
  height: 200px !important;
  width: 200px !important;
  }
  span{
      margin-top: 2rem;
      color:red;
      &:hover{
          cursor:pointer;
      }    
  }
  `