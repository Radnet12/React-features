import React from "react";
import { Controller } from "react-hook-form";
import Dropzone from "react-dropzone";
import { DropField } from "../DropField/DropField";
import { List } from "../List/List";
import { ListItem } from "../List/ListItem/ListItem";

export const FileInput = ({ control, name }) => {
    return (
        <Controller
            control={control}
            name={name}
            defaultValue={[]}
            render={({ onChange, onBlur, value }) => {
                return (
                    <>
                        <Dropzone onDrop={onChange}>
                            {({ getRootProps, getInputProps }) => {
                                return (
                                    <DropField getrootprops={getRootProps}>
                                        <input
                                            name={name}
                                            onBlur={onBlur}
                                            {...getInputProps()}
                                        />
                                        <p>
                                            Drag 'n' drop some files here, or
                                            click to select files
                                        </p>
                                    </DropField>
                                );
                            }}
                        </Dropzone>
                        <List>
                            {value.map((f, index) => {
                                return (
                                    <ListItem key={index}>
                                        <p>
                                            <span>Имя файла: </span>
                                            {f.name}
                                        </p>
                                        <p>
                                            <span>Размер файла: </span>
                                            {f.size} кб
                                        </p>
                                    </ListItem>
                                );
                            })}
                        </List>
                    </>
                );
            }}
        />
    );
};
