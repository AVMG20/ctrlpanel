import {Edit, Eye, Trash} from "lucide-react";

export function EditButton({onClick}: {onClick?: () => void}) {
    return (
        <button className={'btn btn-xs btn-info btn-outline border-0'} onClick={onClick}>
            <Edit/>
        </button>
    )
}

export function DeleteButton({onClick}: {onClick?: () => void}) {
    return (
        <button className={'btn btn-xs btn-error btn-outline border-0'} onClick={onClick}>
            <Trash/>
        </button>
    )
}

export function ViewButton({onClick}: {onClick?: () => void}) {
    return (
        <button className={'btn btn-xs btn-primary btn-outline border-0'} onClick={onClick}>
            <Eye/>
        </button>
    )
}