import { Alert, Button, Checkbox, FormControlLabel, FormGroup, Grid, TextField, Typography } from "@mui/material";
import { AuthFormRegister } from "../../sections/AuthFormRegister/AuthFormRegister";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { User } from "@/interfaces/user";
import { useAuthStore } from "@/hooks/useAuthStore";
import { useEffect, useState } from "react";

export const RegisterPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
    watch,
  } = useForm<User>();

  const { startRegister, errorMessage } = useAuthStore();

  // const { requireUppercase, requireLowercase, requireNumber, requireMinLength } = watch();
  const [passwordChecks, setPasswordChecks] = useState({
    hasUppercase: false,
    hasLowercase: false,
    hasNumber: false,
    isLengthValid: false,
  });

  // const passwordValue = watch('password'); 

  const onSubmit = (data: User) => {
    const { name, password } = data;
    // localStorage.setItem('aula-virtual',username);
    // dispatch(checkingCredentials());
    // dispatch(login(username));
    // console.log('register',{username,password});
    startRegister({ name, password });
    reset();
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const hasUppercase = /[A-Z]/.test(value);
    const hasLowercase = /[a-z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const isLengthValid = value.length >= 6;

    setPasswordChecks({
      hasUppercase,
      hasLowercase,
      hasNumber,
      isLengthValid,
    });
  };

  // useEffect(() => {
  //   // Verificar si el password cumple con los requisitos y marcar los checkboxes
  //   const uppercaseRegex = /[A-Z]/;
  //   const lowercaseRegex = /[a-z]/;
  //   const numberRegex = /[0-9]/;

  //   if (passwordValue !== undefined) {
  //     setValue('requireUppercase', uppercaseRegex.test(passwordValue));
  //     setValue('requireLowercase', lowercaseRegex.test(passwordValue));
  //     setValue('requireNumber', numberRegex.test(passwordValue));
  //     setValue('requireMinLength', passwordValue.length >= 6);
  //   }
  // }, [passwordValue, setValue]);

  return (
    // <main className="login">
    //   <div className="login__container">
    //     <div className="login__header">
    //       <h1>👨</h1>
    //       <div>
    //         <h5>Ingresa y explora tu aula virtual</h5>
    //         <p>Prepárate para aprender y crecer</p>
    //       </div>
    //     </div>
    //     <AuthFormRegister />
    //   </div>
    // </main>
    <main>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Typography>Usuario</Typography>
            <TextField
              type="text"
              placeholder="Ingresa tu usuario"
              fullWidth
              {...register("name", {
                required: "Usuario es requerida",
              })}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <Typography>Contrasena</Typography>
            <TextField
              // label="Contraseña"
              type="password"
              placeholder="Ingresa tu contraseña"
              fullWidth
              {...register("password", {
                required: "Password es requerida",
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
              onChange={handlePasswordChange}
            />
          </Grid>

          <FormControlLabel
            control={<Checkbox checked={passwordChecks.hasUppercase} disabled />}
            label="Contains at least one uppercase letter"
          />
          <FormControlLabel
            control={<Checkbox checked={passwordChecks.hasLowercase} disabled />}
            label="Contains at least one lowercase letter"
          />
          <FormControlLabel
            control={<Checkbox checked={passwordChecks.hasNumber} disabled />}
            label="Contains at least one number"
          />
          <FormControlLabel
            control={<Checkbox checked={passwordChecks.isLengthValid} disabled />}
            label="Is at least 6 characters long"
          />
          <Grid container display={errorMessage ? "" : "none"} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <Button
              // disabled={ isAuthenticating }
              type="submit"
              variant="contained"
              fullWidth
              disabled={!passwordChecks.hasLowercase || !passwordChecks.hasNumber || !passwordChecks.hasUppercase || !passwordChecks.isLengthValid}
            >
              Registrar
            </Button>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link color="inherit" to="/auth/login">
              Ingresa
            </Link>
          </Grid>
        </Grid>
      </form>
    </main>
  );
};
