import React from "react";
import styles from "./Input.module.scss";

export const Input = ({ label, register, type, ...props }) => {
    if (type === "checkbox") {
        return (
            <div className={styles.form__input}>
                <label>
                    <input {...props} type={type} ref={register()} />
                    {label}
                </label>
            </div>
        );
    } else {
        return (
            <div className={styles.form__input}>
                <label>
                    {label}
                    <input {...props} type={type} ref={register()} />
                </label>
            </div>
        );
    }
};
