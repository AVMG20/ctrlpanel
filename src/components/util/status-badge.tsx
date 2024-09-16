import React from "react";

export default function StatusBadge ({status}: {status: string}) {
    let badgeClass: String;
    let badgeText: String;
    switch (status) {
        case "open":
            badgeClass = "badge-info";
            badgeText = "Open";
            break;
        case "in_progress":
            badgeClass = "badge-warning";
            badgeText = "In Progress";
            break;
        case "closed":
            badgeClass = "badge-success";
            badgeText = "Closed";
            break;
        default:
            badgeClass = "badge-secondary";
            badgeText = status;
            break;
    }
    
    return (
        <span className={`badge ${badgeClass}`}>
          {badgeText}
        </span>
    )
}