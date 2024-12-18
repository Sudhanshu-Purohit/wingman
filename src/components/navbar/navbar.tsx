import React from 'react'
import { SidebarTrigger } from '../ui/sidebar'
import { Separator } from '../ui/separator'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='border w-full fixed top-0 border-b flex items-center px-6 py-5'>
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <div className="flex items-center space-x-6">
                <Link
                    href="/"
                    className="flex items-center space-x-2 text-sm font-medium"
                >
                    <span>Summary</span>
                </Link>
                <Link
                    href="/"
                    className="flex items-center space-x-2 text-sm font-medium text-muted-foreground"
                >
                    <span>Sales</span>
                </Link>
                <Link
                    href="/"
                    className="flex items-center space-x-2 text-sm font-medium text-muted-foreground"
                >
                    <span>Chats</span>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
