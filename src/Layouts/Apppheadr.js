import React from 'react';

import { Link }from 'react-router-dom';
import Styles from'./AppHeader.module.css';

export const AppHeader=()=>{
    return(
      
        <header className={Styles.header} >
            <nav>
                <ul className={Styles.ul2}>
                    {/* <h1>WELCOME TO MOVIE LIBARY</h1> */}
                  <h3 className={Styles.l}> Movie Libary</h3>
                    <li className={Styles.li2}><Link to="/tv" className={Styles.f}>Search for tv shows</Link></li>
                    <li className={Styles.li2}><Link to="/search" className={Styles.f}>Search for movies</Link></li>
                    <li className={Styles.li2}><Link to="/popular" className={Styles.f}>Popular</Link></li>
                </ul>
            </nav>
        </header>  
    )
}
export default AppHeader