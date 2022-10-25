import React, { useState, useEffect } from "react";

type FilterType = "all" | "Dollars" | "RUBLS";

export const App = () => {
  const [money, setMoney] = useState([
    { banknots: "Dollars", value: 100, number: " a1234567890" },
    { banknots: "Dollars", value: 50, number: " z1234567890" },
    { banknots: "RUBLS", value: 100, number: " w1234567890" },
    { banknots: "Dollars", value: 100, number: " e1234567890" },
    { banknots: "Dollars", value: 50, number: " c1234567890" },
    { banknots: "RUBLS", value: 100, number: " r1234567890" },
    { banknots: "Dollars", value: 50, number: " x1234567890" },
    { banknots: "RUBLS", value: 50, number: " v1234567890" },
  ]);

  const [filter, setFilter] = useState<FilterType>("all");
  const [filterMoney, setFilterMoney] = useState(money);
  const [testValue, setTestValue] = useState([{ text: "some text" }]);
  // const onClickFilterHandler = (currentValute: string) => {
  //   switch (currentValute) {
  //     case "all":
  //       return money;
  //       break;
  //     case "Dollar":
  //       filterMoney = money.filter((money) => money.banknots === "Dollars");
  //       setMoney(filterMoney);
  //       break;
  //     case "Ruble":
  //       filterMoney = money.filter((money) => money.banknots === "RUBLS");
  //       setMoney(filterMoney);
  //       break;
  //     default:
  //       break;
  //   }
  // };

  useEffect(() => {
    let filterMoney = money;
    filterMoney = money.filter((item) => {
      if (filter === "all") {
        return item;
      } else {
        return item.banknots === filter;
      }
    });
    setFilterMoney(filterMoney);
  }, [filter]);

  const onClickFilterHandler = (nameButton: FilterType) => {
    setFilter(nameButton);
  };

  return (
    <div>
      <ul>
        {filterMoney.map((item, index) => {
          return (
            <li key={index}>
              <span>{item.banknots}</span>;<span>{item.value}</span>;
              <span>{item.number}</span>;
            </li>
          );
        })}
      </ul>
      <button onClick={() => onClickFilterHandler("all")}>All</button>
      <button onClick={() => onClickFilterHandler("Dollars")}>Dollar</button>
      <button onClick={() => onClickFilterHandler("RUBLS")}>Ruble</button>
    </div>
  );
};
