export default function PageTitle({
    title,
    description,
    actions
}: {
    title: string,
    description?: string
    actions?: React.ReactNode
}) {
    return (
        <div className="flex justify-between flex-wrap gap-3 items-end mb-5">
            <div className="page-title">
                <h2 className={'text-xl'}>{title}</h2>
                {description && (
                    <p className={'text-sm text-neutral-500'}>{description}</p>
                )}
            </div>
            {actions && (
                <div className="page-actions">
                    {actions}
                </div>
            )}
        </div>

    )
}