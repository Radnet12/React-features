import React from "react";
import styles from './Step1.scss';
import { Container } from "../Container/Container";
import { Form } from "../Form/Form";
import { Input } from "../Input/Input";
import { useForm } from "react-hook-form";
import { Button } from "../Button/Button";

export const Step1 = () => {
    const { register, handleSubmit, errors } = useForm();
    return (
        <Container>
            <h2 className={styles.h2}>Первый шаг</h2>
            <Form>
                <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Имя"
                    label="Имя"
                    register={register}
                />
                <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Фамилия"
                    label="Фамилия"
                    register={register}
                />
                <Button>
                    Продолжить
                </Button>
            </Form>
        </Container>
    );
};
