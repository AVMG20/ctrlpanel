'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, Key, ShieldAlert, ArrowLeft, Home } from "lucide-react";

const Custom403 = () => {
    const router = useRouter();
    const [wiggle, setWiggle] = useState(false);
    const [rotate, setRotate] = useState(false);

    useEffect(() => {
        const wiggleInterval = setInterval(() => setWiggle(prev => !prev), 1000);
        const rotateInterval = setInterval(() => setRotate(prev => !prev), 2000);
        return () => {
            clearInterval(wiggleInterval);
            clearInterval(rotateInterval);
        };
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-secondary to-accent flex flex-col items-center justify-center p-4">
            <div className="text-center bg-base-100 rounded-lg shadow-xl p-8 max-w-lg w-full">
                <h1 className="text-8xl font-bold mb-4 text-secondary">4<Lock className={`inline ${wiggle ? 'animate-wiggle' : ''}`} size={80}/>3</h1>
                <p className="text-3xl font-semibold mb-6 text-primary">Oops! Access Denied!</p>

                <div className="flex justify-center space-x-4 mb-8">
                    <Key className={`text-info ${wiggle ? 'animate-wiggle' : ''}`} size={48} />
                    <ShieldAlert className={`text-warning ${rotate ? 'animate-spin' : ''}`} size={48} />
                </div>

                <p className="text-xl mb-8">Looks like you've stumbled upon a secret area! Unfortunately, your VIP pass seems to be missing.</p>

                <div className="flex justify-center space-x-4">
                    <button
                        className="btn btn-primary btn-lg group transition-all duration-300 ease-in-out transform hover:scale-105"
                        onClick={() => router.back()}
                    >
                        <ArrowLeft className="mr-2 transition-all duration-300 ease-in-out transform group-hover:-translate-x-2" />
                        Go Back
                    </button>
                    <button
                        className="btn btn-secondary btn-lg group transition-all duration-300 ease-in-out transform hover:scale-105"
                        onClick={() => router.push('/')}
                    >
                        <Home className="mr-2 transition-all duration-300 ease-in-out transform group-hover:rotate-12" />
                        Home Page
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Custom403;