import BaseLayout from '../../../components/layout'
import styled from 'styled-components'
import { Col, Image, Card, Button, Row, Tooltip } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../../components/loading'
import { getAllProducts } from '../../../store/product/product.action'
import { useEffect, useState } from 'react'
import ShoppingList from '../../../components/shopcart/list'
import { getUserProducts } from '../../../store/user/user.action'
import history from '../../../config/history'


const ShoppingCart = () => {

    const [update, setUpdate] = useState(false)
    const dispatch = useDispatch()
    const loading = useSelector((state) => state.product.loading)
    const allProducts = useSelector((state) => state.product.all)
    const user = useSelector((state) => state.auth.user.id)
    const UserProducts = useSelector((state) => state.user.shoppingCart)
    const isPartner = useSelector((state) => state.auth.user.partner)

    useEffect(() => {
        dispatch(getAllProducts())
        dispatch(getUserProducts(user))
        if (update) {
            setUpdate(false)
        }
    }, [dispatch, update, user])

    const forwardProduct = (props) => {
        history.push(`/produtos/${props}`)
    }
    
    const kickPartner = () => {
        if(isPartner){
        history.push(`/403`)
        }
        return
    }

    kickPartner()

    const totalOrder = () => {

        const total = UserProducts.reduce(getTotal, 0);
        function getTotal(total, item) {
            return total + item.price;
        }

        return (
            <PriceCard title="Resumo do pedido" >
                <h3>frete GRÁTIS!</h3>
                <h2>Total R$ {total.toFixed(2)} </h2>
                <h3>ou em 12x de R$ {(total/12).toFixed(2)} sem juros</h3>
                <br />
                <Button type="primary" onClick={() => submitOrder()} > Prosseguir </Button>
            </PriceCard>
        )
    }

    const submitOrder = () => {
        history.push(`/carrinho/result`)
    }


    const other = () => {
        if (allProducts) {
            return allProducts.slice(0, 3).map((item, i) => (
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
                    <Lista>
                        <ShoppingList />
                    </Lista>
                    <br />
                    <hr />
                    <h1>Veja também!</h1>
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
                    {loading ?
                        <Loading />
                        : totalOrder()}
                </Secondary>
            </Content>
        </BaseLayout>
    )

}

export default ShoppingCart;

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
font-size: 40px;
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

const PriceCard = styled(Card)`
min-width: 100%;
`

const ProductImage = styled(Image)`
display: block !important;
`

const Lista = styled.div`
background-color: white;
`
const OthersCard = styled(Card)`
cursor: pointer;
`