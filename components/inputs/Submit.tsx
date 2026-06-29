
type Props = {
    thereIsAnError: boolean
}

export default function Submit({ thereIsAnError }: Props) {
    return (
        <input
            className={`px-4 py-2 border border-black self-center ${thereIsAnError ? "cursor-not-allowed" : "cursor-pointer"}`}
            type="submit"
            value="envoyer"
            disabled={thereIsAnError}
        />
    )
}