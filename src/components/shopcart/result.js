import BaseLayout from '../../components/layout'
import { Result, Button } from "antd";
import { Link } from "react-router-dom";

const submitOrder = () => {
    return (
        <BaseLayout>
        <Result
    status="success"
    title="Sucesso!"
    subTitle="Seu pedido foi enviado."
    extra={[
      <Button type="primary">
          <Link to="/">Voltar para página principal</Link>
      </Button>
    ]}
  />
        </BaseLayout>        
    )
}

export default submitOrder

