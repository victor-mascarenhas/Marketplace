import { Layout, Menu, Col } from 'antd'
import styled from 'styled-components'
import { GiBrickWall } from 'react-icons/gi'
import { FiPower } from 'react-icons/fi'
import Sider from '../../components/admin/menu'
import { removeToken } from "../../config/auth";
import { AiOutlineProfile } from 'react-icons/ai'
import { FaHome, FaStoreAlt, FaHammer} from 'react-icons/fa'
import history from '../../config/history'
import { Link } from 'react-router-dom'


const { Header, Content, Footer } = Layout;


const MenuItems = [
  { order: "1", link: "/", title: "Home", icon: <FaHome /> },
  { order: "2", link: "/produtos", title: "Produtos", icon: <FaHammer /> },
  { order: "3", link: "/parceiros", title: "Parceiros", icon: <FaStoreAlt /> },
  { order: "5", link: "/admin", title: "Painel", icon: <AiOutlineProfile /> },
];


const LayoutAdmin = ({ children, menu }) => {
  

  const getCurrent = MenuItems.filter(
    (item) => item.link === history.location.pathname
  )[0]

  const HandleLogout = () => {
    removeToken();
  }


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
          selectedKeys={[getCurrent?.order || ""]}
        >

          {MenuItems.map((m) => (
            <Menu.Item key={m.order}>
              <Link to={m.link}>
                {m.icon} {m.title}
              </Link>
            </Menu.Item>
          ))}          

          <Menu.Item key={10} onClick={HandleLogout}>
          <a href="/">
            <FiPower /> Sair
            </a>
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

