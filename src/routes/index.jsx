import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </>
  )
);

export default router;