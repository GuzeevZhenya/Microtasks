import React from "react";
import { useNavigate } from "react-router-dom";

export const Content = (props: any) => {
  const { heading, pages } = props;
  const navigate = useNavigate();

  const mainPageHandler = () => {
    navigate("/page/0");
  };

  const combackHandler = () => {
    navigate(-1);
  };
  return (
    <div>
      <div>{heading}</div>
      <div>{pages}</div>
      <button onClick={mainPageHandler}>На главную</button>
      <button onClick={combackHandler}>Назад</button>
    </div>
  );
};
