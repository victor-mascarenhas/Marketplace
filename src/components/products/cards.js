import { Card } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { IoOpen } from 'react-icons/io5'
import { Tooltip } from 'antd';
import styled from 'styled-components'
import history from '../../config/history'
import { addProduct } from '../../store/user/user.action'
import { useDispatch, useSelector } from 'react-redux'
import { toastr } from 'react-redux-toastr'


const Cards = (props) => {
    
    const dispatch = useDispatch()
    const isPartner = useSelector((state) => state.auth.user.partner)
    const forward = () => {
        history.push(`/produtos/${props.id}`)
    }
    const addToCart = (_id) => {
    if(!isPartner){
    dispatch(addProduct({ id: _id }))
  }else{
    toastr.error('ERRO!', 'Função desabilitada para parceiros!') 
  }
}

    return (
        <StyledCard
            style={{ width: 300 }}
            cover={
                <img
                    alt="example"
                    src={props.photo}
                />
            }
            actions={[
                <Tooltip placement="top" title="Visitar!" arrowPointAtCenter>
                   <Logo> <IoOpen onClick={forward} /> </Logo> 
                </Tooltip>,
                <Tooltip placement="top" title="Adicionar ao Carrinho" arrowPointAtCenter>
                   <Logo> <ShoppingCartOutlined onClick={() => addToCart(props.id)} /> </Logo>
                </Tooltip>,
            ]}
        >
            <Title size="18">{props.title}</Title>
            <Desc size="12">{props.partner}</Desc>
            <Desc size="12">{props.category}</Desc>
            <Price size="20">R$ {props.price}</Price>
        </StyledCard>
    )
};

export default Cards

const StyledCard = styled(Card)`
border: thin solid #e7e7e7;
  border-radius: 5px;
  overflow: hidden;
  img{
      max-width: 300px !important;
      max-height: 240px !important;
  }`

const Title = styled.div`
font-size: ${props => props.size + 'px' || '12px'};
text-align: center;
padding: 10px;
`
const Desc = styled.div`
font-size: ${props => props.size + 'px' || '12px'};
text-align: left;
`

const Price = styled.div`
font-size: ${props => props.size + 'px' || '12px'};
text-align: right;
`

const Logo = styled.div`
svg{
    font-size: 20px;
}
`