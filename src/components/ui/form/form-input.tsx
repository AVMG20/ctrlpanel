import React, {HTMLInputTypeAttribute} from 'react';

interface FormInputProps<> {
    id: string;
    label: string;
    value?: string|number;
    errorMessage?: string
    placeholder?: string;
    type?: HTMLInputTypeAttribute | undefined
    required?: boolean
}

const FormInput: React.FC<FormInputProps> = ({ id, label, value,  errorMessage, placeholder, type, required }) => {
    return (
        <div className="form-control mb-3">
            <label className="label" htmlFor={id}>
                <span className="label-text">{label}</span>
            </label>
            <input
                id={id}
                name={id}
                type={type ? type : 'text'}
                defaultValue={value || ''}
                placeholder={placeholder}
                className={`input input-bordered ${errorMessage ? 'input-error' : ''}`}
                required={required}
            />
            {errorMessage && (
                <span className="text-error">{errorMessage}</span>
            )}
        </div>
    );
};

export default FormInput;
