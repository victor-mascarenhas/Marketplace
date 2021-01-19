import BaseLayout from '../../components/layout'
import Card from '../../components/products/cards'
import styled from 'styled-components'
import { Layout, Col, Image } from 'antd'
import { getOnePartner } from '../../store/partner/partner.action'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../components/loading'



const { Content } = Layout

const OpenPartner = () => {

    const dispatch = useDispatch()
    const { partnerId } = useParams()
    const [update, setUpdate] = useState(false)
    const loading = useSelector((state) => state.product.loading)
    const partnerProducts = useSelector((state) => state.partner.partner.products)
    const partner = useSelector((state) => state.partner.partner)

    useEffect(() => {
      dispatch(getOnePartner(partnerId))
      if (update) {
          setUpdate(false)
      }
  }, [dispatch, partnerId, update])

  const mountPost = () => {

    if (partnerProducts) {
     return partnerProducts.map((item, i) => (
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
    <Image
      preview={false}
      src={partner.photo}
    />
    <Main>
    <ContainerMenu span={4}>    
    <h1>Imagem Parceiro</h1>  
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
  )
}

export default OpenPartner

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
