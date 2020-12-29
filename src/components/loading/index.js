import { Spin } from 'antd';
import styled from 'styled-components'

const Loading = () => (

    <StyledSpin size="large" />

)

export default Loading

const StyledSpin = styled(Spin)`
width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`