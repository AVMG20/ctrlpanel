'use client';
import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';

const Custom403 = () => {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>403 Unauthorized - YourSiteName</title>
            </Head>
            <div className="flex items-center justify-center min-h-screen bg-base-200">
                <div className="text-center">
                    <h1 className="text-9xl font-bold text-primary">403</h1>
                    <p className="text-2xl font-semibold mt-4">Unauthorized Access</p>
                    <p className="mt-2">You do not have permission to view this page.</p>
                    <div className="mt-6">
                        <button
                            className="btn btn-primary mr-2"
                            onClick={() => router.back()}
                        >
                            Go Back
                        </button>
                        <button
                            className="btn btn-secondary"
                            onClick={() => router.push('/')}
                        >
                            Home Page
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Custom403;
