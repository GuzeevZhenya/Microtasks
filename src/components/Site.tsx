import React from 'react';
import {Route, Routes} from 'react-router-dom';
import styles from './Site.module.css';
import {PageOne} from './pages/PageOne';
import {Navigate} from 'react-router-dom';
import {PageTwo} from './pages/PageTwo';
import {PageThree} from './pages/PageThree';
import {Error404} from './pages/Error404';
import App from '../App';

export const Site = () => {
  return (
    <div>
      <div className={styles.header}>
        <h1>HEADER</h1>
      </div>
      <div className={styles.body}>
        <div className={styles.nav}>1234</div>

        <Routes>
          <Route path={'/'} element={<Navigate to={'/page1'} />} />
          <Route path={'/page1'} element={<PageOne />} />
          <Route path={'/page2'} element={<PageTwo />} />
          <Route path={'/page3'} element={<PageThree />} />
          <Route path='*' element={<Error404 />} />
          <Route />
        </Routes>
      </div>
    </div>
  );
};
