import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Button } from "../Button/Button";
import { Container } from "../Container/Container";
import { Form } from "../Form/Form";
import { Input } from "../Input/Input";
import { Title } from "../Title/Title";
import * as yup from "yup";
import {
    parsePhoneNumberFromString
} from "libphonenumber-js";
import { useData } from "../../state/stateContext";

const schema = yup.object().shape({
    email: yup
        .string()
        .email("Email должен иметь правильный формат")
        .required("Email обязателен к заполнению"),
});

const normalizePhoneNumber = (value) => {
    const phoneNumber = parsePhoneNumberFromString(value, "UA");
    if (!phoneNumber) {
        return value;
    }

    return phoneNumber.formatInternational()
};

export const Step2 = () => {
    const history = useHistory();
    const {data, setValues} = useData();

    const { register, handleSubmit, errors, watch } = useForm({
        defaultValues: {email: data.email, hasPhone: data.hasPhone, phone: data.phone},
        mode: "onChange",
        resolver: yupResolver(schema),
    });

    const hasPhone = watch("hasPhone");


    const onSubmit = (data) => {
        history.push("/step3");
        setValues(data);
    };


    return (
        <Container>
            <Title>Второй шаг</Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    label="Email"
                    register={register}
                />
                {!!errors.email && <p>{errors.email.message}</p>}
                <Input
                    name="hasPhone"
                    type="checkbox"
                    label="У вас есть телефон?"
                    register={register}
                />
                {hasPhone &&
                    (<Input
                        register={register}
                        id="phone"
                        name="phone"
                        label="Номер телефона"
                        placeholder="Телефон"
                        type="tel"
                        onChange={(e) => {
                            e.target.value = normalizePhoneNumber(e.target.value);
                        }}
                    />)
                }
                <Button>Продолжить</Button>
            </Form>
        </Container>
    );
};
