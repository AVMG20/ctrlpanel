'use client';

import React, {createContext, useContext, useState, useCallback, useEffect} from 'react';
import {BaseFormState} from "@/types";

// Types for toast and context
interface Toast {
    id: number;
    message: string;
    type: 'success' | 'info' | 'warning' | 'error';
}

interface ToastContextProps {
    addToast: (message?: string, type?: 'success' | 'info' | 'warning' | 'error', duration?: number) => void;
    handleToast: (state: { message?: string; success?: boolean; }) => void;
}

// Create context
const ToastContext = createContext<ToastContextProps | undefined>(undefined);

// Toaster provider component with hook and HTML
export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const addToast = useCallback((message?: string, type: Toast['type'] = 'success', duration: number = 3000) => {
        if (!message) return;

        const id = Date.now();

        setToasts((prev) => [...prev, { id, message, type }]);

        setTimeout(() => {
            setToasts((prev) => prev.filter((toast) => toast.id !== id));
        }, duration);
    }, []);

    const handleToast = useCallback((state: { message?: string; success?: boolean }) => {
        if (!state?.message) return;
        if (state?.success) {
            addToast(state?.message, 'success');
        } else {
            addToast(state?.message, 'error');
        }
    }, []);

    const removeToast = useCallback((id: number) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, []);

    return (
        <ToastContext.Provider value={{ addToast, handleToast }}>
            {children}
            <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 space-y-2 z-50">
                <div className="toast toast-center">
                    {toasts.map((toast) => (
                        <Toast
                            key={toast.id}
                            message={toast.message}
                            type={toast.type}
                            onClose={() => removeToast(toast.id)}
                        />
                    ))}
                </div>
            </div>
        </ToastContext.Provider>
    );
};

// Custom hook to use toaster context
export const useToast = (): ToastContextProps => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};


// Toast Component
const Toast: React.FC<{ message: string; type: 'success' | 'info' | 'warning' | 'error'; onClose: () => void }> = ({
    message,
    type,
    onClose,
}) => {
    return (
        <div className={`alert alert-${type}`}>
            <span>{message}</span>
            <button className="ml-2" onClick={onClose}>
                ✕
            </button>
        </div>
    );
};

export const useToastEffect = (state: BaseFormState) => {
    const { handleToast } = useToast();
    useEffect(() => {
        if (state?.message) {
            handleToast({
                message: state.message,
                success: state.success,
            });
        }
    }, [state]);
};

export default useToastEffect;

