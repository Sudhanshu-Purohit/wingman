'use client'

import { ordersSchema } from '@/schema/orders-schema'
import { Row } from '@tanstack/react-table'
import { useRouter } from 'next/navigation'
interface DataTableRowActionsProps<TData> {
    row: Row<TData>
}

export function DataTableRowActions<TData>({
    row,
}: DataTableRowActionsProps<TData>) {

    // const router = useRouter();
    // const task = ordersSchema.parse(row.original)

    return (
        <div>
            <span>view chat</span>
        </div>
    )
}