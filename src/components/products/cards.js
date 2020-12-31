import { Card } from 'antd';
import { LikeOutlined, UserAddOutlined, HeartOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import styled from 'styled-components'
import { toastr } from 'react-redux-toastr'


const Cards = (props) => {

    const notification = () => {
        toastr.info('Toastr notification test')
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
                    <LikeOutlined onClick={notification} />
                </Tooltip>,
                <Tooltip placement="top" title="Adicionar" arrowPointAtCenter>
                    <UserAddOutlined onClick={notification} />
                </Tooltip>,
                <Tooltip placement="top" title="Favoritar" arrowPointAtCenter>
                    <HeartOutlined onClick={notification} />
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
`

const Title = styled.div`
font-size: ${props => props.size + 'px' || '12px'};
`