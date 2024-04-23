import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage/LoginPage'
import { AuthTemplate } from '../template/AuthTemplate'
import { RegisterPage } from '../pages/RegisterPage/RegisterPage'

export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<AuthTemplate/>}>
            <Route path='login' index element={<LoginPage/>}/>
            <Route path='register' element={<RegisterPage/>}/>
            {/* <Route path='/*' element={<Navigate to="/auth/login" />} /> */}
            <Route path='*' element={<Navigate to="/login" />} />
            
        </Route>
    </Routes>
  )
}
