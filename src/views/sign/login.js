import { Layout, Col } from 'antd'
import styled from 'styled-components'
import LoginForm from '../../components/sign/formSignIn'
import SignUpForm from '../../components/sign/formSignUp'

const { Content } = Layout


const SignIn = () => {
      
    return (
        <Layout className="layout">
            <Main>
                <SliceSignUp span={12}>
                <SignUpForm/>
                </SliceSignUp>
                <SliceLogin span={12}>
                <LoginForm/>
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
const SliceSignUp = styled(Col)`
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
