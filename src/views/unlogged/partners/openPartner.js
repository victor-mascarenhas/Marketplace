import BaseLayout from '../../../components/layout/'
import Card from '../../../components/products/cards'
import styled from 'styled-components'
import { Layout, Col, Image } from 'antd'
import { getOnePartner } from '../../../store/partner/partner.action'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../../components/loading'



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

  const mountProducts = () => {

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
    <BaseLayout banner={false}>

      <Main>
        <ContainerMenu span={4}>
          <PartnerImage
            preview={false}
            src={partner.photo}
          />
          <h1>{partner.name}</h1>
        </ContainerMenu>
        <CardContainer span={20}>
        <ContainerTitle>
          <Title>Todos os Produtos</Title>
          </ContainerTitle>          
          <CardBox>
            {loading ?
              <Loading />
              : mountProducts()}
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
display: flex;
flex-direction: column;
align-items: center;
background: #6BB38E;
min-height: 80vh;
font-size: 20px;
font-weight: 600;
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

const PartnerImage = styled(Image)`
display: block !important;
`

const ContainerTitle = styled.div`
padding: 3rem 1rem;
width: 100%;
`
const Title = styled.div`
font-size: 30px;
font-weight: 600;
text-align: center; 
`

