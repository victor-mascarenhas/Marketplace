import { List } from 'antd';
import React from 'react'
import { IoOpen } from 'react-icons/io5'
import { FaTrash } from 'react-icons/fa'
import styled from 'styled-components'


const ListItem = ({product, removeProduct}) => {

        
    return (

        <List.Item
            key={product.key}
            actions={[
                <Logo><IoOpen/> Visualizar </Logo>,
                <Logo onClick={() => removeProduct(product)}> <FaTrash /> Remover </Logo>,
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