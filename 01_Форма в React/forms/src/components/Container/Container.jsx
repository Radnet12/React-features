import React from "react";
import styles from "./Container.scss";
import { motion } from "framer-motion";

export const Container = ({ children }) => {
    const containerVariants = {
        hidden: {
            x: "-100vw",
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {duration: 0.5}
        },
        exit: {
            opacity: 0,
            x: "-100vw"
        }
    };
    return (
        <motion.main
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={styles.main}
        >
            {children}
        </motion.main>
    );
};
