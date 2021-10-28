import { SearchOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 100px;
  max-height: 150px;
  display: flex;
  margin-bottom: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 95%;
  height: 60px;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #f7f0e9;
  -webkit-box-shadow: 1px 2px 3px -3px #d8dacf;
  box-shadow: 1px 2px 3px -3px #d8dacf;
`;

const Left = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* background-color: yellow; */
`;

const Right = styled.div`
  width: 50%;
  height: 100%;
  justify-content: flex-end;
  display: flex;

  align-items: center;
`;
const Title = styled.h1`
  font-size: 17px;
  font-weight: 400;
  line-height: 15px;
`;

const SubTitle = styled.span`
  font-size: 16px;
  font-weight: 300;
  line-height: 10px;
`;

const SearchInput = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  width: 200px;
  height: 40px;
  border-radius: 10px;
  border: 0.5px solid #cccccc;
`;

const SearchText = styled.input`
  font-size: 15px;
  width: 150px;
  border: none;
  outline: none;
  resize: none;
  padding-left: 10px;
  color: black;
  background-color: white;
  ::placeholder {
    color: #888888;
  }

  &:focus {
    border: none;
    outline: none;
    resize: none;
  }
`;

const ActionHeader = ({ title, subTitle }) => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Title>{title}</Title>
          <SubTitle>{subTitle}</SubTitle>
        </Left>
        <Right>
          <SearchInput>
            <SearchOutlined
              style={{ fontSize: "17px", color: "#888888", marginLeft: "10px" }}
            />
            <SearchText placeholder="검색" />
          </SearchInput>
          <Button
            variant="contained"
            style={{
              marginLeft: "20px",
              width: "80px",
              backgroundColor: "mediumaquamarine",
            }}
          >
            검색
          </Button>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default ActionHeader;
