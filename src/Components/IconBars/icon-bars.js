import React from 'react';
import "./icon-bars.css";
import { HiBars3 } from "react-icons/hi2";


function IconBars() {

  let toggle_menu = () => {

    // from Sidebar component 

    let sidebar = document.querySelector("aside.sidebar");
    sidebar.classList.toggle("open");

    /*
    
    open فيه غلطة لما بأعدل فى حجم الشاشة , عايز أخليه لما ينزل عن الحجم المحدد يتشال كلاس ال 
    ما تنساش كمان تخليه ظاهر فوق محتوى ال main
    عشان المفروض هياخد عرض الصفحة كله
    
    */ 

  };

  return (
    <div className="icon-bars" onClick={toggle_menu}>
      <i><HiBars3 /></i>
    </div>
  )
}

export default IconBars