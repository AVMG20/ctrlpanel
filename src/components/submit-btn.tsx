import {useFormStatus} from "react-dom";
import {twMerge} from "tailwind-merge";

type SubmitBtnProps = {
    label?: string; btnClass?: string;
};
export default function SubmitBtn({
    label = 'Submit',
    btnClass
}: SubmitBtnProps) {
    const {pending} = useFormStatus();

    return (
        <button className={'btn btn-primary ' + twMerge(btnClass)}
                type="submit"
                disabled={pending}>

            {pending && (
                <>
                    <span className="loading loading-spinner"></span>
                    <span>loading</span>
                </>
            )}
            {!pending && <>{label}</>}
        </button>
    );
}
