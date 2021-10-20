import styled from "styled-components";
import Members from "../Components/Members";

import MyPageLeft from "../Components/MyPageLeft";

const Container = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  margin-top: 25px;
  width: 1150px;
  display: flex;
`;

const MenuContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 300px;
  flex: 1;
  margin-right: 25px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #f7f0e9;
  -webkit-box-shadow: 1px 2px 3px -3px #d8dacf;
  box-shadow: 1px 2px 3px -3px #d8dacf;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-height: 300px;
  flex: 3;
`;

const MenuWrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: white;
`;

const InfoWrapper = styled.div`
  display: flex;
`;

const MyPage = () => {
  return (
    <Container>
      <Wrapper>
        <MenuContainer>
          <MyPageLeft />
        </MenuContainer>
        <InfoContainer>
          <Members />
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default MyPage;
