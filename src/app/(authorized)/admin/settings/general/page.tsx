'use client';
import React, {useEffect, useState} from 'react';
import Card from "@/components/ui/card";
import SubmitBtn from "@/components/ui/form/submit-btn";
import {useFormState} from "react-dom";
import saveSettings, {FormState, getSettings} from "@/app/(authorized)/admin/settings/actions";
import SkeletonForm from "@/app/(authorized)/admin/settings/skeleton-form";
import Tooltip from "@/components/ui/tooltip";
import useToastEffect from "@/components/util/toaster";

export default function NotificationSettings() {
    const [settings, setSettings] = useState({});
    const [loading, setLoading] = useState(true);
    const [state, action] = useFormState<FormState, FormData>(saveSettings, {});

    useEffect(() => {
        getSettings().then(data => {
            setSettings(data);
            setLoading(false);
        });
    }, [])

    useToastEffect(state);

    if (loading) return <SkeletonForm/>

    return (
        <Card title={'General settings'}>
            <form action={action}>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <ThemeSelector settings={settings}/>
                </div>
                <div className="mt-4 flex justify-end">
                    <SubmitBtn label={'Save'}/>
                </div>
            </form>
        </Card>
    );
}

// simple real-time theme swapper
function ThemeSelector({settings}: { settings: Record<string, string>}) {
    const [theme, setTheme] = useState(settings?.theme);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme])

    return (
        <div className="form-control">

            <label className="label">
                <span className="label-text">Theme</span>
                <Tooltip tip={"You need to rebuild the application for these changes to take permanent effect for everyone."}/>
            </label>
            <select onChange={e => setTheme(e.target.value)}
                    className="select select-bordered w-full"
                    value={theme}
                    name={'theme'}>
                <option value={'ctrlpanel'}>Ctrlpanel (Default)</option>
                <option value={'soly'}>Soly</option>
                <option value={'firestorm'}>Fire Storm</option>
            </select>
        </div>
    )
}