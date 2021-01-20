import BaseLayout from '../../components/layout'
import { Result, Button } from "antd";
import { Link } from "react-router-dom";

const Error403 = () => {
    return (
        <BaseLayout>
        <Result
        status="403"
        title="403"
        subTitle="Desculpe, você não tem permissão para acessar esta página."
        extra={
          <Button type="primary">
            <Link to="/">Voltar para página principal</Link>
          </Button>
        }
      />
        </BaseLayout>        
    )
}

export default Error403