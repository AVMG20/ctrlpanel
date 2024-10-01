import {Edit, Eye, Trash} from "lucide-react";
import Link from "next/link";

export function EditButton({onClick}: {onClick?: () => void}) {
    return (
        <button className={'btn btn-xs btn-info btn-outline border-0'} onClick={onClick}>
            <Edit/>
        </button>
    )
}

export function EditLink({href}: {href: string}) {
    return (
        <Link href={href} className={'btn btn-xs btn-info btn-outline border-0'}>
            <Edit/>
        </Link>
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
        <button className={'btn btn-xs btn-secondary btn-outline border-0'} onClick={onClick}>
            <Eye/>
        </button>
    )
}

export function ViewLink({href}: {href: string}) {
    return (
        <Link href={href} className={'btn btn-xs btn-secondary btn-outline border-0'}>
            <Eye/>
        </Link>
    )
}