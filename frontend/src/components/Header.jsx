import React, {useState} from 'react'
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { NavLink } from 'react-router-dom';


const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleHamburgerClick = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

        
    return (
        <>
            <header className="header-container">
                <div className="inner-container">
                    <div className="d-flex justify-between align-center">
                        <div className="logo">
                            <img src="/assets/logo-2.png" alt="Logo" />
                        </div>
                        <div className={`navbar ${isMobileMenuOpen ? 'mobile-nav' : ''}`}>

                            <div className="desktop-nav d-flex">
                                <div className="cart-img icon d-flex">
                                    <NavLink to={"/cart"}><FaShoppingCart /></NavLink>
                                    <p>Cart</p>
                                </div>
                                <div className="account-img icon d-flex">
                                    <NavLink to={"/login"}> <MdOutlineAccountCircle /></NavLink>
                                
                                    <p>Sign in</p>
                                </div>
                            </div>
                        </div>
                        <div className="hamburger-menu icon" onClick={handleHamburgerClick}>
                            <IoMdMenu />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header