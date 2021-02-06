import React, { useState, useEffect } from 'react'
import {
  Nav,
  NavbarContainer,
  NavLogoWrapper,
  MobileIcon,
  NavMenu,
  NavItem,
  LinkText,
  LogoText,
} from './NavbarElements'
import { FaBars } from 'react-icons/fa'
import Link from 'next/link'
import NavigationIcons from '../NavIcons'

interface NavbarProps {
  toggle: () => void
}

const Navbar: React.FC<NavbarProps> = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(true)

  const changeNav = () => {
    if (window.scrollY < 40) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    changeNav()
    window.addEventListener('scroll', changeNav)
    return () => window.removeEventListener('scroll', changeNav)
  }, [scrollNav])

  return (
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <NavLogoWrapper>
          <Link href="/">
            <LogoText>Logo.lt</LogoText>
          </Link>
        </NavLogoWrapper>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <Link href="/">
              <LinkText>Home</LinkText>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/shop">
              <LinkText>Shop</LinkText>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/about">
              <LinkText>About</LinkText>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/contact">
              <LinkText>Contact</LinkText>
            </Link>
          </NavItem>
        </NavMenu>
        <NavigationIcons scrollNav={scrollNav} isMobile={false} />
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar
