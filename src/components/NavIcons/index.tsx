import React, { useContext } from 'react'
import {
  TotalPrice,
  CartIconWrapper,
  CartBadge,
  CartIcon,
  AccIcon,
  NavIconHolder,
} from './NavIconsElements'
import Link from 'next/link'
import { CartContext } from '../../context/cart'

interface NavigationIconsProps {
  scrollNav: boolean
  isMobile: boolean
}

const NavigationIcons: React.FC<NavigationIconsProps> = ({ scrollNav, isMobile }) => {
  const [cart] = useContext(CartContext)
  const totalQuantity = cart.items.reduce(
    (acc: number, curr: { [key: string]: number }) => acc + curr.quantity,
    0,
  )

  return (
    <NavIconHolder scrollNav={scrollNav} isMobile={isMobile}>
      <TotalPrice hasItems={cart.total > 0 ? true : false}>
        Total: ${cart.total.toFixed(2)}
      </TotalPrice>
      <Link href="/cart" passHref>
        <CartIconWrapper>
          <CartBadge hasItems={totalQuantity > 0 ? true : false}>{totalQuantity}</CartBadge>
          <CartIcon />
        </CartIconWrapper>
      </Link>
      <AccIcon />
    </NavIconHolder>
  )
}

export default NavigationIcons
