import React from 'react';
import {PagesType} from '../dataState/dataState';
import {useParams} from 'react-router-dom';

export type PropsType = {
  pages: Array<PagesType>;
};

export const Page = (props: PropsType) => {
  const params = useParams();
  const page = props.pages[Number(params.id)];

  if (!page) {
    return <div>Страница не найдена</div>;
  }

  return (
    <div>
      <div>{props.pages[Number(params.id)].heading}</div>
      <div>{props.pages[Number(params.id)].about}</div>
    </div>
  );
};
