import { Button, Avatar } from "@mui/material";
import { Grade, Mail, Person, Phone } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 500px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CardContainer = styled.div`
  display: flex;
  width: 190px;
  height: 250px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #f7f0e9;
  -webkit-box-shadow: 1px 2px 3px -3px #d8dacf;
  box-shadow: 1px 2px 3px -3px #d8dacf;
  margin-right: 15px;
  margin-bottom: 20px;
`;

const CardAvatar = styled.div`
  width: 100%;
  height: 120px;
  background-color: indigo;
`;

const Members = () => {
  return (
    <Container>
      <Wrapper>
        <CardContainer>
          <CardAvatar>
            <Avatar sx={{ width: 100, height: 100 }} />
          </CardAvatar>
        </CardContainer>
        <CardContainer></CardContainer>
        <CardContainer></CardContainer>
        <CardContainer></CardContainer>
        <CardContainer></CardContainer>
        <CardContainer></CardContainer>
        <CardContainer></CardContainer>
        <CardContainer></CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Members;
