import React from "react";
import {Nav,NavLogo, NavLink, Bars, NavMenu} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
                Logo
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink to="/" activeStyle>
                    หน้าแรก
                </NavLink>
                <NavLink to="/about" activeStyle>
                    ยื่นข้อมูลสถานประกอบการ
                </NavLink>
                <NavLink to="/contact" activeStyle>
                    ยื่นข้อมูลขอฝึกงาน
                </NavLink>
                <NavLink to="/signin" activeStyle>
                    สำหรับสถานประกอบการ
                </NavLink>
              
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;