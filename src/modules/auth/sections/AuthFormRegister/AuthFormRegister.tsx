import { useForm } from "react-hook-form";
import { InputField } from "../../components/InputField/InputField"
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { CheckboxField } from "../../components/CheckboxField/CheckboxField";
import { useAuthStore } from "@/hooks/useAuthStore";
import { User } from "@/interfaces/user";

export const AuthFormRegister = () => {

  const {startRegister} = useAuthStore();

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
        setValue,
        watch
      } = useForm<User>();
    
      // const dispatch = useDispatch();
  const { requireUppercase, requireLowercase, requireNumber, requireMinLength } = watch();
  const passwordValue = watch('password'); 
    
      const onSubmit = (data:User)=>{
        const {name,password} = data;
        // localStorage.setItem('aula-virtual',username);
        // dispatch(checkingCredentials());
        // dispatch(login(username));
        // console.log('register',{username,password});
        startRegister({name,password});
        reset();
      }

      useEffect(() => {
        // Verificar si el password cumple con los requisitos y marcar los checkboxes
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const numberRegex = /[0-9]/;
    
        if (passwordValue !== undefined) {
          setValue('requireUppercase', uppercaseRegex.test(passwordValue));
          setValue('requireLowercase', lowercaseRegex.test(passwordValue));
          setValue('requireNumber', numberRegex.test(passwordValue));
          setValue('requireMinLength', passwordValue.length >= 6);
        }
      }, [passwordValue, setValue]);
    
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
    <InputField
      type="text"
      label="Usuario"
      name="name"
      register={register}
      error={errors.name}
    />
    <InputField
      type="password"
      label="Password"
      name="password"
      register={register}
      error={errors.password}
      minLength={6}
      minLengthMessage="La contraseña debe tener al menos 6 caracteres"
    />
    <div>
      <CheckboxField
        register={register}
        label="Minimo 6 caracteres"
        name="requireMinLength"
        disabled
      />
      <CheckboxField
        register={register}
        label="Minimo 1 mayuscula"
        name="requireUppercase"
        disabled

      />
      <CheckboxField
        register={register}
        label="Minimo 1 minuscula"
        name="requireLowercase"
        disabled

      />
      <CheckboxField
        register={register}
        label="Minimo 1 numero"
        name="requireNumber"
        disabled

      />
    </div>
    <div className="form__buttons">
      <button type="submit" className="form__button" disabled={!requireUppercase || !requireLowercase || !requireNumber || !requireMinLength}>
        Iniciar sesión
      </button>
      <div>
        <Link to='/auth/login'>Ya tienes cuenta? Ingresa</Link>
      </div>
    </div>
  </form>
  )
}
