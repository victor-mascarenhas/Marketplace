import BaseLayout from '../../components/layout'
import { Result, Button } from "antd";
import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <BaseLayout>
        <Result
        status="404"
        title="404"
        subTitle="Desculpe, a página que você visitou não existe."
        extra={
          <Button type="primary">
            <Link to="/">Voltar para página principal</Link>
          </Button>
        }
      />
        </BaseLayout>        
    )
}

export default Error404