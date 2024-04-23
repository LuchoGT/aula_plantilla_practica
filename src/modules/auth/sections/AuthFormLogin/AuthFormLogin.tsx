import { useForm } from "react-hook-form";
import { InputField } from "../../components/InputField/InputField";
import "./AuthFormLogin.scss";
import { User } from "@/interfaces/user";
import { useDispatch } from "react-redux";
import { onLogin } from "@/store/slices/authSlice";
import { useAuthStore } from "@/hooks/useAuthStore";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export const AuthFormLogin = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<User>();

  // const dispatch = useDispatch();

  const {startLogin,errorMessage} = useAuthStore();


  const onSubmit = (data: User) => {
    const { name,password } = data;
    // dispatch(onLogin(name));
    // localStorage.setItem("virtual", name);
    startLogin({name,password});
    reset();
  };

  useEffect(() => {
    
    if (errorMessage !==undefined){
      Swal.fire("Error en la autenticacion",errorMessage,'error');
    }
    
  }, [errorMessage])
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <InputField
        type="text"
        label="Usuario"
        name="name"
        register={register}
        error={errors.name}
        // pattern={{
        //   value:
        //     /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
        //   message: "Formato no válido",
        // }}
      />
      <InputField
        type="password"
        label="Password"
        name="password"
        register={register}
        error={errors.password}
        minLength={6}
        minLengthMessage="La contraseña debe tener al menos 8 caracteres"
        // minLengthMessage="Ups! La contraseña no es correcta, vuelve a intentarlo."
      />
      <div className="form__buttons">
        <button type="submit" className="form__button">
          Iniciar sesión
        </button>
        <div>
          <Link to='/auth/register'>Eres nuevo? Crea tu cuenta</Link>
        </div>
      </div>
    </form>
  );
};
