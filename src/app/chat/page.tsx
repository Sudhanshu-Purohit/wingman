import Chat from "@/components/chat";

export default function Page() {
    return (
        <div className="flex flex-col mt-20 p-6 sm:p-8  max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-900 text-center mb-4">
                Chat with Your AI Assistant
            </h2>
            
            <p className="text-base text-gray-700 w-full text-center mb-6">
                Have a conversation with our AI-powered assistant. Whether you're seeking information or just having a casual chat, we're here to assist you anytime!
            </p>

            <div className="w-full flex justify-center h-[400px] sm:h-[500px] md:h-[600px]overflow-hidden">
                <Chat />
            </div>
        </div>
    );
}
