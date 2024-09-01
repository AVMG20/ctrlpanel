export default function PageTitle ({title, description}: {title: string, description?: string}) {
    return (
        <div className="page-title mb-5">
            <h2 className={'text-xl'}>{title}</h2>
            {description && (
                <p className={'text-sm text-neutral-500'}>{description}</p>
            )}
        </div>
    )
}