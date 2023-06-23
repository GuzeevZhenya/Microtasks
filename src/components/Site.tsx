import React, { useEffect, useState } from "react";
import styles from "./Site.module.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { PageOne } from "./pages/PageOne";
import { PageThree } from "./pages/PageThree";
import { PageTwo } from "./pages/PageTwo";
import { Error404 } from "./pages/Error404";
import { NavLink } from "react-router-dom";
import { Page } from "./pages/Page";
import { dataState } from "./DataState/DataState";
import { useWindowSize } from "./Hooks/useWindowSize";

export const Site = () => {
  // const [windowSize, setWindowSize] = useState({
  //   width: window.innerWidth,
  //   height: window.innerHeight,
  // });

  const size = useWindowSize();

  return (
    <div>
      <div className={styles.header}>
        <h1>HEADER</h1>
      </div>
      <div className={styles.body}>
        {size > 500 && (
          <div className={styles.nav}>
            <div>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.active : styles.navLink
                }
                to={"/page/0"}
              >
                Page 1
              </NavLink>
            </div>
            <div>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.active : styles.navLink
                }
                to={"/page/1"}
              >
                Page 2
              </NavLink>
            </div>
            <div>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.active : styles.navLink
                }
                to={"/page/2"}
              >
                Page 3
              </NavLink>
            </div>
          </div>
        )}

        <div className={styles.content}>
          <Routes>
            <Route path={"/"} element={<Navigate to="/page/0" />} />
            {/* <Route path={"/page1"} element={<PageOne />} />
            <Route path={"/page2"} element={<PageTwo />} />
            <Route path={"/page3"} element={<PageThree />} /> */}
            <Route
              path={"/page/:id"}
              element={<Page pages={dataState.pages} />}
            />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
