import { useState } from 'react'

import "@material-tailwind/react/tailwind.css";
import Navbar from '@material-tailwind/react/Navbar'
import NavbarContainer from '@material-tailwind/react/NavbarContainer'
import NavbarWrapper from '@material-tailwind/react/NavbarWrapper'
import NavbarBrand from '@material-tailwind/react/NavbarBrand'
import NavbarToggler from '@material-tailwind/react/NavbarToggler'
import NavbarCollapse from '@material-tailwind/react/NavbarCollapse'
import Nav from '@material-tailwind/react/Nav'
import NavItem from '@material-tailwind/react/NavItem'
import NavLink from '@material-tailwind/react/NavLink'
import Icon from '@material-tailwind/react/Icon'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <Navbar className="navbar">
      <NavbarContainer>
        <NavbarWrapper>
          <NavbarBrand>Menu</NavbarBrand>
          <NavbarToggler
            color='white'
            onClick={() => setOpenMenu(!openMenu)}
            ripple='light'
          />
        </NavbarWrapper>

        <NavbarCollapse open={openMenu}>
          <Nav>
            <NavItem  ripple='light'>
             <AnchorLink href='#collection'>Collection</AnchorLink>
            </NavItem>
            <NavItem href='#mint' ripple='light'>
              <AnchorLink href='#mint'>Mint</AnchorLink>
            </NavItem>
            <NavItem ripple='light'>
              Connect wallet
            </NavItem>
          </Nav>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  )
}
export default Navigation
