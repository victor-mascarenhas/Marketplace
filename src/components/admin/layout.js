import { Layout, Menu, Col } from 'antd'
import styled from 'styled-components'
import { GiBrickWall } from 'react-icons/gi'
import { FiPower } from 'react-icons/fi'
import Sider from '../../components/admin/menu'

const { Header, Content, Footer } = Layout;


const LayoutAdmin = ({ children, menu }) => {


  return (
    <Layout className="layout">
      <HeaderStyled>
        <Logo>
          <GiBrickWall />
        BuildingPlace
                </Logo>

        <MenuStyled
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
        >

          <Menu.Item key={10}>
            {" "}
            <FiPower /> Sair
                    </Menu.Item>

        </MenuStyled>
      </HeaderStyled>

      <ContentStyled>
        <div className="site-layout-content">
          <ContainerMenu >
            <Sider menu={menu} />
          </ContainerMenu>
          <CardContainer >
            {children}
          </CardContainer>
        </div>
      </ContentStyled>
      <Footer style={{ textAlign: 'center' }}>Todos os Direitos Reservados BuildingPlace | 2020</Footer>
    </Layout>

  )
}

export default LayoutAdmin

const HeaderStyled = styled(Header)`
display: flex;
`
const MenuStyled = styled(Menu)`
  display: flex;
  justify-content: flex-end;
  svg {
    position: relative;
    margin-bottom: -2px;
  }
`

const Logo = styled.div`
 height: 31px;
  font-size: 30px;
  font-weight: 700;
  color: #fff;
  flex: 1;
  svg {
    position: relative;
    margin-bottom: -5px;
    margin-right: 5px;
  }
`

const ContentStyled = styled(Content)`
margin: 2rem 5rem;
  .site-layout-content {
    display:flex;
    background: #fff;
    padding: 5px;
    min-height: 80vh;
  }`

const ContainerMenu = styled(Col)`
  padding: 20px;
  width: 20vw;
  margin: 0 10px;
`

const CardContainer = styled(Col)`
padding: 20px;
width: 80vw;
margin: 0 10px;
`

