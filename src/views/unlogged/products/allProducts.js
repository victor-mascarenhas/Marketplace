import BaseLayout from '../../../components/layout'
import Card from '../../../components/products/cards'
import styled from 'styled-components'
import { Layout, Col, Menu } from 'antd'
import { getAllProducts } from '../../../store/product/product.action'
import { getAllCategories } from '../../../store/category/category.action'
import { MailOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../../components/loading'

const { Content } = Layout
const { SubMenu } = Menu;

const Products = () => {

  const loading = useSelector((state) => state.product.loading)
  const allProducts = useSelector((state) => state.product.all)
  const allCategories = useSelector((state) => state.category.all)

  const dispatch = useDispatch()
  const [update, setUpdate] = useState(false)
  const [menuFilter, setMenuFilter] = useState(false)
  const [category, setCategory] = useState({})

  const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
  const [openKeys, setOpenKeys] = useState(['sub1']);

  const onOpenChange = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  useEffect(() => {
    dispatch(getAllProducts())
    dispatch(getAllCategories())
    if (update) {
      setUpdate(false)
    }
  }, [dispatch, update])

  const setFilter = (props) => {
    setCategory(props)
    setMenuFilter(true)
  }

  const mountProducts = (props) => {
    const prods = allProducts.filter(item => item.category._id === props._id)

    if(!menuFilter){
      return (
        <CardBox>
          {
             allProducts.map((item, i) =>
             <Card
               key={i}
               id={item._id}
               photo={item.photo}
               title={item.title}
               description={item.description}
               category={item.category.name}
               partner={item.partner.name}
               highlight={item.highlight}
               price={item.price}
               status={item.status}
             />
         )
          }
        </CardBox>
      )
    }else{
      return (
        <CardBox>
          {
            prods.length === 0
              ? <h1> Nenhum produto cadastrado </h1>
              : (
                prods.map((item, i) =>
                  <Card
                    key={i}
                    id={item._id}
                    photo={item.photo}
                    title={item.title}
                    description={item.description}
                    category={item.category.name}
                    partner={item.partner.name}
                    highlight={item.highlight}
                    price={item.price}
                    status={item.status}
                  />
                )
              )
          }
        </CardBox>
      )
    }   
  }


  return (
    <BaseLayout banner={true}>
      <h1> Produtos </h1>
      <Main>
        <ContainerMenu span={5}>
          <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} style={{ width: 256 }} defaultOpenKeys={['sub1']} defaultSelectedKeys={["item1"]} >
            <SubMenu key="sub1" icon={<MailOutlined />} title="Categorias" >
            <Menu.Item key={['item1']} onClick={() => setMenuFilter(false)}>
                Todos os Produtos
                </Menu.Item>
              {allCategories.map((item, i) => (
                <Menu.Item key={i} onClick={() => setFilter(item)}>
                  {item.name}
                </Menu.Item>
              ))}              
            </SubMenu>
          </Menu>
        </ContainerMenu>
        <CardContainer span={19}>
          {loading ?
            <Loading />
            : mountProducts(category)}
        </CardContainer>
      </Main>
    </BaseLayout>
  );
}

export default Products;

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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 290px));
  grid-auto-rows: auto;
  grid-gap: 1rem;
  overflow-y: auto;  
`



