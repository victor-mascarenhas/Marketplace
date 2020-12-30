import { Card } from 'antd';
import { LikeOutlined, UserAddOutlined, HeartOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import styled from 'styled-components'
//import { toastr } from 'react-redux-toastr'


const Cards = () => {
    const notification = () => {
        console.log('qual foi')
        //toastr.info('Toastr notification test')
    }
    
    return (
    <StyledCard
        style={{ width: 300 }}
        cover={
            <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
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
        <Title size="18">Leroy Merlin</Title>
            {/* <Title size="12">Desenvolvedor</Title> */}
    </StyledCard>
    )};

export default Cards

const StyledCard = styled(Card)`
border: thin solid #e7e7e7;
  border-radius: 5px;
  overflow: hidden;
`

const Title = styled.div`
font-size: ${props => props.size + 'px' || '12px'};
`