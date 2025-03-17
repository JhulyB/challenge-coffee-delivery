import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/Logo.png'
import { CartContext } from '../../contexts/CartContext'
import { HeaderContainer, NavCart, NavLocation } from './styles'

export function Header() {

    const { cart, isEmptyCart, orderLocale } = useContext(CartContext)
    
    return (
        <HeaderContainer>

            <Link to={"/"}>
                <img src={logo} alt=""/>
            </Link>

            <nav>
                <NavLocation to='#' >
                    <MapPin size={22} weight='fill' />
                    {`${orderLocale?.city ? `${orderLocale.city},` : "-"} ${orderLocale?.uf?.toLocaleUpperCase() ?? "-"}`}
                </NavLocation>

                <NavCart to={'/checkout'} >
                    <ShoppingCart  size={22} weight='fill'/>
                    {
                        !isEmptyCart && <span>{cart.length}</span>
                    }
                </NavCart>
            </nav>
        </HeaderContainer>
    )
}