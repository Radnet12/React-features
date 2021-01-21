import React from "react";
import { Link } from "react-router-dom";
import { useData } from "../../state/stateContext";
import { Button } from "../Button/Button";
import { Container } from "../Container/Container";
import { Title } from "../Title/Title";
import styles from "./Result.module.scss";

export const Result = () => {
    const { data } = useData();
    let entries = [];
    const { files } = data;

    if (data.hasPhone === false && data.phone !== "") {
        entries = Object.entries(data).filter(
            (item) => item[0] !== "files" && item[0] !== "phone"
        );
    } else if (data.hasPhone === true) {
        entries = Object.entries(data).filter(
            (item) => item[0] !== "files" && item[0] !== "hasPhone"
        );
    }


    const onSubmit = async () => {
        const formData = new FormData();

        if (data.files !== undefined && data.files.length > 0) {
            data.files.forEach(file => {
                formData.append("files", file, file.name);
            });
        }

        entries.forEach(entry => {
            formData.append(entry[0], entry[1]);
        });

        // fetching data to some database

        // const res = await fetch(url, {
        //     method: "POST",
        //     body: formData,
        // });
    };

    return (
        <Container>
            <Title>Проверьте данные</Title>
            <div className={styles.result__container}>
                <ul className={styles.result__wrapper}>
                    {entries.map((item, index) => (
                        <li key={index} className={styles.result__item}>
                            <div className={styles.result__key}>{item[0]}:</div>
                            <div className={styles.result__value}>
                                {item[1].toString()}
                            </div>
                        </li>
                    ))}
                </ul>
                {files && files.length > 0 ? (
                    <>
                        <h3 className={styles.files__title}>
                            Загруженные файлы
                        </h3>
                        <ul className={styles.result__wrapper}>
                            {files.map((item, index) => (
                                <li key={index} className={styles.result__item}>
                                    <div className={styles.result__key}>
                                        {item.name}
                                    </div>
                                    <div className={styles.result__value}>
                                        {item.size} кб
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </>
                ) : null}
                <Button onClick={onSubmit}>
                    Зарегистрироваться
                </Button>
                <Link className={styles.result__link} to="/">
                    Изменить данные
                </Link>
            </div>
        </Container>
    );
};
