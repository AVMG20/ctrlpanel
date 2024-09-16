'use client';
import React, { useState } from 'react';

interface FormTextareaProps {
    id: string;
    label: string;
    value?: string;
    errorMessage?: string;
    placeholder?: string;
    required?: boolean;
}

const FormTextarea: React.FC<FormTextareaProps> = ({
    id,
    label,
    value,
    errorMessage,
    placeholder,
    required,
}) => {
    const [inputValue, setInputValue] = useState(value || '');

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(event.target.value);
    };

    return (
        <div className="form-control mb-3">
            <label className="label" htmlFor={id}>
                <span className="label-text">{label}</span>
            </label>
            <textarea
                id={id}
                name={id}
                value={inputValue}
                onChange={handleInputChange}
                placeholder={placeholder}
                className={`textarea textarea-bordered ${errorMessage ? 'textarea-error' : ''}`}
                required={required}
            />
            {errorMessage && <span className="text-error">{errorMessage}</span>}
        </div>
    );
};

export default FormTextarea;
