import { Card } from 'antd';
import { LikeOutlined, UserAddOutlined, HeartOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import styled from 'styled-components'
import history from '../../config/history'

const Cards = (props) => {

    const forward = () => {
        history.push(`/produtos/${props.id}`)
    }

    return (
        <StyledCard
            style={{ width: 300 }}
            cover={
                <img
                    alt="example"
                    src={props.photo}
                />
            }
            actions={[
                <Tooltip placement="top" title="Curtir" arrowPointAtCenter>
                    <LikeOutlined onClick={forward} />
                </Tooltip>,
                <Tooltip placement="top" title="Adicionar" arrowPointAtCenter>
                    <UserAddOutlined onClick={forward} />
                </Tooltip>,
                <Tooltip placement="top" title="Favoritar" arrowPointAtCenter>
                    <HeartOutlined onClick={forward} />
                </Tooltip>,
            ]}
        >
            <Title size="18">{props.title}</Title>
            <Title size="12">{props.partner}</Title>
            <Title size="12">{props.category}</Title>
            <Title size="12">{props.price}</Title>
        </StyledCard>
    )
};

export default Cards

const StyledCard = styled(Card)`
border: thin solid #e7e7e7;
  border-radius: 5px;
  overflow: hidden;
  img{
      max-width: 300px !important;
      max-height: 240px !important;
  }
`

const Title = styled.div`
font-size: ${props => props.size + 'px' || '12px'};
`