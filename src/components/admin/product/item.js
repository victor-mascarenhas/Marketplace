import { List } from 'antd';
import React from 'react'
import { IoOpen } from 'react-icons/io5'
import { FiEdit } from 'react-icons/fi'
import { FaTrash } from 'react-icons/fa'
import styled from 'styled-components'


const ListItem = ({product, isEdit, delProduct}) => {

        
    return (

        <List.Item
            key={product.key}
            actions={[
                <Logo><IoOpen/></Logo>,
                <Logo onClick={() => isEdit(product)}> <FiEdit /></Logo>,
                <Logo onClick={() => delProduct(product)}> <FaTrash /></Logo>,
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
                description={product.category.name}
            />
            {product.description}
        </List.Item>

    )
}

export default ListItem


const Logo = styled.div`
svg{
    margin-top: 5px;
    margin-bottom: -5px;
    font-size: 20px;
}
`