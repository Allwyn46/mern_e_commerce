import React from 'react'
import { Button } from '../ui/button'
import { LogOut, Menu } from 'lucide-react'

const AdminHeader = () => {
    return (
        <header className='flex justify-center items-center px-4 py-3 bg-background border-b'>
            <Button className="lg:hidden sm:block">
                <Menu />
            </Button>
            <span className='sr-only'>Togglemenu</span>
            <div className='flex flex-1 justify-end'>
                <Button variant="outline" className="inline-flex gap-2 items-center rounded-md px-4 py-2 font-out_reg"><LogOut />Logout</Button>
            </div>
        </header>
    )
}

export default AdminHeader