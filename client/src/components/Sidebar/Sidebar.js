import React from 'react';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import { renren } from 'react-icons-kit/icomoon/renren';
import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_business } from 'react-icons-kit/md/ic_business';
import { leaf } from 'react-icons-kit/icomoon/leaf';

//specify the base color/background of the parent container if needed 
const Sidebar = () => (
    <div style={{background: '#312581', color: '#FFF', width: 240, height: 500}}> 
        <SideNav  highlightColor='#E91E63' highlightBgColor='#00bcd4' defaultSelected='sales'>       
            <Nav id='home' className="appNav">
                <NavIcon><SvgIcon size={20} icon={renren}/></NavIcon>    
                <NavText > Home </NavText>
            </Nav>
            <Nav id='My Company' className="appNav">
                <NavIcon><SvgIcon size={20} icon={leaf}/></NavIcon>
                <NavText > My Companies </NavText>
            </Nav>
            <Nav id='Add Company' className="appNav">
                <NavIcon><SvgIcon size={20} icon={leaf}/></NavIcon>
                <NavText> Add Company </NavText>
            </Nav>
            <Nav id='My Vendors' className="appNav">
                <NavIcon><SvgIcon size={20} icon={leaf}/></NavIcon>
                <NavText> My Vendors </NavText>
            </Nav>

            <Nav id='Add Vendors' className="appNav">
                <NavIcon><SvgIcon size={20} icon={leaf}/></NavIcon>
                <NavText> Add Vendors </NavText>
            </Nav>
        </SideNav>
    </div>
)
export default Sidebar;