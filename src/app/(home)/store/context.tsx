'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the object types
type InfoObject = {
    id: string;
    name: string;
};

// Define the context type
interface AppContextType {
    location: InfoObject;
    service: InfoObject;
    configuration: InfoObject;
    step: number;
    setLocation: (location: InfoObject) => void;
    setService: (service: InfoObject) => void;
    setConfiguration: (configuration: InfoObject) => void;
}

// Create the context
const StoreContext = createContext<AppContextType | undefined>(undefined);

// Define the provider props
interface AppProviderProps {
    children: ReactNode;
}

// Create the provider component
export const StoreProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [location, setLocation] = useState<InfoObject>({ id: '', name: '' });
    const [service, setService] = useState<InfoObject>({ id: '', name: '' });
    const [configuration, setConfiguration] = useState<InfoObject>({ id: '', name: '' });
    const [step, setStep] = useState<1|2|3|4>(1);

    // Value to be passed to the context
    const value = {
        location,
        service,
        configuration,
        step,
        setStep,
        setLocation,
        setService,
        setConfiguration
    };

    return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};

// Hook for consuming the context
export const useStoreContext = () => {
    const context = useContext(StoreContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within a AppProvider');
    }
    return context;
};
