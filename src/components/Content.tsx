import React from "react";
import { Navigate } from "react-router-dom";
import { DataStateType } from "./dataState/dataState";

type ContentType = {
  page: DataStateType;
  route: number;
};

export const Content = (props: ContentType) => {
  return props.page.pages.length > props.route ? (
    <div>
      <div>{props.page.pages[props.route].heading}</div>
      <div>{props.page.pages[props.route].about}</div>
    </div>
  ) : (
    <Navigate to={"/xxx"} />
  );
};
