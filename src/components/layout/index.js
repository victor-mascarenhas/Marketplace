import { Layout, Menu, Input } from 'antd'
import styled from 'styled-components'
import { FaHome, FaStoreAlt, FaHammer, FaShoppingCart } from 'react-icons/fa'
import { GiBrickWall } from 'react-icons/gi'
import { CgProfile } from 'react-icons/cg'
import { Link } from 'react-router-dom'
import history from '../../config/history'
import Banner from '../home/carousel'

const { Header, Content, Footer } = Layout; 

const MenuItems = [
    { order: "1", link: "/", title: "Home", icon: <FaHome /> },
    { order: "2", link: "/produtos", title: "Produtos", icon: <FaHammer /> },
    { order: "3", link: "/parceiros", title: "Parceiros", icon: <FaStoreAlt />},
    { order: "4", link: "/carrinho", title: "Carrinho", icon: <FaShoppingCart /> },    
    { order: "5", link: "/login", title: "Login", icon: <CgProfile /> },
  ];

const LayoutBase = ({children, banner}) => {

  const getCurrent = MenuItems.filter((m) => m.link === history.location.pathname)
  const { Search } = Input;
  const onSearch = value => console.log(value);


    return(
        <Layout className="layout">
    <HeaderStyled>
        <Logo>
        <GiBrickWall/>
        BuildingPlace
      </Logo>
      <SearchContainer>
      <Search placeholder="input search text" onSearch={onSearch} enterButton />
      </SearchContainer>
      <MenuStyled 
      theme="dark" 
      mode="horizontal" 
      defaultSelectedKeys={['1']} 
      selectedKeys={[getCurrent[0].order]}>

       {MenuItems.map((m) => (
           <Menu.Item key={m.order}>
             <Link to={m.link}>
             {m.icon} {m.title}
             </Link>
             </Menu.Item>
       ))}
       
      </MenuStyled>
    </HeaderStyled>
    
    <ContentStyled>      
      <div className="site-layout-content">   
      {banner ? <Banner/> : ""}      
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


