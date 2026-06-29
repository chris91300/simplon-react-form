import { FieldValues, UseFormRegister } from "react-hook-form"
import Input from "./Input"
import { Dispatch, SetStateAction } from "react";

const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

type Props = {
    register: UseFormRegister<FieldValues>
    setThereIsAnError: Dispatch<SetStateAction<boolean>>
}

export default function Email({ register, setThereIsAnError }: Props) {

    return (
        <Input
            register={register}
            setThereIsAnError={setThereIsAnError}
            type="text"
            name="email"
            pattern={emailRegex}
            errorMessage="format de l'email invalide"
        >
            email
        </Input>
    )

}