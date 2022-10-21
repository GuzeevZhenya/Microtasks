import React from "react";

type ButtonTypes = {
  name: string;
  callBack: () => void;
};

export const Button = (props: ButtonTypes) => {
  const onClickHandler = () => {
    props.callBack();
  };
  return <button onClick={onClickHandler}>{props.name}</button>;
};
