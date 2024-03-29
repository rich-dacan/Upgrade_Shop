import React             from 'react';
import { Route, Routes } from 'react-router-dom';

import Home     from '../pages/Home';
import PageCart from '../pages/Cart';

export default function Routers() {
  return (
    <>
      <Routes>
        <Route path='/'     element={<Home/>} />
        <Route path='/cart' element={<PageCart/>} />
      </Routes>
    </>
  );
};
