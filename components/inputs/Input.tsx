'use client'

import { FieldValues, UseFormRegister } from "react-hook-form"
import { Dispatch, SetStateAction, SyntheticEvent, useState } from "react"


//  Je passe par ce type car sinon typescript me génère une erreur 
//  en me disant que e.target n'as pas 'value'
type Element = EventTarget & { value: string }

type Props = {
    register: UseFormRegister<FieldValues>
    setThereIsAnError: Dispatch<SetStateAction<boolean>>
    type: "text" | "number" | "password"
    name: string
    pattern: RegExp
    errorMessage: string
    isValid?: (value: string) => boolean
    isNotValideMessage?: string
    children: string
}
export default function Input({ register, setThereIsAnError, type, name, pattern, errorMessage, isValid, isNotValideMessage, children }: Props) {

    const [error, setError] = useState(false);
    const [errorMessageToDisplay, SetErrorMessageToDisplay] = useState(errorMessage);
    const onBlur = (e: SyntheticEvent) => {
        const element = e.target as Element;
        const value = element.value;
        if (!pattern.test(value)) {
            SetErrorMessageToDisplay(errorMessage);
            setError(true);
            setThereIsAnError(true);
            return;
        }

        if (isValid) {
            if (!isValid(value)) {
                SetErrorMessageToDisplay(isNotValideMessage || "valeur non valide");
                setError(true);
                setThereIsAnError(true);
            }
        }
    }

    const onFocus = () => {
        setError(false);
        setThereIsAnError(false);
    }

    return (
        <>
            <label className="flex flex-col w-full">
                {children}
                <input {...register(name, {
                    required: true,
                    pattern: pattern,
                    onBlur: onBlur
                }
                )}
                    type={type}
                    className="px-4 py-2 border border-black"
                    onFocus={onFocus}
                />
            </label>
            {error && <p className="text-red-400 text-sm">{errorMessageToDisplay}</p>}
        </>
    )
}