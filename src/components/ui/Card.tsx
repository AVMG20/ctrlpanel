import React, { ReactNode } from 'react';

interface CardProps {
    title: string;
    children: ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
    return (
        <div className="card shadow-lg bg-base-100 w-full h-fit">
            <div className="card-body">
                <h2 className="card-title text-xl">{title}</h2>
                {children}
            </div>
        </div>
    );
};

export default Card;