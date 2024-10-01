import React, { useRef, useState } from 'react';
import Tooltip from "@/components/ui/tooltip";

interface FormFileInputProps {
    id: string;
    label: string;
    errorMessage?: string;
    required?: boolean;
    tooltip?: string;
    accept?: string;
    multiple?: boolean;
    onChange?: (files: FileList | null) => void;
}

const FormFileInput: React.FC<FormFileInputProps> = ({
    id,
    label,
    errorMessage,
    required,
    tooltip,
    accept,
    multiple,
    onChange
}) => {
    const [fileName, setFileName] = useState<string>('');
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            setFileName(multiple ? `${files.length} file(s) selected` : files[0].name);
            if (onChange) {
                onChange(files);
            }
        } else {
            setFileName('');
            if (onChange) {
                onChange(null);
            }
        }
    };

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

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
            <div className="flex">
                <input
                    ref={fileInputRef}
                    id={id}
                    name={id}
                    type="file"
                    accept={accept}
                    multiple={multiple}
                    required={required}
                    className="hidden"
                    onChange={handleFileChange}
                />
                <button
                    type="button"
                    onClick={handleButtonClick}
                    className="btn btn-outline"
                >
                    Choose File
                </button>
                <span className="ml-3 self-center">
                    {fileName || 'No file chosen'}
                </span>
            </div>
            {errorMessage && (
                <span className="text-error text-sm mt-1">{errorMessage}</span>
            )}
        </div>
    );
};

export default FormFileInput;