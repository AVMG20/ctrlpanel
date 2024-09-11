import Card from "@/components/ui/card";
import {Cog, EditIcon, Trash} from "lucide-react";

export default function DataTableSkeleton() {
    return (
        <Card title={'Loading table'}>
            <form className="mb-4 flex gap-3">
                <input
                    type="text"
                    name="search"
                    disabled={true}
                    placeholder="Search..."
                    className="input input-bordered w-full max-w-xs"
                />
                <button type="submit" className="btn">
                    Search
                </button>
            </form>

            <table className="table w-full">
                <thead>
                <tr>
                    <th className="w-1/12"></th>
                    <th className="w-3/12"></th>
                    <th className="w-4/12"></th>
                    <th className="w-4/12"></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td colSpan={3} className="text-center">Loading...</td>
                    <td>
                        <button className="btn btn-xs btn-outline btn-info border-0"><EditIcon/></button>
                        <button className="btn btn-xs btn-outline btn-error border-0"><Trash/></button>
                        <button className="btn btn-xs btn-outline btn-warning border-0"><Cog/></button>
                    </td>
                </tr>
                </tbody>
            </table>

            <div className="flex justify-between mt-4">
                <button className="btn" disabled={true}>
                    Previous
                </button>
                <span>Page </span>
            </div>
        </Card>
    )
}