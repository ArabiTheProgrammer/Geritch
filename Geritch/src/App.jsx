import React from 'react'

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './components/page/Home';
import RootLayout from './components/layer/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>

    <Route
      path="/"
      element={<RootLayout />}
    >
      <Route index element={<Home />}></Route>
    </Route>
      </>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
