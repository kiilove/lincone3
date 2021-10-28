import { Avatar } from "@material-ui/core";
import {
  BusinessOutlined,
  Grade,
  GroupAddOutlined,
  Mail,
  Person,
  Phone,
} from "@material-ui/icons";

import { Link, Route, BrowserRouter as Router } from "react-router-dom";

import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";

import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 25px;
  max-height: 400px;
`;

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`;

const UserHeaderGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const UserHeaderAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
`;

const UserHeaderItem = styled.div`
  display: flex;
  flex: 2;
  justify-content: flex-end;
  flex-direction: column;
`;

const CompName = styled.h1`
  font-size: 18px;
  font-weight: 600;
  line-height: 1px;
`;

const CompText = styled.p`
  font-size: 13px;
  font-weight: 100;
  line-height: 1px;
`;

const UserInfoGroup = styled.div`
  display: flex;
  align-items: center;

  height: 35px;
`;

const UserInfoTitle = styled.span`
  font-size: 15px;
  font-weight: 600;
  flex: 1;
  color: mediumaquamarine;
  display: flex;
`;

const UserInfoText = styled.span`
  font-size: 15px;
  flex: 2;
  display: flex;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  color: #808080;
`;

const MenuGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 20px;
`;

const MenuWrapper = styled.div`
  height: 48px;
  width: 100%;
  display: flex;
`;
const MenuItem = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.5s ease;
  text-decoration: none;
  color: #808080;
  &:hover {
    background-color: #bcfdf3;
    color: #004700;
    font-weight: 700;
  }
`;
const MyPageLeft = () => {
  return (
    <Container>
      <UserInfoContainer>
        <UserHeaderGroup>
          <UserHeaderAvatar>
            <Avatar />
          </UserHeaderAvatar>
          <UserHeaderItem>
            <CompName>제이앤코어</CompName>
            <CompText>다재다능 전문가 집단</CompText>
          </UserHeaderItem>
        </UserHeaderGroup>

        <UserInfoGroup>
          <UserInfoTitle>
            <Person />
          </UserInfoTitle>
          <UserInfoText>김진배</UserInfoText>
        </UserInfoGroup>
        <UserInfoGroup>
          <UserInfoTitle>
            <Mail />
          </UserInfoTitle>
          <UserInfoText>jbkim@jncore.com</UserInfoText>
        </UserInfoGroup>
        <UserInfoGroup>
          <UserInfoTitle>
            <Phone />
          </UserInfoTitle>
          <UserInfoText>010-4643-3464</UserInfoText>
        </UserInfoGroup>
        <UserInfoGroup>
          <UserInfoTitle>
            <Grade />
          </UserInfoTitle>
          <UserInfoText>대표/관리자</UserInfoText>
        </UserInfoGroup>
      </UserInfoContainer>
      <MenuContainer>
        <MenuGroup>
          <MenuWrapper>
            <Link
              to="/company"
              style={{ textDecoration: "none", width: "100%" }}
            >
              <MenuItem>
                <BusinessOutlined
                  style={{ marginRight: "20px", marginLeft: "20px" }}
                />
                회사정보 관리
              </MenuItem>
            </Link>
          </MenuWrapper>
          <MenuWrapper>
            <Link
              to="/members"
              style={{ textDecoration: "none", width: "100%" }}
            >
              <MenuItem>
                <BadgeOutlinedIcon
                  style={{ marginRight: "20px", marginLeft: "20px" }}
                />
                구성원 관리
              </MenuItem>
            </Link>
          </MenuWrapper>
          <MenuWrapper>
            <Link
              to="/clients"
              style={{ textDecoration: "none", width: "100%" }}
            >
              <MenuItem>
                <GroupAddOutlined
                  style={{ marginRight: "20px", marginLeft: "20px" }}
                />
                고객사 관리
              </MenuItem>
            </Link>
          </MenuWrapper>
          <MenuWrapper>
            <Link
              to="/documents"
              style={{ textDecoration: "none", width: "100%" }}
            >
              <MenuItem>
                <LibraryBooksOutlinedIcon
                  style={{ marginRight: "20px", marginLeft: "20px" }}
                />
                사내서류 관리
              </MenuItem>
            </Link>
          </MenuWrapper>
          <MenuWrapper>
            <Link
              to="/platforms"
              style={{ textDecoration: "none", width: "100%" }}
            >
              <MenuItem>
                <MenuBookOutlinedIcon
                  style={{ marginRight: "20px", marginLeft: "20px" }}
                />
                문서양식 관리
              </MenuItem>
            </Link>
          </MenuWrapper>
        </MenuGroup>
      </MenuContainer>
    </Container>
  );
};

export default MyPageLeft;
