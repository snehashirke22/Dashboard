import React from 'react';
import '../styles/Header.css';
import { CgMenuGridO } from "react-icons/cg";
import { IoMdSearch } from "react-icons/io";
import { IoSettingsOutline, IoNotificationsOutline, IoCalendarClearOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const Header = ({toggleSidebar}) => {
  return (
    <header className='header'>
      {/* Left Section */}
      <div className='header-left'>
        <CgMenuGridO className='menu-icon' onClick={toggleSidebar}/>
        <p className='site-name'>Test</p>
      </div>

      {/* Right Section */}
      <div className='header-right'>
        <div className='search-icon'>
          <IoMdSearch />
        </div>
        <hr className='divider' />
        <IoSettingsOutline className='icon' />
        <IoNotificationsOutline className='icon' />
        <IoCalendarClearOutline className='icon' />
        <hr className='divider' />
        <CgProfile className='icon' />
      </div>
    </header>
  );
};

export default Header;
