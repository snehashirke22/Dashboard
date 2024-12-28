import React from 'react';
import '../styles/Sidebar.css';
import { IoGrid } from "react-icons/io5";
import { TbPinnedFilled } from "react-icons/tb";
import { MdWork } from "react-icons/md";
import { BsBuildingFill } from "react-icons/bs";
import { IoPerson } from "react-icons/io5";
import { FaBoxes } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";

const Sidebar = ({isSidebarOpen}) => {
  return (
    <div className={`sidebar ${isSidebarOpen ? 'show' : ''}`}>
      <ul className='menu'>
        <li className='menu-item'>
          <IoGrid className='icon' color="#c21783" style={{marginTop:'0'}}/>
        </li>
        <li className='menu-item'>
          <TbPinnedFilled className='icon' color="#EE5C1E"/>
        </li>
        <li className='menu-item'>
          <MdWork className='icon' color="#694BBB"/>
        </li>
        <li className='menu-item'>
          <BsBuildingFill className='icon' color="#30A945"/>
        </li>
        <li className='menu-item'>
          <IoPerson className='icon' color="#FCC212"/>
        </li>
        <li className='menu-item'>
          <FaBoxes className='icon' color="#F88F14"/>
        </li>
        <li className='menu-item'>
          <VscGraph className='icon' color="#1E98CC"/>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
