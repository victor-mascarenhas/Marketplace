import { Layout, Menu, Input } from 'antd'
import styled from 'styled-components'
import { FaHome, FaStoreAlt, FaHammer, FaShoppingCart } from 'react-icons/fa'
import { GiBrickWall } from 'react-icons/gi'
import { AiOutlineProfile } from 'react-icons/ai'
import { FiPower } from 'react-icons/fi'
import { CgProfile } from 'react-icons/cg'
import { Link } from 'react-router-dom'
import Banner from '../home/carousel'
import { useSelector } from 'react-redux'
import history from '../../config/history'
import { removeToken } from "../../config/auth";

const { Header, Content, Footer } = Layout;



const LayoutBase = ({ children, banner }) => {

  const MenuItems = [
    { order: "1", link: "/", title: "Home", icon: <FaHome /> },
    { order: "2", link: "/produtos", title: "Produtos", icon: <FaHammer /> },
    { order: "3", link: "/parceiros", title: "Parceiros", icon: <FaStoreAlt /> },
    { order: "4", link: "/carrinho", title: "Carrinho", icon: <FaShoppingCart /> },
    { order: "5", link: "/login", title: "Login", icon: <CgProfile /> },
  ];

  const getCurrent = MenuItems.filter(
    (item) => item.link === history.location.pathname
  )[0]

  const user = useSelector((state) => state.auth.user)
  const isPartner = useSelector((state) => state.auth.user.partner)
  const isLogged = Object.keys(user).length > 0

  const HandleLogout = () => {
    removeToken();
  }

  const logado = () => {
    if (isLogged) {
      MenuItems.pop()
    }
  }

  const parceiro = () => {
    if (isPartner) {
      MenuItems.pop()
      MenuItems.push({ order: "5", link: "/admin", title: "Painel", icon: <AiOutlineProfile /> },)
    }
  }




  const { Search } = Input;
  const onSearch = value => console.log(value);
  logado()
  parceiro()

  return (
    <Layout className="layout">
      <HeaderStyled>
        <Logo>
          <GiBrickWall />
        BuildingPlace
      </Logo>
        <SearchContainer>
          <Search placeholder="input search text" onSearch={onSearch} enterButton />
        </SearchContainer>
        <MenuStyled
          theme="dark"
          mode="horizontal"
          selectedKeys={[getCurrent?.order || ""]} >

          {MenuItems.map((m) => (
            <Menu.Item key={m.order}>
              <Link to={m.link}>
                {m.icon} {m.title}
              </Link>
            </Menu.Item>
          ))}


          {isLogged && 
          <Menu.Item key={10} onClick={HandleLogout}>
            <a href="/">
            <FiPower /> Sair
            </a>
          </Menu.Item>}
        </MenuStyled>
      </HeaderStyled>

      <ContentStyled>
        <div className="site-layout-content">
          {banner ? <Banner /> : ""}
          {children}
        </div>
      </ContentStyled>
      <Footer style={{ textAlign: 'center' }}>Todos os Direitos Reservados BuildingPlace | 2020</Footer>
    </Layout>

  )
}

export default LayoutBase

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
const SearchContainer = styled.div`
width: 25vw;
display: flex;
align-items: center;
margin: 5px; 
`

const ContentStyled = styled(Content)`
margin: 2rem 5rem;
  .site-layout-content {
    background: #fff;
    padding: 5px;
    min-height: 80vh;
  }`


