import { AuthFooter } from '../sections/AuthFooter/AuthFooter'
import { AuthHeader } from '../sections/AuthHeader/AuthHeader'
import { Outlet } from 'react-router-dom'
import './AuthTemplate.scss'

export const AuthTemplate = () => {
  return (
    <div className='auth-template'>
        <AuthHeader/>
        <Outlet/>
        {/* <AuthFooter/> */}
    </div>
  )
}
