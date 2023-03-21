import React from 'react'
import { PrimaryNav, MenuLink, Menu, Hamburger } from './NavElement'
import IMAGES from '../../images'

const Navbar = () => {
  return (
    <>
          
<nav>

      <PrimaryNav >
      <img src={IMAGES.imgTwo}alt='logo' style={{alignSelf:'flex-start',padding:'3%'}}/>
        <Hamburger/>
        <div style={{alignSelf:'center'}}>
          <Menu >
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
           Shop
          </MenuLink>
          <MenuLink to="/Contact" activeStyle>
            contact
          </MenuLink>
        </Menu>
        </div>
      </PrimaryNav>
      
      </nav>
    </>
    
  )
}
export default Navbar