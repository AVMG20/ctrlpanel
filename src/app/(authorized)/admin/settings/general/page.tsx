'use client';
import React, {useEffect, useState} from 'react';
import Card from "@/components/ui/card";
import SubmitBtn from "@/components/ui/form/submit-btn";
import {useFormState} from "react-dom";
import saveSettings, {getSettings} from "@/app/(authorized)/admin/settings/actions";
import SkeletonForm from "@/app/(authorized)/admin/settings/skeleton-form";
import Tooltip from "@/components/ui/tooltip";
import useToastEffect from "@/components/util/toaster";
import {BaseFormState} from "@/types";
import FormRichEditor from "@/components/ui/form/form-rich-editor";
import config from '@/../tailwind.config';

export default function NotificationSettings() {
    const [settings, setSettings] = useState<Record<string, string|null>>({
        motd: null,
        theme: null,
    });
    const [loading, setLoading] = useState(true);
    const [state, action] = useFormState<BaseFormState, FormData>(saveSettings, {});

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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <ThemeSelector settings={settings}/>

                    <FormRichEditor value={settings.motd ?? ''} id={'motd'} label={'Message of the Day'}/>
                </div>

                <div className="mt-4 flex justify-end">
                    <SubmitBtn label={'Save'}/>
                </div>
            </form>
        </Card>
    );
}

// simple real-time theme swapper
function ThemeSelector({settings}: { settings: Record<string, string|null>}) {
    const [theme, setTheme] = useState(settings.theme);

    const themes = config.daisyui.themes;
    // The first item in the array is an object containing custom themes
    const customThemes = Object.keys(themes[0]);

    // The rest of the items are predefined theme names
    const predefinedThemes = themes.slice(1);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme ?? 'ctrlpanel');
    }, [theme])

    return (
        <div className="form-control">

            <label className="label">
                <span className="label-text">Theme</span>
            </label>
            <select onChange={e => setTheme(e.target.value)}
                    className="select select-bordered w-full"
                    value={theme ?? undefined}
                    name={'theme'}>
                <optgroup label="Custom Themes">
                    {customThemes.map((themeName) => (
                        <option key={themeName} value={themeName}>
                            {themeName}
                        </option>
                    ))}
                </optgroup>
                <optgroup label="Predefined Themes">
                    {predefinedThemes.map((themeName: string) => (
                        <option key={themeName} value={themeName}>
                            {themeName}
                        </option>
                    ))}
                </optgroup>
            </select>
        </div>
    )
}