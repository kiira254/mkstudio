import React from 'react'
import { PrimaryNav, MenuLink, Menu, Hamburger } from './NavElement'
import IMAGES from '../../images'

const Navbar = () => {
  return (
    <>
          
<nav>
<img src={IMAGES.imgTwo}alt='logo' />

      <PrimaryNav >
      <img src={IMAGES.imgTwo}alt='logo' />
        
        <Menu>
          <MenuLink to="/About" activeStyle>
            About
          </MenuLink>
          <MenuLink to="/Portfolio" activeStyle>
            Portfolio
          </MenuLink>
          <MenuLink to="/Clients" activeStyle>
            Clients
          </MenuLink>
          <MenuLink to="/Shop" activeStyle>
           Shops
          </MenuLink>
          <MenuLink to="/Contact" activeStyle>
            contact
          </MenuLink>
        </Menu>
      </PrimaryNav>
      </nav>
    </>
    
  )
}
export default Navbar