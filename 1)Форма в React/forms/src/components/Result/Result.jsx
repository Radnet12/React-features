import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../../state/stateContext';
import { Button } from '../Button/Button';
import { Container } from '../Container/Container';
import { Title } from '../Title/Title';
import styles from './Result.module.scss';

export const Result = () => {
    const {data} = useData();
    const entries = Object.entries(data).filter((item) => item[0] !== "files");
    const {files} = data;
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
                {files && (
                    <>
                        <h3 className={styles.files__title}>Загруженные файлы</h3>
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
                )}
                <Button>Зарегистрироваться</Button>
                <Link className={styles.result__link} to="/">
                    Изменить данные
                </Link>
            </div>
        </Container>
    );
};