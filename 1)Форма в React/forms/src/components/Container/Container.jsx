import React from 'react';
import styles from './Container.scss';

export const Container = ({children}) => {
    return (
        <main className={styles.main}>
            {children}
        </main>
    )
};
