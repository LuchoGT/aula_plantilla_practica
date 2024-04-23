import { AuthFormLogin } from '../../sections/AuthFormLogin/AuthFormLogin'
import './LoginPage.scss'

export const LoginPage = () => {
  return (
    <main className='login'>
    <div className='login__container'>
      <div className='login__header'>
        <h1>👨</h1>
        <div>
          <h5>Ingresa y explora tu aula virtual</h5>
          <p>Prepárate para aprender y crecer</p>
        </div>
      </div>
      <AuthFormLogin/>
    </div>
  </main>
  )
}
