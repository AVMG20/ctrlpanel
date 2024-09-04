'use client';
import React, {HTMLInputTypeAttribute, useState} from 'react';

interface FormInputProps<> {
    id: string;
    label: string;
    value?: string;
    errorMessage?: string
    placeholder?: string;
    type?: HTMLInputTypeAttribute | undefined
    required?: boolean
}

const FormInput: React.FC<FormInputProps> = ({ id, label, value,  errorMessage, placeholder, type, required }) => {
    const [inputValue, setInputValue] = useState(value);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    return (
        <div className="form-control mb-3">
            <label className="label" htmlFor={id}>
                <span className="label-text">{label}</span>
            </label>
            <input
                id={id}
                name={id}
                type={type ? type : 'text'}
                value={inputValue}
                onChange={handleInputChange}
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
