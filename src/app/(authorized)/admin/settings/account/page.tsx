// app/settings/account/page.tsx
import React from 'react';

export default function AccountSettings() {
    return (
        <div className="space-y-4">
            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text">Enable Two-Factor Authentication</span>
                    <input type="checkbox" className="toggle toggle-primary" />
                </label>
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text">Change Username</span>
                </label>
                <input type="text" placeholder="Enter new username" className="input input-bordered w-full" />
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text">Select Language</span>
                </label>
                <select className="select select-bordered w-full">
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                </select>
            </div>
        </div>
    );
}
