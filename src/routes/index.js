import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { Main  } from '../pages/layout/main/main';
import {Home} from '../pages/public/home/home';
import { About } from '../pages/public/about/about';

export const Routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Main/>}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    )
  );
  
  
