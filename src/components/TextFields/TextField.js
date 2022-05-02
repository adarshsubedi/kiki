import { StyleSheet, Text, View, TextInput, Input } from 'react-native';
import React from 'react';
import {Controller} from 'react-hook-form';

function TextField({
    control,
    name,
    value,
    label,
    rules,
    placeholder,
    secureTextEntry,
    placeholderTextColor,
}) {

    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                <Input
                    label={label}
                    value={value}
                    placeholder={placeholder}
                    secureTextEntry={secureTextEntry}
                    placeholderTextColor={placeholderTextColor}
                />
            )
            }
        />
    );
}

const styles = StyleSheet.create({
    input: {
        borderColor: '#637381',
        borderWidth: 1,
        marginHorizontal: 10,
        borderRadius: 7,
        margin: 7,
        padding: 10,
    },
})

export default TextField;