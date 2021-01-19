import { Card } from 'antd';
import { Tooltip } from 'antd';
import styled from 'styled-components'
import history from '../../config/history'


const Cards = (props) => {
    const forward = () => {
        history.push(`/parceiros/${props.id}`)
    }
    
    return (
    <Tooltip placement="bottom" title="Visitar!" arrowPointAtCenter>
    <StyledCard
    hoverable={true}
        style={{ width: 300 }}
        cover={
            <img
                alt="example"
                src={props.photo}
            />
        }
        onClick={forward}
    >
        <Title size="18">{props.name}</Title>
    </StyledCard>
    </Tooltip>
    )};

export default Cards

const StyledCard = styled(Card)`
border: thin solid #e7e7e7;
  border-radius: 5px;
  overflow: hidden;
  img{
      min-width: 300px !important;
      min-height: 300px !important;
      max-width: 300px !important;
      max-height: 300px !important;
  }
`

const Title = styled.div`
font-size: ${props => props.size + 'px' || '12px'};
`
const Logo = styled.div`
svg{
    font-size: 20px;
}
`