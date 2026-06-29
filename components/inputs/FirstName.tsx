'use client'

import { FieldValues, UseFormRegister } from "react-hook-form"
import { Dispatch, SetStateAction } from "react";
import Input from "./Input"

const firstnameRegex = /^.{1,20}$/

type Props = {
    register: UseFormRegister<FieldValues>
    setThereIsAnError: Dispatch<SetStateAction<boolean>>
}
export default function FirstName({ register, setThereIsAnError }: Props) {

    return (
        <Input
            register={register}
            setThereIsAnError={setThereIsAnError}
            type="text"
            name="firstname"
            pattern={firstnameRegex}
            errorMessage="entre 1 et 20 chractères"
        >
            prénom
        </Input>
    )

}