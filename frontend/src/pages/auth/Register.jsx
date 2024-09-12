import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className='mx-auto w-full max-w-md space-y-6'>
            <div className='text-center'>
                <h1 className='font-out_semi text-3xl tracking-tight text-foreground'>
                    Create New Account
                </h1>
                <p className='mt-3 font-out_light'>
                    Already have an account?
                    <Link to='/auth/login' className='font-out_reg text-primary hover:underline ml-2'>
                        Login
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Register