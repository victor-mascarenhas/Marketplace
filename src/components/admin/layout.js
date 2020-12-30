import { Layout, Menu } from 'antd'
import styled from 'styled-components'
import { GiBrickWall } from 'react-icons/gi'
import { FiPower } from 'react-icons/fi'

const { Header, Content, Footer } = Layout;
 

const LayoutAdmin = ({ children }) => {
   

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
                    {children}
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
    background: #fff;
    padding: 5px;
    min-height: 80vh;
  }`


