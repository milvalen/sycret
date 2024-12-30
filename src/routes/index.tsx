import React from "react";
import GoodsPage from "../pages/goods";
import {Outlet, Route, Routes} from "react-router-dom";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet/>}>
        <Route index element={<GoodsPage/>}/>
      </Route>
    </Routes>
  );
};

export default AppRouter;
