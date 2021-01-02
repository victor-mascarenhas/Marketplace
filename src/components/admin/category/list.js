import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { List, Button } from 'antd';
import { getAllCategories } from '../../../store/category/category.action'
import styled from 'styled-components'
import { FaTrash } from 'react-icons/fa'
import { FiEdit } from 'react-icons/fi'


const Lista = () => {

  const [update, setUpdate] = useState(false)
  const dispatch = useDispatch()

  const allCategories = useSelector((state) => state.category.all)

  useEffect(() => {
    dispatch(getAllCategories())
    if (update) {
      setUpdate(false)
    }
  }, [dispatch, update])



  return (

    <List
      size="large"
      bordered
      dataSource={allCategories}
      renderItem={item =>
        <List.Item>
          <Cat>{item.name}</Cat>
          <Button> <FiEdit /> </Button>
          <Button> <FaTrash /> </Button>
        </List.Item>}
    />
  );
}

export default Lista


const Cat = styled.div`
display:flex;
flex: 1;
`

