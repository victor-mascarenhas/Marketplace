import { useState } from 'react'
import { Layout, Col, Form, Input, Button } from 'antd'
//import { useDispatch } from 'react-redux';
import styled from 'styled-components'
//import { signIn } from '../../store/sign/action.sign'

const { Content } = Layout


const SignIn = () => {

    //const dispatch = useDispatch()
    const [form, setForm] = useState({})
    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const submitForm = () => {
        //dispatch(signIn(form));
    }

    return (
        <Layout className="layout">
            <Main>
                <SliceSignIn span={12}>
                     <FormSignIn>
                        <Form
                            initialValues={{
                                ...form
                            }}
                        >
                            <h1>Não possui cadastro ? </h1>
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
                    </FormSignIn>
                </SliceSignIn>
                <SliceLogin span={12}>
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
                </SliceLogin>
            </Main>
        </Layout>
    );

};

export default SignIn

const Main = styled(Content)`
display: flex;
height: 100vh;
`
const SliceSignIn = styled(Col)`
height: 100vh;
  display: flex;
  padding: 20px;

  h1{
      color: black;
  }
`

const SliceLogin = styled(Col)`
height: 100vh;
  display: flex;
  background-image: linear-gradient(180deg, #1c516a, #061b35);
  padding: 20px;

  h1{
      color: white;
  }
`
const FormLogin = styled.div`
  padding: 20px;
  width: 100%;
  align-self: center;
`

const FormSignIn = styled.div`
  padding: 20px;
  width: 100%;
  align-self: center;
`