import { Button, Avatar } from "@mui/material";
import styled from "styled-components";

import { memData } from "../tempdata/member";

const Container = styled.div`
  width: 100%;
  min-height: 500px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 190px;
  height: 250px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #f7f0e9;
  -webkit-box-shadow: 1px 2px 3px -3px #d8dacf;
  box-shadow: 1px 2px 3px -3px #d8dacf;
  margin-bottom: 20px;
`;

const CardWrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardAvatar = styled.div`
  width: 100%;
  height: 120px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardInfo = styled.div`
  width: 100%;
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserName = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

const UserEmail = styled.span`
  font-size: 13px;
  font-weight: 100;
`;

const CardAction = styled.div`
  margin-top: 20px;
`;

const Members = () => {
  const CardDom = ({ item }) => {
    return (
      <CardWrapper key={item.id}>
        <CardAvatar>
          <Avatar sx={{ width: 100, height: 100 }} />
        </CardAvatar>
        <CardInfo>
          <UserName>{item.userName}</UserName>
          <UserEmail>{item.userEmail}</UserEmail>
        </CardInfo>
        <CardAction>
          <Button variant="outlined" color="success">
            상세보기
          </Button>
        </CardAction>
      </CardWrapper>
    );
  };

  return (
    <Container>
      <Wrapper>
        {memData.map((item) => (
          <CardContainer>
            <CardDom item={item} />
          </CardContainer>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Members;
