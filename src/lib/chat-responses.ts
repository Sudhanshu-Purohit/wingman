type ResponseType = {
    [key: string]: string[];
};

export const responses: ResponseType = {
    greetings: [
        "Hello! I'm here to assist you with any questions about our products, your orders, or general inquiries. Let me know how I can help!",
        "Hello! How can I assist you today?",
        "Welcome! What can I help you with?",
    ],
    sales: [
        "Our current sales include 20% off on all electronics and buy-one-get-one-free on selected items.",
        "Check out our weekly deals section for the latest discounts!",
    ],
    order: [
        "To check your order status, please provide your order number.",
        "You can track your order in the 'My Orders' section of your account.",
    ],
    name: [
        "I'm an AI assistant here to help you with your queries!",
        "You can call me AI Assistant. How may I help you?",
    ],
    unknown: [
        "I apologize, but I don't have information about that. Could you please rephrase or ask something else?",
        "I'm not sure about that. Is there something else I can help you with?",
    ],
};

export function getResponse(message: string): string {
    const lowercaseMessage = message.toLowerCase();

    if (lowercaseMessage.includes('hi') || lowercaseMessage.includes('hello')) {
        return responses.greetings[Math.floor(Math.random() * responses.greetings.length)];
    }

    if (lowercaseMessage.includes('sale') || lowercaseMessage.includes('discount')) {
        return responses.sales[Math.floor(Math.random() * responses.sales.length)];
    }

    if (lowercaseMessage.includes('order') || lowercaseMessage.includes('tracking')) {
        return responses.order[Math.floor(Math.random() * responses.order.length)];
    }

    if (lowercaseMessage.includes('name') || lowercaseMessage.includes('who are you')) {
        return responses.name[Math.floor(Math.random() * responses.name.length)];
    }

    return responses.unknown[Math.floor(Math.random() * responses.unknown.length)];
}

