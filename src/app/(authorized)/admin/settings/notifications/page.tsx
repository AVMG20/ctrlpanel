import React from 'react';
import Card from "@/components/ui/card";

export default function NotificationSettings() {
    return (
        <Card>
            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text">Email Notifications</span>
                    <input type="checkbox" className="toggle toggle-primary" />
                </label>
            </div>

            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text">Push Notifications</span>
                    <input type="checkbox" className="toggle toggle-primary" />
                </label>
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text">Notification Sound</span>
                </label>
                <select className="select select-bordered w-full">
                    <option>Chime</option>
                    <option>Ding</option>
                    <option>Alert</option>
                </select>
            </div>
        </Card>
    );
}
