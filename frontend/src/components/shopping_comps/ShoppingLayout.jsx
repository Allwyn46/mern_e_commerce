import React from 'react'
import ShoppingNavbar from './ShoppingNavbar'
import { Outlet } from 'react-router-dom'

const ShoppingLayout = () => {
    return (
        <div className='flex flex-col bg-white overflow-hidden'>

            {/* NAVBAR */}
            <ShoppingNavbar />

            <main className='flex flex-col w-full'>
                <Outlet />
            </main>
        </div>
    )
}

export default ShoppingLayout