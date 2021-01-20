import BaseLayout from '../../components/layout'
import styled from 'styled-components'
import Loading from '../../components/loading'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getAllProducts } from '../../store/product/product.action'
import history from '../../config/history'
import { Card, Image, Col, Tooltip, Row } from 'antd'


const Home = () => {

  const dispatch = useDispatch()
  const [update, setUpdate] = useState(false)
  const loading = useSelector((state) => state.product.loading)
  const allProducts = useSelector((state) => state.product.all)

  useEffect(() => {
    dispatch(getAllProducts())
    if (update) {
      setUpdate(false)
    }
  }, [dispatch, update])

  const forwardProduct = (props) => {
    history.push(`/produtos/${props}`)
  }


  const other = () => {

    const highlight = allProducts.filter(item => item.highlight === true)


    return highlight.slice(0, 3).map((item, i) => (
      <Col key={i} span={8}>
        <OthersCard title={item.title} bordered={true} onClick={() => forwardProduct(item._id)}>
          <Tooltip placement="bottom" title="Visitar!" arrowPointAtCenter>
            <ProductImage
              preview={false}
              src={item.photo}
            />
          </Tooltip>
        </OthersCard>
      </Col>
    ))

  }



  return (

    <BaseLayout banner={true} >
      <Main>
      <h1> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s</h1>
        <h1> Produtos em Destaque !</h1>
        <MoreProducts className="site-card-wrapper">
          <Row gutter={24}>
            {loading ?
              <Loading />
              : other()}
          </Row>
        </MoreProducts>  
        </Main>
    </BaseLayout>
  );
}

export default Home;

const ProductImage = styled(Image)`
display: block !important;
`
const OthersCard = styled(Card)`
cursor: pointer;
width: 150px;
`
const MoreProducts = styled.div`
`
const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
h1{
  padding: 20px;
}
`