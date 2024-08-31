import {useFormStatus} from "react-dom";

export default function SubmitBtn() {
    const {pending} = useFormStatus();
    return (

        <button className={'btn btn-primary'} type="submit">
            {pending && (
                <>
                    <span className="loading loading-spinner"></span>
                    <span>loading</span>
                </>
            )}
            {!pending && <>Submit</>}
        < /button>
    );
}
