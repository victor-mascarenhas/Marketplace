import BaseLayout from '../../../components/layout'
import Sider from '../../../components/products/sideMenu'
import Card from '../../../components/products/cards'
import styled from 'styled-components'
import { Layout, Col } from 'antd'
import { getAllProducts } from '../../../store/product/product.action'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../../components/loading'

const { Content } = Layout

const Products = () => {
  const dispatch = useDispatch()
  const [update, setUpdate] = useState(false)
  const loading = useSelector((state) => state.product.loading)
  const allProducts = useSelector((state) => state.product.all)

  useEffect(() => {
    dispatch(getAllProducts())
    if(update){
    setUpdate(false)
    }
  }, [dispatch, update])

  const mountPost = () => {

    if (allProducts) {
     return allProducts.map((item, i) => (
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
      ));
    }
    return;
  }


  return (
    <BaseLayout banner={true}> 
    <h1> Produtos </h1>
    <Main>
    <ContainerMenu span={4}>    
    <Sider/>  
    </ContainerMenu> 
    <CardContainer span={20}> 
    <CardBox>          
    {loading ? 
      <Loading /> 
      : mountPost()}         
          </CardBox>
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



