import LayoutAdmin from '../../components/admin/layout'
import Lista from '../../components/admin/list'
import Menu from '../../components/admin/menu'
import styled from 'styled-components'
import { Layout, Col } from 'antd'

const { Content } = Layout

const Admin = () => {
 

    return (
        <LayoutAdmin>
            <h1> brabo </h1>
            <Main>
                <ContainerMenu span={4}>
                    <Menu/>
                </ContainerMenu>
                <CardContainer span={20}>
                    <CardBox>
                    <Lista/>
                    </CardBox>
                </CardContainer>
            </Main>            
        </LayoutAdmin>
    )
}

export default Admin


const Main = styled(Content)`
display: flex;
`

const ContainerMenu = styled(Col)`
  padding: 20px;
`

const CardContainer = styled(Col)`
padding: 20px;
`
const CardBox = styled.div`
`
