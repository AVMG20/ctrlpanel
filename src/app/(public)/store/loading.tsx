export default async function Loading() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 place-items-center">
            {Array.from({length: 8})
                .map((_, index) => (
                    <>
                        <LoadingItem key={index}/>
                    </>
                ))}
        </div>
    )
}

function LoadingItem() {
    return (
        <div className="block card bordered w-full h-64">
            <div className="skeleton w-full h-full"></div>
        </div>
    );
}