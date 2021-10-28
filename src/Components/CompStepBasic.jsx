import { TextField, Typography } from "@mui/material";
import styled from "styled-components";
import { styled as muistyled } from "@mui/material";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  padding: 20px;
`;

const Inputs = styled.div`
  display: flex;
  height: 70px;
  align-items: center;
`;
const Labels = styled.span`
  width: 20%;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
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

const ValidationTextField = muistyled(TextField)({
  "& input:valid + fieldset": {
    borderColor: "green",
    borderWidth: 2,
  },
  "& input:invalid + fieldset": {
    borderColor: "red",
    borderWidth: 2,
  },
  "& input:valid:focus + fieldset": {
    borderLeftWidth: 6,
    padding: "4px !important", // override inline-style
  },
});

const CompStepBasic = () => {
  return (
    <Container>
      <Wrapper>
        <Inputs>
          <Labels>사업자등록번호 : </Labels>
          <TextField size="small" sx={{ width: 55, ml: 1 }} label="000" />
          <TextDash>-</TextDash>
          <TextField size="small" sx={{ width: 50, ml: 1 }} label="00" />
          <TextDash>-</TextDash>
          <TextField size="small" sx={{ width: 75, ml: 1 }} label="00000" />
        </Inputs>
        <Inputs>
          <Labels>회사명 : </Labels>
          <TextField
            required
            size="small"
            sx={{ width: 450, ml: 1 }}
            label="회사명 반드시 입력하셔야 합니다."
          />
        </Inputs>
        <Inputs>
          <Labels>대표자 : </Labels>
          <TextField
            size="small"
            sx={{ width: 450, ml: 1 }}
            required
            label="공동대표의 경우 콤마(,)로 구분하세요."
          />
        </Inputs>
        <Inputs>
          <Labels>사업장주소 : </Labels>
          <TextField
            size="small"
            sx={{ width: 550, ml: 1 }}
            label="사업자등록증상의 주소를 입력하세요."
          />
        </Inputs>
        <Inputs>
          <Labels>업태 : </Labels>
          <TextField
            size="small"
            sx={{ width: 450, ml: 1 }}
            label="ex)도소매"
          />
        </Inputs>
        <Inputs>
          <Labels>종목 : </Labels>
          <TextField
            size="small"
            sx={{ width: 450, ml: 1 }}
            label="ex)컴퓨터및 주변기기 / 콤마(,)로 구분하세요."
          />
        </Inputs>
      </Wrapper>
    </Container>
  );
};

export default CompStepBasic;
