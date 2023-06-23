import React from "react";
import { useParams } from "react-router-dom";
import { Content } from "../Content";
import { Error404 } from "./Error404";
import styled from "styled-components";

type PropsType = {
  pages: PagesProps[];
};

type PagesProps = {
  heading: string;
  about: string;
};

export const Page = (props: PropsType) => {
  const params = useParams();

  return Number(params.id) < props.pages.length ? (
    <Content
      heading={props.pages[Number(params.id)].heading}
      pages={props.pages[Number(params.id)].about}
    />
  ) : (
    <Error404 />
  );
};
