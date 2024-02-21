import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'
import Headroom from 'react-headroom';

export const Layout = ({children}) => {
  return (
    <Container>
      <Headroom >
        <Header/>
      </Headroom>
     
     <main>{children}</main> 
     <Footer/>
    </Container>
  )
}
