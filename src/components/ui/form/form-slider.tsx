import React from 'react';
import { useState } from 'react';

interface FormSliderProps {
    id: string;
    label: string;
    defaultValue?: boolean;
    onChange?: (value: boolean) => void;
}

const FormSlider: React.FC<FormSliderProps> = ({ id, label, defaultValue = false, onChange }) => {
    const [value, setValue] = useState(defaultValue);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.checked;
        setValue(newValue);
        if (onChange) {
            onChange(newValue);
        }
    };

    return (
        <div className="form-control w-full max-w-xs">
            <label className="label cursor-pointer">
                <span className="label-text">{label}</span>
                <input
                    id={id}
                    type="checkbox"
                    className="toggle toggle-primary"
                    checked={value}
                    onChange={handleChange}
                />
            </label>
            <input
                type="hidden"
                name={id}
                value={value ? 'true' : 'false'}
            />
        </div>
    );
};

export default FormSlider;