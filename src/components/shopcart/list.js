import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { List } from 'antd';
import ListItem from './item';
import { getUserProducts, removeProduct } from '../../store/user/user.action'
import Swal from 'sweetalert2'

 const Lista = () => {

  const [update, setUpdate] = useState(false)
  const dispatch = useDispatch()

  const user = useSelector((state) => state.auth.user.id) 

  const UserProducts = useSelector((state) => state.user.shoppingCart)

  useEffect(() => {
      dispatch(getUserProducts(user)) // 
      if(update){
      setUpdate(false)
      }
    }, [dispatch, update, user])    

    
    const removeFromCart = (props) => { 
      Swal.fire({
        title: 'Você tem certeza?',
        text: "Você não poderá desfazer esta ação!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Excluir!'
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(removeProduct({id: props._id}))          
          setTimeout(() => setUpdate(true), 1500)
        }
        
      })
    }

    

return (
  <>
  <List
    itemLayout="vertical"
    size="large"    
    dataSource={UserProducts}    
    renderItem={item => (
      <ListItem
      product={item}
      removeProduct={removeFromCart}
      />
    )}
  />    
  </>
);
    }

    export default Lista