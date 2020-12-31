import { Layout, Button } from 'antd'
import { useState } from 'react'
import styled from 'styled-components'
import SignupForm from '../../components/sign/formSignUp'
import history from '../../config/history'

const { Content } = Layout


const Signup = () => {

    const [loja, setLoja] = useState(false)

    
    return (
        <Layout className="layout">
            <Main>
                <LoginContainer>
                    < SignupForm 
                    isPartner={loja}
                    />
                    <hr />
                    <br />
                    <Button
                        onClick={() => history.push('/login')}
                        type="link"
                        block
                    >                        
                    Já possuí cadastro? Faça login!                            
                    </Button>
                    { !loja 
                    ? <Button
                        onClick={() => setLoja(true)}
                        type="link"
                        block
                    >                        
                    Seja nosso parceiro, cadastre sua loja!                            
                    </Button> 
                    : <Button
                    onClick={() => setLoja(false)}
                    type="link"
                    block
                >                        
                voltar                           
                </Button>}

                    
                </LoginContainer>
            </Main>
        </Layout>
    );

};

export default Signup

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

