import React from "react";
import { MoneyType } from "./App";
import styled from "styled-components";

type CurrentBankomatPropsType = {
  money: MoneyType;
};
export const CurrentBankomat = (props: CurrentBankomatPropsType) => {
  return (
    <Banknote
      color={props.money.banknotes === "Dollars" ? "lawngreen" : "blue"}
    >
      <Name> {props.money.banknotes}</Name>
      <Nominal>{props.money.value}</Nominal>
      {/* {props.money.number} */}
    </Banknote>
  );
  // (
  //     <div>
  //       {props.money.banknotes}
  //       {props.money.value}
  //       {props.money.number}
  //     </div>
  //   );
};

const Banknote = styled.div`
  background-color: ${(props) => {
    if (props.color === "lawngreen") {
      return "lawngreen";
    }else{
      return "blue";
    }
  }};
  width: 400px;
  height: 200px;
  margin: 10px;
`;

// const BanknoteGreen = styled.div`
//   background-color: lawngreen;
//   width: 400px;
//   height: 200px;
//   margin: 10px;
// `;

// const BanknoteBlue = styled.div`
//   background-color: blue;
//   width: 400px;
//   height: 200px;
//   margin: 10px;
// `;

const Name = styled.span`
  display: flex;
  justify-content: center;
`;
const Nominal = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  font-size: 90px;
`;
