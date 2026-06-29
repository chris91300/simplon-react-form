'use client'


import { FieldValues, UseFormRegister } from "react-hook-form";
import Input from "./Input"
import { Dispatch, SetStateAction } from "react";

const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

type Props = {
    register: UseFormRegister<FieldValues>
    setThereIsAnError: Dispatch<SetStateAction<boolean>>
}

export default function Password({ register, setThereIsAnError }: Props) {

    return (
        <Input
            register={register}
            setThereIsAnError={setThereIsAnError}
            type="password"
            name="password"
            pattern={passwordRegex}
            errorMessage="entre 1 et 20 chractères"
        >
            mot de passe
        </Input>
    )
}