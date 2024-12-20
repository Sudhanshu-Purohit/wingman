'use client'

import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { OrdersSchema } from '@/schema/orders-schema'
import Image from 'next/image'
import Chat from './chat'

interface OrderChatDialogProps {
    order: OrdersSchema
}

export function OrderChatDialog({ order }: OrderChatDialogProps) {
    return (
        <div className="flex flex-col md:flex-row h-full gap-4 md:gap-6 overflow-hidden">
            {/* Order Details Section */}
            <Card className="p-4 md:p-6 border-none shadow-none overflow-y-auto">
                <div className="space-y-4 md:space-y-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <div className="relative w-16 sm:w-28 md:w-40 aspect-square rounded-lg overflow-hidden">
                            <Image
                                src={order.product.image}
                                alt={order.product.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 8rem, 10rem"
                            />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-semibold text-lg md:text-xl">{order.product.name}</h3>
                            <p className="text-sm text-muted-foreground">
                                Order ID: {order.id}
                            </p>
                        </div>
                    </div>
                    
                    <Separator className="hidden sm:block" />
                    
                    <div className="grid grid-cols-2 gap-4 text-sm md:text-base">
                        <div className="space-y-1">
                            <p className="text-muted-foreground">Date</p>
                            <p className="font-medium">{order.date}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-muted-foreground">Time</p>
                            <p className="font-medium">{order.time}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-muted-foreground">Value</p>
                            <p className="font-medium">{order.value}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-muted-foreground">Commission</p>
                            <p className="font-medium">{order.commission}</p>
                        </div>
                    </div>
                </div>
            </Card>

            {/* Chat Section */}
            <div className="flex-1 md:h-full min-h-[50vh] md:min-h-0">
                <Chat />
            </div>
        </div>
    )
}