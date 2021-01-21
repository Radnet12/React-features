import React from 'react';
import styles from './DropField.module.scss';

export const DropField = ({ children, getrootprops }) => {
    return (
        <div {...getrootprops()} className={styles.drop__field}>
            {children}
        </div>
    );
};