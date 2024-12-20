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
            <DialogContent className="max-w-4xl h-[80vh] flex flex-col">
                <DialogHeader>
                    <DialogTitle>Order Details & Chat</DialogTitle>
                </DialogHeader>
                <OrderChatDialog order={order} />
            </DialogContent>
        </Dialog>
    )
}