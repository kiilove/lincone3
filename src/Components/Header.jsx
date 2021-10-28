import { Avatar } from "@material-ui/core";
import {
  AutorenewOutlined,
  BookmarksOutlined,
  LibraryAddCheckOutlined,
  NotificationsActiveOutlined,
  SearchOutlined,
} from "@material-ui/icons";
import Tooltip from "@mui/material/Tooltip";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70px;
  background-color: #42d4be;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  width: 1150px;
  height: 60px;
`;

const SearchContainer = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: flex-start;
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 30px;
`;

const SearchInput = styled.div`
  display: flex;
  align-items: center;
  background-color: #87ddd0;
  width: 300px;
  height: 40px;
  border-radius: 10px;
`;

const SearchText = styled.input`
  font-size: 17px;
  border: none;
  outline: none;
  resize: none;
  padding-left: 10px;
  color: white;
  background-color: #87ddd0;
  ::placeholder {
    color: white;
  }

  &:focus {
    border: none;
    outline: none;
    resize: none;
  }
`;

const QuickContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
`;

const QuickMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const QuickItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin-right: 20px;
  border-radius: 10px;
  color: whitesmoke;
  transition: all 0.5s ease;
  &:hover {
    background-color: #87ddd0;
    color: white;
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const UserName = styled.span`
  font-size: 17px;
  font-weight: 700;
`;

const CompName = styled.span`
  font-size: 13px;
  font-weight: 100;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  min-width: 120px;
  margin-left: 40px;
  margin-right: 20px;
  color: whitesmoke;
`;
const AvatarInfo = styled.div``;
const Header = () => {
  return (
    <Container>
      <Wrapper>
        <SearchContainer>
          <Logo src="/img/logos/lincone_mini.png" />
          <SearchInput>
            <SearchOutlined style={{ color: "white", marginLeft: "10px" }} />
            <SearchText placeholder="검색" />
          </SearchInput>
        </SearchContainer>
        <QuickContainer>
          <QuickMenu>
            <Tooltip title="알림" arrow>
              <QuickItem>
                <NotificationsActiveOutlined />
              </QuickItem>
            </Tooltip>
            <Tooltip title="빠른실행" arrow>
              <QuickItem>
                <BookmarksOutlined />
              </QuickItem>
            </Tooltip>
            <Tooltip title="새로고침" arrow>
              <QuickItem>
                <AutorenewOutlined />
              </QuickItem>
            </Tooltip>
            <Tooltip title="프로젝트" arrow>
              <QuickItem>
                <LibraryAddCheckOutlined />
              </QuickItem>
            </Tooltip>
          </QuickMenu>
          <UserInfo>
            <UserName>김진배</UserName>
            <CompName>제이앤코어제이앤코어제이앤코어</CompName>
          </UserInfo>
          <AvatarInfo>
            <Avatar />
          </AvatarInfo>
        </QuickContainer>
      </Wrapper>
    </Container>
  );
};

export default Header;
