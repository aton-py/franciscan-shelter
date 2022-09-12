import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../features/components/layout.component";
import Home from "../features/pages/home.page";
import Register from "../features/pages/register.page";

export default function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}
