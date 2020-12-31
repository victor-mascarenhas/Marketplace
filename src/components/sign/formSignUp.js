import { useState } from 'react'
import { Form, Input, Button } from 'antd'
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { signUp } from '../../store/sign/action.sign'



const SignUpForm = (props) => {

    const isPartner = props.isPartner

    

    const dispatch = useDispatch()
    const [form, setForm] = useState({
        
    })    
    const handleChange = (event) => {
        setForm({
            ...form, 
            partner: isPartner,
            [event.target.name]: event.target.value
        })
    }    
    const submitForm = () => {
        dispatch(signUp(form));
    }


    return (
        <FormLogin>
            <Form
                initialValues={{
                    ...form
                }}
            >
                <h1> {isPartner ? 'Seja uma loja parceira' : 'Cadastre-se'} </h1>
                <br/>
                <Form.Item
                    name="name"
                    rules={[{
                        required: true,
                        message: 'Por favor insira o nome'
                    }]}
                >
                    <Input
                        name="name"
                        value={form.name || ""}
                        onChange={handleChange}
                        placeholder="Seu nome"
                    />
                </Form.Item>
                <Form.Item
                    name="email"
                    rules={[{
                        required: true,
                        message: 'Por favor insira o e-mail'
                    }]}
                >
                    <Input
                        name="email"
                        value={form.email || ""}
                        onChange={handleChange}
                        placeholder="Seu e-mail"
                    />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{
                        required: true,
                        message: 'Por favor insira uma senha'
                    }]}
                >
                    <Input.Password
                        name="password"
                        value={form.password || ""}
                        onChange={handleChange}
                        placeholder="Sua senha"
                    />
                </Form.Item>
                
                <Form.Item >
                    <Button
                        onClick={submitForm}
                        type="primary"
                        htmlType="submit"
                        block
                    >
                        Enviar
        </Button>
                </Form.Item>
            </Form>
        </FormLogin>

    )
}

export default SignUpForm

const FormLogin = styled.div`
  padding: 20px;
  width: 100%;
  align-self: center;
`