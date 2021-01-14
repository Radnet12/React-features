import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import {useHistory} from 'react-router-dom';
import styles from "./Step1.scss";
import { Container } from "../Container/Container";
import { Form } from "../Form/Form";
import { Input } from "../Input/Input";
import { useForm } from "react-hook-form";
import { Button } from "../Button/Button";
import * as yup from 'yup';
import { Title } from "../Title/Title";
import { useData } from "../../state/stateContext";

const schema = yup.object().shape({
    firstName: yup
        .string()
        .matches(/^([^0-9]*)$/, "Имя не должно содержать цифр")
        .required("Имя обязательно к заполнению"),
    lastName: yup
        .string()
        .matches(/^([^0-9]*)$/, "Фамилия не должна содержать цифр")
        .required("Фамилия обязательна к заполнению"),
});

export const Step1 = () => {
    const history = useHistory();
    const {data, setValues} = useData();
    const { register, handleSubmit, errors } = useForm({
        defaultValues: {firstName: data.firstName, lastName: data.lastName},
        mode: "onChange",
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        history.push('/step2');
        setValues(data);
    };

    return (
        <Container>
            <Title>Первый шаг</Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Имя"
                    label="Имя"
                    register={register}
                />
                {!!errors.firstName && <p className={styles.p}>{errors.firstName.message}</p>}
                <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Фамилия"
                    label="Фамилия"
                    register={register}
                />
                {!!errors.lastName && <p className={styles.p}>{errors.lastName.message}</p>}
                <Button>Продолжить</Button>
            </Form>
        </Container>
    );
};
