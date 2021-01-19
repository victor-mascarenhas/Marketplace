import { List, Tooltip } from 'antd';
import React from 'react'
import { IoOpen } from 'react-icons/io5'
import { FiEdit } from 'react-icons/fi'
import { FaTrash } from 'react-icons/fa'
import styled from 'styled-components'
import history from '../../../config/history'


const ListItem = ({product, isEdit, delProduct}) => {

    const forward = () => {
        history.push(`/produtos/${product._id}`)
    }

        
    return (

        <List.Item
            key={product.key}
            actions={[
                <Tooltip placement="bottom" title="Visitar" arrowPointAtCenter>
                   <Logo> <IoOpen onClick={forward} /> </Logo> 
                </Tooltip>,
                <Tooltip placement="bottom" title="Editar" arrowPointAtCenter>
                <Logo onClick={() => isEdit(product)}> <FiEdit /></Logo>
                </Tooltip>,
                <Tooltip placement="bottom" title="Excluir" arrowPointAtCenter>
                <Logo onClick={() => delProduct(product)}> <FaTrash /></Logo>
                </Tooltip>,
            ]}
            extra={
                <img
                    width={150}
                    alt="logo"
                    src={product.photo}
                />
            }
        >
            <List.Item.Meta
                title={product.title}
                description={product.description}
            />
            R$ {product.price}
        </List.Item>

    )
}

export default ListItem


const Logo = styled.div`
svg{
    margin-top: 5px;
    margin-bottom: -5px;
    font-size: 20px;
    cursor: pointer
}  
`