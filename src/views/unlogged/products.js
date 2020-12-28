import BaseLayout from '../../components/layout'
import Sider from '../../components/products/sideMenu'
import Card from '../../components/products/cards'
import styled from 'styled-components'
import { Layout, Col } from 'antd'

const { Content } = Layout

const Products = () => {

  const mockCards = [...Array(10).keys()]

  return (
    <BaseLayout banner={true}> 
    <h1> Produtos </h1>
    <Main>
    <ContainerMenu span={4}>    
    <Sider/>  
    </ContainerMenu> 
    <CardContainer span={20}> 
    <CardBox>          
          {mockCards.map((v, i) => (
            <Card key={i}/>
          ))}            
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



