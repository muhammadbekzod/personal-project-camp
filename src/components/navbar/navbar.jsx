import React from 'react'
import { Container, Logo, MenuWrapper, NavItems, NavLink } from './navbarStyle'
import logo from '../../assets/home/Camper.png'
import cart from '../../assets/home/cart.png'
import profil from '../../assets/home/Vector.png'

const Navbar = () => {
    return (
        <Container>
            <Logo src={logo} />
            <MenuWrapper >
                <NavLink to='/motor'>
                    <div>Motor</div>
                </NavLink>
                <NavLink to='/caravan'>
                    <div>Caravan</div>
                </NavLink>
                <NavLink to='/tuning'>
                    <div>Tuning</div>
                </NavLink>
                <NavLink to='/usedcar'>
                    <div>Used Cars</div>
                </NavLink>
                <NavLink to='/camping-places'>
                    <div>Camping Places</div>
                </NavLink>
            </MenuWrapper>
            <NavItems>
                <NavLink to='/cart'>
                    <img src={cart} alt="" />
                </NavLink>
                <NavLink to='/profil'>
                    <img src={profil} alt="" />
                </NavLink>
                <div>Eng</div>
            </NavItems>

        </Container>
    )
}

export default Navbar