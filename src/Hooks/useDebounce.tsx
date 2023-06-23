// import { useEffect, useRef } from "react";

/*
выполняет функцию только после того, как пройдет определенное количество времени без ее вызова.
Это полезно, например, для ограничения скорости вызовов API 
или обновления состояния при изменении ввода, например, когда вы набираете текст в поисковой строке.
*/

export function useDebounce(
  callback: Function,
  timeout: number = 200,
  deps: Array<any> = []
) {
  //   const data = useRef({ firstTime: true });
  //   useEffect(() => {
  //     const { firstTime, clearFunc } = data.current;
  //     const handler = setTimeout(() => {
  //       if (clearFunc && typeof clearFunc === "function") {
  //         clearFunc();
  //       }
  //       data.current.clearFunc = callback();
  //     }, timeout);
  //     return () => {
  //       clearTimeout(handler);
  //     };
  //   }, [timeout, ...deps]);
}

// export default useDebounce;
