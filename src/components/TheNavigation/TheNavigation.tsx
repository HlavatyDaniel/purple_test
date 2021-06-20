import React from 'react'

import {NavLink} from "react-router-dom";

import styles from './TheNavigation.module.scss'

const TheNavigation: React.FC = () => {
    return (
        <div>
            <nav className={styles.navigation}>
                <NavLink to="/" activeClassName={styles.active} exact>
                    Welcome
                </NavLink>
                <NavLink to="/conversions" activeClassName={styles.active}>
                    Conversions
                </NavLink>
                <NavLink to="/statistics" activeClassName={styles.active}>
                    Statistics
                </NavLink>
            </nav>
        </div>
    )
}

export default TheNavigation