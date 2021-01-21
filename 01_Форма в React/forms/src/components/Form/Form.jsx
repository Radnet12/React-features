import React from 'react';
import styles from './Form.scss';
import { motion } from "framer-motion";

export const Form = ({children, ...props}) => {
    const inputVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: { delay: 0.4 },
        },
    };
    return (
        <motion.form
            variants={inputVariants}
            initial="hidden"
            animate="visible"
            className={styles.form}
            noValidate
            {...props}
        >
            {children}
        </motion.form>
    );
};