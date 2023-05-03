import React from 'react';

export const dataState = {
  pages: [
    {
      heading: 'Цикл while',
      about: 'Lorem lorem',
    },
    {
      heading: 'Цикл for',
      about: 'ForS',
    },

    {
      heading: 'Цикл SWITCH',
      about: 'SWITCH',
    },
  ],
};

export type dataStateType = {
  pages: Array<PagesType>;
};

export type PagesType = {
  heading: string;
  about: string;
};
