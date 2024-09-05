import React from 'react'

const AuthLayout = () => {
    return (
        <div className='flex min-h-screen w-full'>
            <div className='hidden lg:flex items-center justify-center bg-black w-1/2 px-12'>
                <div className='max-w-md space-y-6 text-center text-primary-foreground'>
                    <h1 className='text-4xl font-extrabold'>
                        Welcome to ECommerce Shopping
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default AuthLayout