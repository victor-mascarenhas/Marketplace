import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { List, Button, Modal } from 'antd';
import { getAllCategories, setCategory, deleteCategory } from '../../../store/category/category.action'
import styled from 'styled-components'
import { FaTrash } from 'react-icons/fa'
import { FiEdit } from 'react-icons/fi'
import FormInput from './create'
import Swal from 'sweetalert2'


const Lista = () => {

  const [update, setUpdate] = useState(false)
  const [modal, setModal] = useState(false)
  const dispatch = useDispatch()

  const allCategories = useSelector((state) => state.category.all)

  useEffect(() => {
    dispatch(getAllCategories())
    if (update) {
      setUpdate(false)
    }
  }, [dispatch, update])

  const handleSubmit = (form, e) => {
    e.preventDefault()
    dispatch(getAllCategories(form))
    handleCancel()
    setUpdate(true)
  };
  const handleCancel = () => {
    setModal(false)
    dispatch(setCategory({}))
  }
  const handleClose = () => {
    setModal(false)
    setUpdate(true)
  }
  const isEdit = (props) => {
    dispatch(setCategory(props))
    setModal(true)
  }
const delCategory = (props) => {  
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
      dispatch(deleteCategory(props._id))
      setTimeout(() => setUpdate(true), 500)
    }
    
  })
}

  const ModalForm = () => (
    <Modal
      title="Editar Categoria"
      visible={modal}
      footer={false}
      onCancel={handleCancel}>
      <FormInput edit={handleClose} submit={handleSubmit} />
    </Modal>
  )
  
//FALTA ALERT PARA DELEÇÃO DE CATEGORIA!!!!!!!!!

  return (
    <>
      <ModalForm />
      <List
        size="large"
        bordered
        dataSource={allCategories}
        renderItem={item =>
          <List.Item>
            <Cat>{item.name}</Cat>
            <Button onClick={() => isEdit(item)} > <FiEdit /> </Button>
            <Button onClick={() => delCategory(item)} > <FaTrash /> </Button>
          </List.Item>}
      />
    </>
  );
}

export default Lista


const Cat = styled.div`
display:flex;
flex: 1;
`

