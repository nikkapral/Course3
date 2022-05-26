import React from "react";
import styles from './Menu.module.scss'

import menuList from "./menuList";




const Menu = () => {
    return(
        <div className={styles.menu}>
            <img/>
            <div className='menu-wrapper'>
                <ul>
                    {menuList.map((item, index) => (
                        <li key={'menu item ${index}'}>
                            <a href='/'>{item.title}</a>
                        </li>
                    ))}
                </ul>

            </div>
        </div>


    );
}

export default Menu;