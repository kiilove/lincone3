import React from "react";
import styled from "styled-components";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { koKR } from "@mui/material/locale";
import { DataGrid } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";

const theme = createTheme(
  {
    palette: {
      primary: { main: "#1976d2" },
    },
  },
  koKR
);

const columns = [
  {
    field: "comp",
    headerName: "업체명",
    width: 200,
    editable: true,
  },
  {
    field: "clientname",
    headerName: "담당자",
    width: 150,
    editable: true,
  },
  {
    field: "contact",
    headerName: "연락처",
    width: 150,
    editable: true,
  },
  {
    field: "email",
    headerName: "이메일",
    width: 150,
    editable: true,
  },
];

const rows = [
  {
    id: 1,
    comp: "(주)이루온",
    clientname: "정종화",
    contact: "010-4444-5555",
    email: "jjh@eluon.com",
  },
  {
    id: 2,
    comp: "(주)이루온",
    clientname: "백인수",
    contact: "010-4444-5555",
    email: "isback@eluon.com",
  },
  {
    id: 3,
    comp: "(주)이루온아이앤에스",
    clientname: "박삼규",
    contact: "010-4444-5555",
    email: "sgpark@eluonins.com",
  },
  {
    id: 4,
    comp: "(주)엔젤플러스",
    clientname: "이종원",
    contact: "010-4444-5555",
    email: "jwlee@eluon.com",
  },
  {
    id: 5,
    comp: "(주)이루온",
    clientname: "이성열",
    contact: "010-4444-5555",
    email: "yeul@eluon.com",
  },
  {
    id: 6,
    comp: "(주)이루온아이앤에스",
    clientname: "김재역",
    contact: "010-4444-5555",
    email: "jykim@eluon.com",
  },
  {
    id: 7,
    comp: "이지케어텍(주)",
    clientname: "김동한",
    contact: "010-4444-5555",
    email: "dong@eluon.com",
  },
  {
    id: 8,
    comp: "(주)누비넷퍼스트",
    clientname: "김종열",
    contact: "010-4444-5555",
    email: "one@nubinet.net",
  },
  {
    id: 9,
    comp: "(주)이미지컴",
    clientname: "양실장",
    contact: "010-4444-5555",
    email: "imagecom@naver.com",
  },
  {
    id: 10,
    comp: "라루",
    clientname: "고윤주",
    contact: "010-4444-5555",
    email: "laroux@jncore.com",
  },
];

const Container = styled.div`
  width: 100%;
  height: 560px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #f7f0e9;
  -webkit-box-shadow: 1px 2px 3px -3px #d8dacf;
  box-shadow: 1px 2px 3px -3px #d8dacf;
`;

const Clients = () => {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 100,
    maxColumns: 6,
  });
  return (
    <Container>
      <Wrapper>
        <div style={{ height: 500, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            rowHeight={40}
            pageSize={9}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
          />
        </div>
      </Wrapper>
    </Container>
  );
};

export default Clients;
