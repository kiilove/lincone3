import { TextField, Avatar, Badge } from "@mui/material";
import { deepOrange, green } from "@mui/material/colors";
import styled from "styled-components";
import { styled as muiStyled } from "@mui/material/styles";
import Pencle from "@mui/icons-material/Create";

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Inputs = styled.div`
  display: flex;
  height: 65px;
  align-items: center;
`;

const InputsAvatar = styled.div`
  display: flex;
  height: 100px;
  align-items: center;
`;
const Labels = styled.span`
  width: 20%;
  font-size: 15px;
  font-weight: 300;
  display: flex;
  justify-content: flex-start;
  margin-right: 10px;
  margin-left: 10px;
  color: #888;
`;

const TextDash = styled.span`
  width: 30px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 8px;
`;

const StyledBadge = muiStyled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const SmallAvatar = muiStyled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));
const CompStepOption = () => {
  return (
    <Container>
      <Wrapper>
        <InputsAvatar>
          <Labels>회사로고 </Labels>
          <Avatar
            sx={{ bgcolor: deepOrange[500], width: 70, height: 70, ml: 1 }}
            variant="square"
          >
            N
          </Avatar>
        </InputsAvatar>
        <Inputs>
          <Labels>창립일 </Labels>
          <TextField
            size="small"
            sx={{ width: 135, ml: 1 }}
            inputProps={{ style: { fontSize: 15 } }}
            InputLabelProps={{ style: { fontSize: 16 } }} // font size of input label
            label="ex)2021.01.01"
          />
        </Inputs>
        <Inputs>
          <Labels>추가주소 </Labels>
          <TextField
            size="small"
            sx={{ width: 500, ml: 1 }}
            inputProps={{ style: { fontSize: 15 } }}
            InputLabelProps={{ style: { fontSize: 16 } }} // font size of input label
            label="사업장 주소와 실제 주소가 다를경우 입력하세요"
          />
        </Inputs>
        <Inputs>
          <Labels>연락처 </Labels>
          <TextField
            size="small"
            sx={{ width: 135, ml: 1 }}
            inputProps={{ style: { fontSize: 15 } }}
            InputLabelProps={{ style: { fontSize: 16 } }} // font size of input label
            label="대표번호"
          />
          <TextField
            size="small"
            sx={{ width: 135, ml: 1 }}
            inputProps={{ style: { fontSize: 15 } }}
            InputLabelProps={{ style: { fontSize: 16 } }} // font size of input label
            label="팩스번호"
          />
          <TextField
            size="small"
            sx={{ width: 135, ml: 1 }}
            inputProps={{ style: { fontSize: 15 } }}
            InputLabelProps={{ style: { fontSize: 16 } }} // font size of input label
            label="모바일"
          />
        </Inputs>
        <Inputs>
          <Labels>연락처</Labels>
          <TextField
            size="small"
            sx={{ width: 235, ml: 1 }}
            inputProps={{ style: { fontSize: 15 } }}
            InputLabelProps={{ style: { fontSize: 16 } }} // font size of input label
            label="이메일"
          />
          <TextField
            size="small"
            sx={{ width: 235, ml: 1 }}
            inputProps={{ style: { fontSize: 15 } }}
            InputLabelProps={{ style: { fontSize: 16 } }} // font size of input label
            label="홈페이지"
          />
        </Inputs>
      </Wrapper>
    </Container>
  );
};

export default CompStepOption;
