import React from "react";
import GoodsPage from "../pages/goods";
import {Outlet, Route, Routes} from "react-router-dom";
import SalesPage from '../pages/sales';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet/>}>
        <Route index element={<GoodsPage/>}/>
        <Route path="sales" element={<SalesPage/>}/>
      </Route>
    </Routes>
  );
};

export default AppRouter;
