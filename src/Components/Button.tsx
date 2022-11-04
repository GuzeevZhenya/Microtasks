import React from "react";

type ButtonType = {
  name: string;
  callBack: () => void;
};

export const Button = (props: ButtonType) => {
  const { callBack, name } = props;
  const onClickHandler = () => {
    callBack();
  };
  return <button onClick={onClickHandler}>{name}</button>;
};
