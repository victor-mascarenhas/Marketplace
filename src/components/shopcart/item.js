import { List, Tooltip } from 'antd';
import React from 'react'
import { IoOpen } from 'react-icons/io5'
import { FaTrash } from 'react-icons/fa'
import styled from 'styled-components'
import history from '../../config/history'


const ListItem = ({product, removeProduct}) => {

    const forward = () => {
        history.push(`/produtos/${product._id}`)
    }
        
    return (

        <List.Item
            key={product.key}
            actions={[
                <Tooltip placement="top" title="Visualizar" arrowPointAtCenter>
                   <Logo> <IoOpen onClick={forward} /> Visualizar </Logo> 
                </Tooltip>,
                <Tooltip placement="top" title="Remover" arrowPointAtCenter>
                <Logo onClick={() => removeProduct(product)}> <FaTrash /> Remover </Logo>
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
    cursor: pointer;
    margin-top: 5px;
    margin-bottom: -5px;
    font-size: 20px;
}
`