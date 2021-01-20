import BaseLayout from '../../../components/layout'
import styled from 'styled-components'
import { Col, Image, Descriptions, Card, Button, Row, Tooltip } from 'antd'
import { getOneProduct } from '../../../store/product/product.action'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Loading from '../../../components/loading'
import { addProduct } from '../../../store/user/user.action'
import history from '../../../config/history'
import { toastr } from 'react-redux-toastr'

const OpenProduct = () => {


    const dispatch = useDispatch()
    const { productId } = useParams()
    const [update, setUpdate] = useState(false)

    const loading = useSelector((state) => state.product.loading)
    const OneProduct = useSelector((state) => state.product.product)
    const onePartner = useSelector((state) => state.product.partner)
    const isPartner = useSelector((state) => state.auth.user.partner)

    useEffect(() => {
        dispatch(getOneProduct(productId))
        if (update) {
            setUpdate(false)
        }
    }, [dispatch, productId, update])

    const falsePrice = (props) => {
        return Math.round(props * 1.2)
    }

    const addToCart = (_id) => {
        if(!isPartner){
        dispatch(addProduct({ id: _id }))
      }else{
        toastr.error('ERRO!', 'Função desabilitada para parceiros!') 
      }
    }


    const forward = (props) => {
        history.push(`/parceiros/${props}`)
    }
    const forwardProduct = (props) => {
        history.push(`/produtos/${props}`)
    }


    const other = () => {
        if (onePartner.products) {
            return onePartner.products.slice(0, 3).map((item, i) => (
                <Col key={i} span={8}>
                    <OthersCard title={item.title} bordered={false} onClick={() => forwardProduct(item._id)}>
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
        return;
    }


    return (
        <BaseLayout>
            <Content>
                <Main>
                    <ProductCard >
                        <ProductImage
                            width={'60%'}
                            src={OneProduct.photo}
                        />
                    </ProductCard>
                    <br />
                    <Card>
                        <Descriptions title="Descrição do produto">
                            <Descriptions.Item >{OneProduct.description}</Descriptions.Item>
                        </Descriptions>
                    </Card>
                    <br />
                    <hr />
                    <h1>Outros produtos deste vendedor </h1>
                    <hr />
                    <br />

                    <MoreProducts className="site-card-wrapper">
                        <Row gutter={16}>
                            {loading ?
                                <Loading />
                                : other()}
                        </Row>
                    </MoreProducts>

                </Main>
                <Secondary>

                    <TitleCard  >
                        <h2>{OneProduct.title}</h2>
                    </TitleCard>
                    <br />
                    <PriceCard title="Opções de compra" >
                        <h3>De <s>R$ {falsePrice(OneProduct.price)}</s></h3>
                        <h2>Por R$ {OneProduct.price} !</h2>
                        <h3>ou em 12x de R$ {(OneProduct.price / 12).toFixed(2)} sem juros</h3>
                        <br />
                        <Button type="primary" onClick={() => addToCart(OneProduct._id)} > Adicionar ao carrinho </Button>
                    </PriceCard>
                    <br />
                    <PartnerCard title="Vendido e entregue por:" >
                        <Tooltip placement="bottom" title="Visitar!" arrowPointAtCenter>
                            <PartnerImage
                                src={onePartner.photo}
                                onClick={() => forward(onePartner._id)}
                            />
                        </Tooltip>
                        <h3>{onePartner.name}</h3>
                    </PartnerCard>


                </Secondary>
            </Content>

        </BaseLayout>
    )
}


export default OpenProduct


const Main = styled(Col)`
width: 60%;
min-height: 100vh;
padding: 20px;
background-color: whitesmoke;
hr{
    display: block;
    margin-left: auto;
    margin-right: auto ;
    width:15vw; 
}
h1{
    display: flex;
    flex-direction: column;
    align-items: center;
}
`
const MoreProducts = styled.div`
`

const Secondary = styled(Col)`
h2{
font-size: 60px;
display: flex;
flex-direction: column;
align-items: center;
}
h3{
display: flex;
flex-direction: column;
align-items: center;
}
width: 40%;
min-height: 100vh;
margin-left: auto;
margin-right: auto ;
display: flex;
flex-direction: column;
align-items: center;
padding: 20px;
background-color: whitesmoke;
button{
font-size: 16px;
min-height: 4rem !important;
display: block !important;
margin-left: auto !important;
margin-right: auto !important;
}
`

const Content = styled.div`
display: flex;
`

const PartnerImage = styled(Image)`
display: block !important;
margin-left: 5rem !important;
margin-right: auto !important ;
width: 60%;
cursor: pointer;
`

const PartnerCard = styled(Card)`
min-width: 100%;
`
const ProductCard = styled(Card)`
`
const PriceCard = styled(Card)`
min-width: 100%;
`

const TitleCard = styled(Card)`
min-width: 100%;
`

const ProductImage = styled(Image)`
display: block !important;
`
const OthersCard = styled(Card)`
cursor: pointer;
`