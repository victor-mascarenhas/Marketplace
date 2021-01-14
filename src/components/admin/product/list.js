import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { List, Modal } from 'antd';
import ListItem from './item';
import { getPartnerProducts } from '../../../store/partner/partner.action'
import { deleteProduct, getAllProducts, setProduct } from '../../../store/product/product.action'
import Swal from 'sweetalert2'
import FormInput from './create'

 const Lista = () => {

  const [update, setUpdate] = useState(false)
  const [modal, setModal] = useState(false)
  const dispatch = useDispatch()

  const partner = useSelector((state) => state.auth.user.id) 

  const PartnerProducts = useSelector((state) => state.partner.products)

  useEffect(() => {
      dispatch(getPartnerProducts(partner))
      if(update){
      setUpdate(false)
      }
    }, [dispatch, update, partner])

    const handleSubmit = (form, e) => {
      e.preventDefault()
      dispatch(getAllProducts(form))
      handleCancel()
      setUpdate(true)
    };
    const handleCancel = () => {
      setModal(false)
      dispatch(setProduct({}))
    }
    const handleClose = () => {
      setModal(false)
      setUpdate(true)
    }
    const isEdit = (props) => {
      dispatch(setProduct(props))
      setModal(true)
    }      
    
    const delProduct = (props) => {  
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
          dispatch(deleteProduct(props._id))
          setTimeout(() => setUpdate(true), 1500)
        }
        
      })
    }

    const ModalForm = () => (
      <Modal
        title="Editar Produto"
        visible={modal}
        footer={false}
        onCancel={handleCancel}>
        <FormInput edit={handleClose} submit={handleSubmit} />
      </Modal>
    )

return (
  <>
  <ModalForm />
  <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 10,
    }}
    dataSource={PartnerProducts}    
    renderItem={item => (

      <ListItem
      product={item}
      isEdit={isEdit}
      delProduct={delProduct}
      />

    )}
  />
  </>
);
    }

    export default Lista