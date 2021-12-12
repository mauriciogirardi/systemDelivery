import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "page/Home";
const Order = lazy(() => import("page/Order"));

export function PageRoutes() {
  return (
    <Suspense fallback={<h1>Carregando...</h1>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </Suspense>
  );
}
