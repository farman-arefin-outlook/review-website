import React from 'react';
import { NavLink, Router } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import NavbarComp from '../NavComponet/NavbarComp';
import Footer from '../Footer/Footer';

const Header = () => {
    return (
        <div>
            <NavbarComp></NavbarComp>
        </div>
    );
};

export default Header;