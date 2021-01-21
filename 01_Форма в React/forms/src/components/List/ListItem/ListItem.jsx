import React from 'react';
import styles from './ListItem.module.scss';

export const ListItem = ({children}) => {
    return (
        <li className={styles.li}>
            {children}
        </li>
    )
};