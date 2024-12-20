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
        <div className="grid grid-cols-2 gap-6 h-full ">
            {/* Order Details Section */}
            <Card className="p-6 border-none shadow-none">
                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="relative h-20 w-20 rounded-lg overflow-hidden">
                            <Image
                                src={order.product.image}
                                alt={order.product.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">{order.product.name}</h3>
                            <p className="text-sm text-muted-foreground">
                                Order ID: {order.id}
                            </p>
                        </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                            <p className="text-muted-foreground">Date</p>
                            <p className="font-medium">{order.date}</p>
                        </div>
                        <div>
                            <p className="text-muted-foreground">Time</p>
                            <p className="font-medium">{order.time}</p>
                        </div>
                        <div>
                            <p className="text-muted-foreground">Value</p>
                            <p className="font-medium">{order.value}</p>
                        </div>
                        <div>
                            <p className="text-muted-foreground">Commission</p>
                            <p className="font-medium">{order.commission}</p>
                        </div>
                    </div>
                </div>
            </Card>

            {/* Chat Section */}
            <div className='h-[70vh]'>
                <Chat />
            </div>
        </div>
    )
}

