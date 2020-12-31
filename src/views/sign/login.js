import { Layout, Button } from 'antd'
import styled from 'styled-components'
import LoginForm from '../../components/sign/formSignIn'
import history from '../../config/history'

const { Content } = Layout


const SignIn = () => {

    
    return (
        <Layout className="layout">
            <Main>
                <LoginContainer>
                    <LoginForm />
                    <hr />
                    <br />
                    <Button
                        onClick={() => history.push('/signup')}
                        type="link"
                        block
                    >                        
                    Não tem cadastro? Cadastre-se!                        
                    </Button>
                    

                </LoginContainer>
            </Main>
        </Layout>
    );

};

export default SignIn

const Main = styled(Content)`
display: flex;
height: 100vh;
justify-content: center;
align-items: center;
`

const LoginContainer = styled.div`
width: 30vw;
height: 60vh;

hr{
    display: block;
    margin-left: auto;
    margin-right: auto ;
    width:15vw; 
}
`

