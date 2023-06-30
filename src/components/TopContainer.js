import React, { useEffect } from 'react'
import { BiSearchAlt } from "react-icons/bi";
import { FaBell, FaChevronDown } from "react-icons/fa";
import Can from '../img/can_yaman3.jpg';

function TopContainer() {
     useEffect(() => {
       const menuTarget = document.getElementById("menuChevron");
       const menuContainer = document.getElementById("menuContainer");

       menuTarget.addEventListener('mouseenter', ()=>{
        menuTarget.style.transform = "rotate(180deg)";
        menuContainer.style.transform = "translateX(0px)";
       });
       menuContainer.addEventListener('mouseleave', ()=>{
        menuTarget.style.transform = "rotate(0deg)";
        menuContainer.style.transform = "translateX(300px)";
       });
     }, [])
     

  return (
    <div className='topContainer'>
        <div className="inputBox">
            <input type="text" placeholder='Search item, collections' />
            <i>
                <BiSearchAlt/>
            </i>
        </div>

        <div className="profileContainer">
            <i className="profileIcon">
                <FaBell/>
            </i>

            <div className="profileImage">
                <img src={Can} alt="Can Yaman" />
            </div>

            <p className="profileName">
                Can Yaman
            </p>
            <i className="menuChevron" id='menuChevron'>
                <FaChevronDown/>
            </i>

            <div className="menuContainer" id="menuContainer">
                <ul>
                    <li>Web Design</li>
                    <li>UI /UX Design</li>
                    <li>Form Design</li>
                    <li>UI Design</li>
                </ul>
            </div>

        </div>
    </div>
  )
}

export default TopContainer
