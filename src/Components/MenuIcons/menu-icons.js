import React from 'react';
import "./menu-icons.css";
import { HiBars3 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";


function MenuIcons() {

  let toggle_menu = () => {

    // from Sidebar component 
    let sidebar = document.querySelector("aside.sidebar");

    let icons = document.querySelectorAll(".menu-icons .icon");

    sidebar.classList.toggle("open");

    icons.forEach((icon)=>{
      icon.classList.toggle("hidden")
    });


    /*
    
    open فيه غلطة لما بأعدل فى حجم الشاشة , عايز أخليه لما ينزل عن الحجم المحدد يتشال كلاس ال     
    */ 

  };

  return (
    <div className="menu-icons" onClick={toggle_menu}>
      <i className="icon"><HiBars3 /></i>
      <i className="icon hidden"><IoCloseOutline /></i>
    </div>
  )
}

export default MenuIcons