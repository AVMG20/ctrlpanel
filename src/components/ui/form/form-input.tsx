import React, { HTMLInputTypeAttribute } from 'react';
import Tooltip from "@/components/ui/tooltip";

interface FormInputProps {
    id: string;
    label: string;
    value?: string | number;
    errorMessage?: string;
    placeholder?: string;
    type?: HTMLInputTypeAttribute;
    required?: boolean;
    tooltip?: string;
}

const FormInput: React.FC<FormInputProps> = ({
    id,
    label,
    value,
    errorMessage,
    placeholder,
    type,
    required,
    tooltip
}) => {
    return (
        <div className="form-control mb-3">
            <div className="flex items-center justify-between">
                <label className="label" htmlFor={id}>
                    <span className="label-text">
                        {label}
                    </span>
                </label>
                {tooltip && <Tooltip tip={tooltip}/>}
            </div>
            <input
                id={id}
                name={id}
                type={type || 'text'}
                defaultValue={value || ''}
                placeholder={placeholder}
                className={`input input-bordered w-full ${errorMessage ? 'input-error' : ''}`}
                required={required}
            />
            {errorMessage && (
                <span className="text-error text-sm mt-1">{errorMessage}</span>
            )}
        </div>
    );
};

export default FormInput;