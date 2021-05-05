import BaseLayout from "../../components/layout";
import styled from "styled-components";
import { GiBrickWall } from "react-icons/gi";

const Home = () => {
  return (
    <BaseLayout>
      <Main>
        <Logo>
          <GiBrickWall />
          BuildingPlace
        </Logo>
        <Text>
          <p>Cadastre sua loja e seja um de nossos parceiros!</p>
          <p>
            Aqui você encontra todos os produtos voltados a construção e
            reformas!
          </p>
          <p>De ferramentas à acabamentos!</p>
        </Text>
      </Main>
    </BaseLayout>
  );
};

export default Home;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    padding: 20px;
  }
`;
const Logo = styled.div`
  height: 31px;
  font-size: 45px;
  font-weight: 700;
  color: #1b1b1b;
  flex: 1;
  padding: 2rem 5rem;
  svg {
    position: relative;
    margin-bottom: -5px;
    margin-right: 5px;
  }
`;

const Text = styled.div`
  padding: 8rem 5rem;
  text-align: center;
  p {
    font-size: 2rem;
  }
`;
