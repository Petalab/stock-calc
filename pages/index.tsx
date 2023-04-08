import Calculator from "components/home/Calculator";
import MetaHead from "components/common/MetaHead";
import styled from "styled-components";
import Logo from "../components/common/Logo";

const Home = () => {
  return (
    <>
      <MetaHead />
      <main>
        <AppTitleWrapper>
          <Logo />
          <h1>
            <TitleStrong>워터독</TitleStrong> 평단가 계산기
          </h1>
        </AppTitleWrapper>
        <MainDescription>
          물불 안가리고 타세요. 주식/코인 <Strong>평단가 계산기</Strong>입니다.
          <br />
          보유하고 있는 주식/코인의 평단가, 수량을 입력하고 물타기/불타기를 해보세요.
          <br />
          자동으로 최종 평단가가 계산됩니다.
        </MainDescription>
        <Calculator />
      </main>
    </>
  );
};

const AppTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 4px;
  margin: 2rem;
  font-size: 2.2rem;
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.colors.darkGray};
`;

const TitleStrong = styled.strong`
  color: ${({ theme }) => theme.colors.main};
`;

const Strong = styled.strong`
  color: ${({ theme }) => theme.colors.darkGray};
`;

const MainDescription = styled.p`
  max-width: 58rem;
  margin: 3rem auto 0;
  padding: 0 1.6rem;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.gray};
`;

export default Home;
