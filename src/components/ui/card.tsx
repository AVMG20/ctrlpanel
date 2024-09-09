import React, {ReactNode} from 'react';
import {ClassNameValue, twMerge} from "tailwind-merge";

interface CardProps {
    title?: string;
    cardClass?: ClassNameValue;
    children: ReactNode;
}

const Card: React.FC<CardProps> = ({ title, cardClass,  children }) => {
    return (
        <div className={"card shadow bg-base-100 w-full h-fit " + twMerge(cardClass)}>
            <div className="card-body">
                {title && (
                    <div className="card-title">{title}</div>
                )}
                {children}
            </div>
        </div>
    );
};

export default Card;