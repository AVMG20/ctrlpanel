import React from 'react';
import Tooltip from "@/components/ui/tooltip";

interface Option {
    value: string|number;
    label: string;
}

interface FormSelectProps {
    id: string;
    label: string;
    options: Option[];
    value?: string | number;
    errorMessage?: string;
    required?: boolean;
    tooltip?: string;
}

const FormSelect: React.FC<FormSelectProps> = ({
    id,
    label,
    options,
    value,
    errorMessage,
    required,
    tooltip
}) => {
    return (
        <div className="form-control mb-3">
            <div className="flex items-center justify-between">
                <label className="label" htmlFor={id}>
                    <span className="label-text">{label}</span>
                </label>
                {tooltip && <Tooltip tip={tooltip} />}
            </div>
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