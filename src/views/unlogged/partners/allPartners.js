import BaseLayout from '../../../components/layout'
import Card from '../../../components/partners/cards'
import styled from 'styled-components'
import Loading from '../../../components/loading'
import { AllPartners } from '../../../store/partner/partner.action'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Partners = () => {
  const dispatch = useDispatch()
  const [update, setUpdate] = useState(false)
  const loading = useSelector((state) => state.partner.loading)
  const parceiros = useSelector((state) => state.partner.all)

  useEffect(() => {
    dispatch(AllPartners())
    if(update){
    setUpdate(false)
    }
  }, [dispatch, update])


  const mountPost = () => {

    if (parceiros) {
     return parceiros.map((item, i) => (
        <Card
        key={i}
        id={item._id}
        photo={item.photo}
        name={item.name}
        email={item.email}
        products={item.products}                
        />
      ));
    }
    return;
  }


  return (
    <BaseLayout banner={true} >
    <h1> Lojas Parceiras </h1>
    <CardBox>          
    {loading ? 
      <Loading /> 
      : mountPost()}          
          </CardBox>
    </BaseLayout>
  );
}

export default Partners;


const CardBox = styled.div`
  margin: 1rem 5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 290px));
  grid-auto-rows: auto;
  grid-gap: 1rem;
  overflow-y: auto;  
`