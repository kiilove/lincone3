import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: white;
  height: 80px;
  border-bottom: 2px solid whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 1150px;
  height: 80px;
`;

const SubMenuWrapper = styled.div`
  width: 285px;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const SubMenu = styled.div`
  width: 200px;
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: #bcfdf3;
    color: darkgreen;
  }
`;

const SubMenuTitle = styled.h1`
  font-size: 18px;
  line-height: 5px;
`;

const SubMenuComment = styled.span`
  font-size: 13px;
`;

const SubDash = styled.div`
  width: 1px;
  height: 50px;
  background-color: darkgrey;
`;
const SubHeader = () => {
  return (
    <Container>
      <Wrapper>
        <SubMenuWrapper>
          <SubMenu>
            <SubMenuTitle>마이페이지</SubMenuTitle>
            <SubMenuComment>내정보/내글관리</SubMenuComment>
          </SubMenu>
        </SubMenuWrapper>
        <SubDash></SubDash>
        <SubMenuWrapper>
          <SubMenu>
            <SubMenuTitle>대쉬보드</SubMenuTitle>
            <SubMenuComment>프로젝트/시스템알림</SubMenuComment>
          </SubMenu>
        </SubMenuWrapper>

        <SubDash></SubDash>
        <SubMenuWrapper>
          <SubMenu>
            <SubMenuTitle>프로젝트</SubMenuTitle>
            <SubMenuComment>새포르젝트/프로젝트관리</SubMenuComment>
          </SubMenu>
        </SubMenuWrapper>
        <SubDash></SubDash>
        <SubMenuWrapper>
          <SubMenu>
            <SubMenuTitle>피드</SubMenuTitle>
            <SubMenuComment>새로운 소식</SubMenuComment>
          </SubMenu>
        </SubMenuWrapper>
      </Wrapper>
    </Container>
  );
};

export default SubHeader;
