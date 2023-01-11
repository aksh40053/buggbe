import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';


export const Main = () => {
  return (
   <>
     <Header />
     <Container>
        <Outlet />
     </Container>
     <Footer/>
    
   </>
  )
}
