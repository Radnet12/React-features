import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useData } from '../../state/stateContext';
import { Button } from '../Button/Button';
import { Container } from '../Container/Container';
import { FileInput } from '../FIleInput/FileInput';
import { Form } from '../Form/Form';
import { Title } from '../Title/Title';

export const Step3 = () => {
    const history = useHistory();
    const { data, setValues } = useData();
    const {control, handleSubmit} = useForm({
        defaultValues: {files: data.files}
    });

    const onSubmit = (data) => {
        history.push("/result");
        setValues(data);
    }
    return (
        <Container>
            <Title>
                Третий шаг
            </Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FileInput control={control} name="files"/>
                <Button>
                    Продолжить
                </Button>
            </Form>
        </Container>
    )
};