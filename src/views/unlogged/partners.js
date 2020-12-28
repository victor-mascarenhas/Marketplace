import BaseLayout from '../../components/layout'
import Card from '../../components/partners/cards'
import styled from 'styled-components'

const Partners = () => {
    const mockCards = [...Array(10).keys()]

  return (
    <BaseLayout banner={true} >
    <h1> Lojas Parceiras </h1>
    <CardBox>          
          {mockCards.map((v, i) => (
            <Card key={i}/>
          ))}            
          </CardBox>
    </BaseLayout>
  );
}

export default Partners;


const CardBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 290px));
  grid-auto-rows: auto;
  grid-gap: 1rem;
  overflow-y: auto;  
`