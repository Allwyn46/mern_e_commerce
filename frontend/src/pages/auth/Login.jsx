import React, { useState } from 'react'
import CommonForm from '@/components/common/CommonForm'
import { loginFormControls } from '@/config/config'
import { Link } from 'react-router-dom'

const initialState = {
  email: '',
  password: ''
}

const Login = () => {

  const [formData, setFormData] = useState(initialState)

  const onSubmit = () => {

  }

  return (
    <div className='mx-auto w-full max-w-md space-y-6'>
      <div className='text-center'>
        <h1 className='font-out_semi text-3xl tracking-tight text-foreground'>
          Log in to your account
        </h1>

        <div className='mt-9'>
          {/* RENDERING THE DYNAMIC FORM COMPONENT */}

          <CommonForm
            formControls={loginFormControls}
            buttonText={'Sign in'}
            formData={formData}
            setFormData={setFormData}
            onSubmit={onSubmit}
          />
        </div>

        <p className='mt-3 font-out_light'>
          Don't have an account?
          <Link to='/auth/register' className='font-out_reg text-primary hover:underline ml-2'>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login