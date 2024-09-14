import React from "react";

export default function StatusBadge ({status}: {status: string}) {
    let badgeClass: String;
    switch (status) {
        case "Open":
            badgeClass = "badge-primary";
            break;
        case "Closed":
            badgeClass = "badge-error";
            break;
        default:
            badgeClass = "badge-secondary";
            break;
    }
    
    return (
        <span
            className={`badge ${badgeClass}`}>
          {status}
        </span>
    )
}