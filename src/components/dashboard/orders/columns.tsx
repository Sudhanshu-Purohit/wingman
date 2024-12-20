'use client'

import { ColumnDef } from '@tanstack/react-table';
import { OrdersSchema } from '@/schema/orders-schema';
import { DataTableColumnHeader } from './data-table-column-header';
import { DataTableRowActions } from './data-table-row-actions';
import Image from 'next/image';

export const columns: ColumnDef<OrdersSchema>[] = [
    {
        accessorKey: 'product',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Product" />
        ),
        cell: ({ row }) => {
            const product = row.getValue('product');
            return (
                <div className="flex items-center space-x-3">
                    <div className="">
                        <Image
                            width={70}
                            height={60}
                            src={product.image}
                            alt="Product"
                            className="object-cover rounded-md border border-gray-200"
                        />
                    </div>
                    <span className="flex-1 truncate text-sm font-medium">
                        {product.name}
                    </span>
                </div>
            );
        },
    },
    {
        accessorKey: 'date',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Date" />
        ),
        cell: ({ row }) => {
            return (
                <div className="flex w-[100px] items-center">
                    <span>{row.getValue('date')}</span>
                </div>
            )
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        accessorKey: 'time',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Time Spent" />
        ),
        cell: ({ row }) => {
            return (
                <div className="flex items-center">
                    {row.getValue('time')}
                </div>
            )
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        accessorKey: 'value',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Order Value" />
        ),
        cell: ({ row }) => {
            return (
                <div className="flex items-center">
                    {row.getValue('value')}
                </div>
            )
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        accessorKey: 'commission',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Commission" />
        ),
        cell: ({ row }) => {
            return (
                <div className="flex items-center">
                    {row.getValue('commission')}
                </div>
            )
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        id: 'actions',
        cell: ({ row }) => {
            return <DataTableRowActions row={row} />;
        },
    },
]