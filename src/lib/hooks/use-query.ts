import { useState, useCallback } from 'react';

type AsyncFunction<T = void> = () => Promise<T>;

type status = 'idle' | 'loading' | 'success' | 'error';

interface UseAsyncResult<T> {
    data: T | null; //contains the result from the async function
    error: string | null; //contains the error message
    isLoading: boolean;
    status: status; //initial status is idle
    execute: () => Promise<void>; //function to execute the async function
}

// simple hook to execute an async functions and handle the loading states
export function useQuery<T>(asyncFunction: AsyncFunction<T>): UseAsyncResult<T> {
    const [data, setData] = useState<T | null>(null);
    const [status, setStatus] = useState<status>('idle');
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const execute = useCallback(async () => {
        setIsLoading(true);
        setStatus('loading');
        setError(null);

        try {
            const result = await asyncFunction();
            setData(result);
            setStatus('success');
        } catch (err: any) {
            setError(err.message || 'Unknown error');
            setStatus('error');
        } finally {
            setIsLoading(false);
        }
    }, [asyncFunction]);

    return { data, status, error, isLoading, execute };
}