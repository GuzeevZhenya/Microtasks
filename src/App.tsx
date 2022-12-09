import React, { useState, useEffect } from "react";
import { NavLink, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <NavLink to={"/"}>Main</NavLink>
      <NavLink to={"/login"}>Login</NavLink>
      <NavLink to={"/profile"}>Profile</NavLink>
      <Routes>
        <Route path={"*"} element={<div>404</div>} />
        <Route path={"/"} element={<div>main</div>} />
        <Route path={"/login"} element={<div>login</div>} />
        <Route path={"/profile"} element={<div>profile</div>} />
      </Routes>
    </div>
  );
};
