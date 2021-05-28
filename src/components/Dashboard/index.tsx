import React from "react";
import { Summary } from "../Summary";
import { TransacionTable } from "../TransactionsTable";
import * as S from "./styles";

export const Dashboard = () => {
  return (
    <S.Container>
      <Summary />
      <TransacionTable />
    </S.Container>
  );
};
