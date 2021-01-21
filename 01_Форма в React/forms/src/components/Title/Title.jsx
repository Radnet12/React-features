import React from 'react';
import styles from './Title.module.scss';

export const Title = ({children}) => {
    return (
        <h2 className={styles.h2}>
            {children}
        </h2>
    )
}