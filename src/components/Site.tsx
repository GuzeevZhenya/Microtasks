import React from "react";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import styles from "./Site.module.css";
import { PageOne } from "./pages/PageOne";
import { PageTwo } from "./pages/PageTwo";
import { PageThree } from "./pages/PageThree";
import { Error404 } from "./pages/Error404";
import { Page } from "./pages/Page";
import { dataState } from "./dataState/dataState";
import { useWindowSize } from "./helpers/useWindowSize";
import { LocalStorage } from "./pages/LocalStorage";

export const Site = () => {
  const size = useWindowSize();
  return (
    <div>
      <div className={styles.header}>
        <h1>HEADER</h1>
      </div>
      <div className={styles.body}>
        {size > 991 ? (
          <div className={styles.nav}>
            <div>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.navLink : styles.active
                }
                to={"/page/0"}
              >
                Page One
              </NavLink>
            </div>
            <div>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.navLink : styles.active
                }
                to={"/page/1"}
              >
                Page Two
              </NavLink>
            </div>
            <div>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.navLink : styles.active
                }
                to={"/page/2"}
              >
                Page Three
              </NavLink>
            </div>
            <div>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.navLink : styles.active
                }
                to={"/page/localStorage"}
              >
               LocalStorage
              </NavLink>
            </div>
          </div>
        ) : (
          <div></div>
        )}

        <div className={styles.content}>
          <Routes>
            <Route path={"/"} element={<Navigate to={"/page1"} />}></Route>

            <Route
              path={"/page/:id"}
              element={<Page dataState={dataState} />}
            ></Route>
            <Route path={"/page/localStorage"} element={<LocalStorage/>}></Route>

            {/* <Route path={"/page3"} element={<PageThree />}></Route> */}

            <Route path={"/*"} element={<Error404 />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};