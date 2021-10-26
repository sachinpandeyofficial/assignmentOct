import React from 'react'

const RegisterForm = ({ register }) => (
  <form onSubmit={register} className='form'>
    <input type='text' name='user' placeholder='Enter your username' required className='roboto'/>
    <input type="submit" value="Register" className='roboto'/>
  </form>
)

export default RegisterForm