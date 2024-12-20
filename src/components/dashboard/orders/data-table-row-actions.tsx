'use client'

import { OrderChatDialog } from '@/components/order-chat-dialog'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { ordersSchema } from '@/schema/orders-schema'
import { Row } from '@tanstack/react-table'
import { MoveUpRight } from 'lucide-react'
interface DataTableRowActionsProps<TData> {
    row: Row<TData>
}

export function DataTableRowActions<TData>({
    row,
}: DataTableRowActionsProps<TData>) {

    const order = ordersSchema.parse(row.original)

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant="link"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary"
                >
                    View Chat
                    <MoveUpRight className="h-4 w-4" />
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[95vw] flex flex-col md:max-w-4xl h-[90vh] md:h-[70vh] p-2 md:p-6">
                <DialogHeader>
                    <DialogTitle className="px-2">Order Details & Chat</DialogTitle>
                </DialogHeader>
                <OrderChatDialog order={order} />
            </DialogContent>
        </Dialog>
    )
}