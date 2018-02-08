import React from 'react';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
 
import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';
 
//specify the base color/background of the parent container if needed 
const Sidebar = () => (
    <div style={{background: '#2c3e50', color: '#FFF', width: 220, height: 400}}> 
        <SideNav  highlightColor='#E91E63' highlightBgColor='#00bcd4' defaultSelected='sales'>       
            <Nav id='home' className="appNav">
                <NavIcon><SvgIcon size={20} icon={ic_aspect_ratio}/></NavIcon>    
                <NavText > Home </NavText>
            </Nav>
            <Nav id='companies' className="appNav">
                <NavIcon><SvgIcon size={20} icon={ic_business}/></NavIcon>
                <NavText > Companies </NavText>
            </Nav>
            <Nav id='pricing' className="appNav">
                <NavIcon><SvgIcon size={20} icon={ic_business}/></NavIcon>
                <NavText> Pricing </NavText>
            </Nav>
            <Nav id='about' className="appNav">
                <NavIcon><SvgIcon size={20} icon={ic_business}/></NavIcon>
                <NavText> About </NavText>
            </Nav>
        </SideNav>
    </div>
)
export default Sidebar;