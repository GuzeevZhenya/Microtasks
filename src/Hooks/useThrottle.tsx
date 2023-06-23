/*
Throttle означает, что функция будет выполняться один раз 
за каждый заданный промежуток времени. Это может быть полезно для предотвращения быстрого запуска слишком большого количества вызовов API или событий.
*/

import { useEffect, useRef } from "react";

export const useThrottle = (
  callback: Function,
  delay: number = 200,
  deps: Array<any> = []
) => {
  const lastRan = useRef(Date.now());

  useEffect(() => {
    const handler = setTimeout(function () {
      if (Date.now() - lastRan.current >= delay) {
        callback();
        lastRan.current = Date.now();
      }
    }, delay - (Date.now() - lastRan.current));

    return () => {
      clearTimeout(handler);
    };
  }, [delay, ...deps]);
};

export default useThrottle;
