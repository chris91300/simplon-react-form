'use client'

import { FieldValues, UseFormRegister } from "react-hook-form"
import { Dispatch, SetStateAction } from "react";
import Input from "./Input"

const lastnameRegex = /^.{1,20}$/


type Props = {
    register: UseFormRegister<FieldValues>
    setThereIsAnError: Dispatch<SetStateAction<boolean>>
}
export default function LastName({ register, setThereIsAnError }: Props) {

    return (
        <Input
            register={register}
            setThereIsAnError={setThereIsAnError}
            type="text"
            name="lastname"
            pattern={lastnameRegex}
            errorMessage="entre 1 et 20 chractères"
        >
            nom
        </Input>
    )

}