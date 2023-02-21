import React from "react";
import { useParams } from "react-router-dom";
import { Content } from "../Content";
import { dataState, DataStateType } from "../dataState/dataState";

type PageType = {
  dataState: DataStateType;
};

export const Page = (props: PageType) => {
  let param = useParams();
  let id = Number(param.id);

  return (
    <div>
      <Content page={props.dataState} route={id} />
    </div>
  );
};
