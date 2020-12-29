import { useState } from 'react'
import { Form, Input, Button } from 'antd'
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { signIn } from '../../store/sign/action.sign'



const LoginForm = () => {

    const dispatch = useDispatch()
    const [form, setForm] = useState({})
    
    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }
    
    const submitForm = () => {
        dispatch(signIn(form));
    }


    return (
        <FormLogin>
            <Form
                initialValues={{
                    ...form
                }}
            >
                <h1> Login </h1>
                <Form.Item
                    name="email"
                    rules={[{
                        required: true,
                        message: 'Please input your email!'
                    }]}
                >
                    <Input
                        name="email"
                        value={form.email || ""}
                        onChange={handleChange}
                        placeholder="email@example.com"
                    />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{
                        required: true,
                        message: 'Please input your password!'
                    }]}
                >
                    <Input.Password
                        name="password"
                        value={form.password || ""}
                        onChange={handleChange}
                        placeholder="Password"
                    />
                </Form.Item>

                <Form.Item >
                    <Button
                        onClick={submitForm}
                        type="primary"
                        htmlType="submit"
                    >
                        Submit
        </Button>
                </Form.Item>
            </Form>
        </FormLogin>

    )
}

export default LoginForm

const FormLogin = styled.div`
  padding: 20px;
  width: 100%;
  align-self: center;
`