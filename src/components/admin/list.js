import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { List } from 'antd';
import ListItem from './item';
import { getAllProducts } from '../../store/product/product.action'


 const Lista = () => {

  const [update, setUpdate] = useState(false)
  const dispatch = useDispatch()

  const allProducts = useSelector((state) => state.product.all)

  useEffect(() => {
      dispatch(getAllProducts())
      if(update){
      setUpdate(false)
      }
    }, [dispatch, update])

            

return (
  <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 10,
    }}
    dataSource={allProducts}
    footer={
      <div>
        <b>ant design</b> footer part
      </div>
    }
    renderItem={item => (

      <ListItem
      key={item.key}
      photo={item.photo}
      title={item.title}
      description={item.description}
      category={item.category.name}
      partner={item.partner}
      highlight={item.highlight}
      price={item.price}
      status={item.status}
      />

    )}
  />
);
    }

    export default Lista