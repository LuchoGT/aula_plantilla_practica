import { AuthFormRegister } from "../../sections/AuthFormRegister/AuthFormRegister";

export const RegisterPage = () => {
  return (
    <main className="login">
      <div className="login__container">
        <div className="login__header">
          <h1>👨</h1>
          <div>
            <h5>Ingresa y explora tu aula virtual</h5>
            <p>Prepárate para aprender y crecer</p>
          </div>
        </div>
        <AuthFormRegister />
      </div>
    </main>
  );
};
