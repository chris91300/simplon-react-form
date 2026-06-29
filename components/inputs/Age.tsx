import { FieldValues, UseFormRegister } from "react-hook-form"
import { Dispatch, SetStateAction } from "react";
import Input from "./Input"

const ageRegExp = /^[\d]+$/;

type Props = {
    register: UseFormRegister<FieldValues>
    setThereIsAnError: Dispatch<SetStateAction<boolean>>
}

export default function Age({ register, setThereIsAnError }: Props) {

    const isValid = (value: string) => parseInt(value) >= 18;
    return (
        <Input
            register={register}
            setThereIsAnError={setThereIsAnError}
            type="number"
            name="age"
            pattern={ageRegExp}
            errorMessage="format de l'age invalide"
            isValid={isValid}
            isNotValideMessage="vous devez être majeur"
        >
            age
        </Input>
    )
}