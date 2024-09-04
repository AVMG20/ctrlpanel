import SubmitBtn from "@/components/ui/form/submit-btn";
import Card from "@/components/ui/card";
import PageTitle from "@/components/util/page-title";

export default async function Page() {
    const tickets = [{
        id: 1,
        title: "Issue with login",
        status: "Open",
        date: "2023-09-03"
    }, {
        id: 2,
        title: "Error 404 on page",
        status: "Closed",
        date: "2023-08-21"
    },]


    return (
        <div>
            <PageTitle title="Tickets" description="Create a new ticket or view existing ones."/>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Tickets List */}
                <Card title="Create a new Ticket">
                    <div className="overflow-x-auto">
                        <table className="table table-zebra w-full">
                            <thead>
                            <tr>
                                <th>Title</th>
                                <th>Priority</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            {tickets.map((ticket) => (
                                <tr key={ticket.id}>

                                    <td>{ticket.title}</td>
                                    <td>Normal</td>
                                    <td>{ticket.date}</td>
                                    <td>
                                        <span className={`badge ${ticket.status === "Open" ? "badge-primary" : "badge-secondary"}`}>
                                          {ticket.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </Card>

                {/* New Ticket Form */}
                <Card title="Create a new Ticket">
                    <form className="p-4">
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input
                                type="text"
                                name="title"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Priority</span>
                            </label>
                            <select
                                name="category"
                                className="select select-bordered w-full"
                                required
                            >
                                <option value="billing">Normal</option>
                                <option value="technical">Urgent</option>
                                <option value="general">Critical</option>
                            </select>
                        </div>

                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea
                                name="description"
                                className="textarea textarea-bordered w-full"
                                rows={6}
                                required
                            ></textarea>
                        </div>

                        <div className="flex justify-end mt-5 mb-4">
                            <SubmitBtn label="Create Ticket"/>
                        </div>
                    </form>
                </Card>
            </div>
        </div>
    );
};
