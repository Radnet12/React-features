import React from 'react';
import styles from './List.module.scss';

export const List = ({children}) => {
    return (
        <ul className={styles.ul}>
            {children}
        </ul>
    )
}