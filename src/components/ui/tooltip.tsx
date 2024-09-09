import React from "react";
import {Info} from "lucide-react";

export default function Tooltip({tip}: {tip: string}) {
    return (
        <div className="tooltip" data-tip={tip}>
            <Info className={'text-secondary'} />
        </div>
    );
}