import { z } from 'zod'

const productSchema = z.object({
    name: z.string(),
    image: z.string().url(),
});

export const ordersSchema = z.object({
    // id: z.string(),
    product: productSchema,
    date: z.string(), 
    time: z.string(), 
    value: z.string(), 
    commission: z.string(), 
});


export type OrdersSchema = z.infer<typeof ordersSchema>