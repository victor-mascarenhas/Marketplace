import BaseLayout from '../../components/layout'
import { Result, Button } from "antd";
import { Link } from "react-router-dom";

const submitOrder = () => {
    return (
        <BaseLayout>
        <Result
    status="success"
    title="Successfully Purchased Cloud Server ECS!"
    subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
    extra={[
      <Button type="primary" key="console">
        Go Console
      </Button>,
      <Button key="buy">Buy Again</Button>,
    ]}
  />
        </BaseLayout>        
    )
}

export default submitOrder

