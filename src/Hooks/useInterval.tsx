/*
Хук useInterval - хук для вызова функции setInterval
Этот хук позволяет вам использовать функцию setInterval в качестве хука. 
Как и функция setInterval, этот хук имеет множество применений, например, анимация, обновление данных через регулярные промежутки времени или даже установка таймера.
*/

import { useState, useEffect, useRef } from "react";

export const useInterval = (callback: () => void, delay: number | null) => {
  const savedCallback = useRef<() => void>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current && savedCallback.current();
    }
    if (delay !== null && delay > 0) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    } else {
      tick();
    }
  }, [delay]);
};
