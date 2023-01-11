import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { Main  } from '../pages/layout/main/main';
import {Home} from '../pages/public/home/home';
import { About } from '../pages/public/about/about';
import { Features } from '../pages/public/features/features';
import { ProductGuide } from '../pages/public/product_guide/productGuide';
import { Pricing } from '../pages/public/pricing/pricing';

export const Routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Main/>}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="features" element={<Features />} />
        <Route path="product-guide" element={<ProductGuide />} />
        <Route path="pricing" element={<Pricing />} />
      </Route>
    )
  );
  
  
