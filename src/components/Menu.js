import React, { useEffect } from 'react'
import './Menu.css'
import Logo from '../img/tIcon.png'
import { Link } from 'react-router-dom';
import { FaDelicious, FaWallet, FaChartLine, FaRegClock, FaCog, FaSignOutAlt, FaShoppingCart } from "react-icons/fa";


function Menu() {


    useEffect(() => {
        const mainMenuLi = document
        .getElementById("mainMenu")
        .querySelectorAll("li");
        
        function changeActive() {
            mainMenuLi.forEach((n) => n.classList.remove('active'));
            this.classList.add('active')
        }

        mainMenuLi.forEach(n => n.addEventListener('click', changeActive))
    }, [])
    

  return (
    <menu>
        <img src={Logo} alt="" />

        <ul id="mainMenu">
            <Icon icon={<FaDelicious/>} />
            <Icon icon={<FaShoppingCart/>} />
            <Icon icon={<FaWallet/>} />
            <Icon icon={<FaChartLine/>} />
            <Icon icon={<FaRegClock/>} />
        </ul>
        <ul className="lastMenu">
            <Icon icon={<FaCog/>} />
            <Icon icon={<FaSignOutAlt/>} />
        </ul>
    </menu>
  )
}

const Icon = ({ icon }) => (
    <li>
        <a href='#'>{icon}</a>
        {/* <Link className='link' to="#" >{icon}</Link> */}
    </li>
);

export default Menu