import { Alert, Button, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { User } from "@/interfaces/user";
import { useAuthStore } from "@/hooks/useAuthStore";
import "./LoginPage.scss";

export const LoginPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<User>();

  const { startLogin, errorMessage } = useAuthStore();

  const onSubmit = (data: User) => {
    const { name, password } = data;
    // dispatch(onLogin(name));
    // localStorage.setItem("virtual", name);
    startLogin({ name, password });
    reset();
  };
  return (
    //   <main className='login'>
    //   <div className='login__container'>
    //     <div className='login__header'>
    //       <h1>👨</h1>
    //       <div>
    //         <Typography>Hola mundo</Typography>
    //         <h5>Ingresa y explora tu aula virtual</h5>
    //         <p>Prepárate para aprender y crecer</p>
    //       </div>
    //     </div>
    //     <AuthFormLogin/>
    //   </div>
    // </main>
    <main>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 4 }}>
            <Typography>Usuario</Typography>
            <TextField
              type="text"
              placeholder="Ingresa tu usuario"
              fullWidth
              {...register("name", {
                required: "Usuario es requerido",
              })}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <Typography>Contraseña</Typography>
            <TextField
              type="password"
              placeholder="Ingresa tu contraseña"
              fullWidth
              {...register("password", {
                required: "Contraseña es requerida",
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          </Grid>

          <Grid container display={errorMessage ? "" : "none"} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
            >
              Ingresar
            </Button>
          </Grid>

          <Grid
            container
            // display={ !!errorMessage ? '': 'none' }
            sx={{ mt: 1 }}
          >
            <Grid item xs={12}>
              {/* <Alert severity='error'>{ errorMessage }</Alert> */}
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link color="inherit" to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </main>
  );
};
