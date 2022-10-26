import React from "react";

type ButtonPropsType = {
  name: string;
  callback: () => void;
};

export const Button = (props: ButtonPropsType) => {
  const onClickButtonHandler = () => {
    console.log('click')
    props.callback();
  };
  return (
    <div>
      <button onClick={onClickButtonHandler}>{props.name}</button>
    </div>
  );
};
