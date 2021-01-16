import { Image, Descriptions, Button, Modal } from 'antd';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getOnePartner } from '../../../store/partner/partner.action'
import FormInput from '../config/form'

const Profile = () => {


    const [update, setUpdate] = useState(false)
    const [modal, setModal] = useState(false)
    const dispatch = useDispatch()

    const partnerId = useSelector((state) => state.auth.user.id)
    const partner = useSelector((state) => state.partner.partner)


    useEffect(() => {
        dispatch(getOnePartner(partnerId))
        if (update) {
            setUpdate(false)
        }
    }, [dispatch, update, partnerId])
    const handleClose = () => {
        setModal(false)
        setUpdate(true)
      }
    const handleCancel = () => {
        setModal(false)
      }
    const ModalForm = () => (
        <Modal
          title="Editar Informações"
          visible={modal}
          footer={false}
          onCancel={handleCancel}>
          <FormInput partner={partner} edit={handleClose} />
        </Modal>
      )     


    return (
        <>
        <ModalForm />
        <Main>
            <PartnerImage
                width={200}
                src={partner.photo || "https://bulding-place.s3.amazonaws.com/noimage.jpg"}
            />
            <Text>
                <Descriptions >
                    <Descriptions.Item label="Nome da Loja">{partner.name}</Descriptions.Item>
                    <Descriptions.Item label="E-mail">{partner.email}</Descriptions.Item>
                </Descriptions>
            </Text>
            <Button block onClick={() => setModal(true)}> Editar </Button>
        </Main>
        </>
    )
}

export default Profile

const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`

const Text = styled.div`
padding: 20px;
`

const PartnerImage = styled(Image)`
`
