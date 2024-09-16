'use client';
import React from 'react';

interface FormSelectProps {
    id: string;
    label: string;
    options: { value: string; label: string }[];
    value?: string;
    errorMessage?: string;
    required?: boolean;
}

const FormSelect: React.FC<FormSelectProps> = ({
    id,
    label,
    options,
    value,
    errorMessage,
    required,
}) => {
    return (
        <div className="form-control mb-3">
            <label className="label" htmlFor={id}>
                <span className="label-text">{label}</span>
            </label>
            <select
                id={id}
                name={id}
                defaultValue={value}
                className={`select select-bordered ${errorMessage ? 'select-error' : ''}`}
                required={required}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {errorMessage && <span className="text-error">{errorMessage}</span>}
        </div>
    );
};

export default FormSelect;
