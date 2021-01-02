import { List } from 'antd';
import React from 'react'
import { IoOpen } from 'react-icons/io5'
import { FiEdit } from 'react-icons/fi'
import { FaTrash } from 'react-icons/fa'
import styled from 'styled-components'


const ListItem = (props) => {

        
    return (

        <List.Item
            key={props.key}
            actions={[
                <Logo><IoOpen/></Logo>,
                <Logo><FiEdit /></Logo>,
                <Logo><FaTrash /></Logo>,
            ]}
            extra={
                <img
                    width={150}
                    alt="logo"
                    src={props.photo}
                />
            }
        >
            <List.Item.Meta
                title={props.title}
                description={props.category}
            />
            {props.description}
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