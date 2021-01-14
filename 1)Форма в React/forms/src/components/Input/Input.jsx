import React from "react";
import styles from "./Input.module.scss";

export const Input = ({label, register, ...props }) => {
    return (
        <div className={styles.form__input}>
            <label>
                {label}
                <input {...props} ref={register()} />
            </label>
        </div>
    );
};
