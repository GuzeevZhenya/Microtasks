export const dataState: DataStateType = {
  pages: [
    {
      heading: "Цикл while",
      about: "Цикл while имеет следующий синтаксис: ",
    },
    {
      heading: "Цикл while",
      about: "Цикл while имеет следующий синтаксис: ",
    },
    {
      heading: "Конструкция switch ",
      about: "Конструкция switch  заменяет собок сразу несколько if: ",
    },
  ],
};

export type DataStateType = {
  pages: Array<PagesType>;
};

export type PagesType = {
  heading: string;
  about: string;
};
