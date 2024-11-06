import React, { useState } from "react";
import Table from "@/components/table/Table";
import TablePagination from "@/components/table/TablePagination";
import { Membership } from "@/models/membership";
import { TableQueryProvider } from "@/provider/TableQueryProvider";
import { Column } from "react-table";
import TableHeader from "@/components/table/TableHeader";
import { dashboardmembershipApi } from "@/api/membership-card";
import { formatCurrency } from "@/utils";
import ActionCell from "@/components/table/cell/ActionCell";
import { CardModal } from "@/components/modal/CardModal";
import Card from "./card";


const MembershipCard = () => {
    // State for managing modal visibility and selected membership ID
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedMembershipId, setSelectedMembershipId] = useState<string | null>(null);

    const openModal = (membershipId: string) => {
        setSelectedMembershipId(membershipId);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedMembershipId(null);
    };

    const columns: ReadonlyArray<Column<Membership>> = [
        {
            Header: ({ column: { id } }) => (
                <TableHeader title="Member Name" id={id} sortable className="text-center" />
            ),
            accessor: "name",
            Cell: ({ value, row }) => (
                <span className={`badge badge-sm badge-${row.original.color} badge-outline text-center w-full block`}>
                    {value.toUpperCase()}
                </span>
            ),
        },
        {
            Header: ({ column: { id } }) => (
                <TableHeader title="Monthly Price" id={id} sortable className="text-center" />
            ),
            accessor: "price_monthly",
            Cell: ({ value }) => (
                <span className="text-center w-full block">{formatCurrency(value)} đ</span>
            ),
        },
        {
            Header: ({ column: { id } }) => (
                <TableHeader title="Yearly Price" id={id} sortable className="text-center" />
            ),
            accessor: "price_yearly",
            Cell: ({ value }) => (
                <span className="text-center w-full block">{formatCurrency(value)} đ</span>
            ),
        },
        {
            Header: ({ column: { id } }) => (
                <TableHeader title="Max Borrow Days" id={id} sortable className="text-center" />
            ),
            accessor: "max_borrow_days",
            Cell: ({ value }) => (
                <span className="text-center w-full block">{value}</span>
            ),
        },
        {
            Header: ({ column: { id } }) => (
                <TableHeader title="Max Books per Borrow" id={id} sortable className="text-center" />
            ),
            accessor: "max_borrow_books_per_time",
            Cell: ({ value }) => (
                <span className="text-center w-full block">{value}</span>
            ),
        },
        {
            Header: ({ column: { id } }) => (
                <TableHeader title="Max Reserved Books per Month" id={id} sortable className="text-center" />
            ),
            accessor: "max_reserve_books_per_montly",
            Cell: ({ value }) => (
                <span className="text-center w-full block">{value}</span>
            ),
        },
        {
            Header: ({ column: { id } }) => (
                <TableHeader title="Renewal Allowed" id={id} sortable className="text-center" />
            ),
            accessor: "renewal_allowed",
            Cell: ({ value }) => (
                <span>{value ? "Yes" : "No"}</span>
            ),
        },
        {
            Header: ({ column: { id } }) => (
                <TableHeader title="Hold Allowed" id={id} sortable className="text-center" />
            ),
            accessor: "hold_allowed",
            Cell: ({ value }) => (
                <span>{value ? "Yes" : "No"}</span>
            ),
        },
        {
            Header: ({ column: { id } }) => (
                <TableHeader title="" id={id} className="w-8" />
            ),
            id: "card-actions",
            Cell: ({ row: { original } }) => (
                <div>
                    <button
                        className="btn btn-xs btn-icon btn-light"
                        onClick={() => openModal(original._id)}
                    >
                        <i className="ki-outline ki-eye"></i>
                    </button>
                </div>
            ),
        },
    ];

    return (
        <>
            <div className="container-fixed">
                <div className="flex flex-wrap items-center lg:items-end justify-between gap-5 pb-7.5">
                    <div className="flex flex-col justify-center gap-2">
                        <h1 className="text-xl font-medium leading-none text-gray-900">
                            Membership Card
                        </h1>
                        <div className="flex items-center gap-2 text-sm font-normal text-gray-700">
                            Membership details
                        </div>
                    </div>
                    <div className="flex items-center gap-2.5">
                        <a className="btn btn-sm btn-light" href="#">
                            Add Membership
                        </a>
                    </div>
                </div>
            </div>
            <div className="container-fixed">
                <div className="grid gap-5 lg:gap-7.5">
                    <div className="card card-grid min-w-full">
                        <TableQueryProvider
                            fetcher={dashboardmembershipApi.getMemberships}
                            requestKey="dashboard-memberships-card"
                            limit={20}
                        >
                            <div className="card-body">
                                <Table columns={columns} />
                            </div>
                            <TablePagination />
                        </TableQueryProvider>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <CardModal
                    modalKey="Detail-membership"
                    title="Membership Details"
                    isOpen={isModalOpen}
                    onClose={closeModal}
                >
                  <div>
                  <Card membershipId={selectedMembershipId}  />
                  </div>
                  
                </CardModal>
            )}
        </>
    );
};

export default MembershipCard;
