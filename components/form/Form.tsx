'use client'

import { useForm } from "react-hook-form";
import LastName from "../inputs/LastName";
import FirstName from "../inputs/FirstName";
import Email from "../inputs/Email";
import Age from "../inputs/Age";
import Password from "../inputs/Password";
import { useState } from "react";
import Submit from "../inputs/Submit";


export default function Form() {
    const { register, handleSubmit } = useForm();
    const [thereIsAnError, setThereIsAnError] = useState(false);
    const onSubmit = (data: unknown) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-6">
            <LastName register={register} setThereIsAnError={setThereIsAnError} />
            <FirstName register={register} setThereIsAnError={setThereIsAnError} />
            <Email register={register} setThereIsAnError={setThereIsAnError} />
            <Age register={register} setThereIsAnError={setThereIsAnError} />
            <Password register={register} setThereIsAnError={setThereIsAnError} />

            <Submit thereIsAnError={thereIsAnError} />
        </form>
    )
}