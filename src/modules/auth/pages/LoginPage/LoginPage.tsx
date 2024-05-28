import { Alert, Button, Grid, TextField, Typography } from "@mui/material";
import { AuthFormLogin } from "../../sections/AuthFormLogin/AuthFormLogin";
import "./LoginPage.scss";
import { Link } from "react-router-dom";
import { Label } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { User } from "@/interfaces/user";
import { useAuthStore } from "@/hooks/useAuthStore";

export const LoginPage = () => {

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<User>();

  
  const {startLogin,errorMessage} = useAuthStore();


  const onSubmit = (data: User) => {
    const { name,password } = data;
    // dispatch(onLogin(name));
    // localStorage.setItem("virtual", name);
    startLogin({name,password});
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
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Typography>Usuario</Typography>
            <TextField
              // label="Usuario"
              type="text"
              placeholder="Ingresa tu usuario"
              fullWidth
              {...register("name",{
                required: "Usuario es requerido"
              })}
              error={!!errors.name}
              helperText={errors.name?.message}
              // value={ email }
              // onChange={ onInputChange }
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <Typography>Contrasena</Typography>
            <TextField
              // label="Contraseña"
              type="password"
              placeholder="Ingresa tu contraseña"
              fullWidth
              {...register("password",{
                required: "Contrasena es requerida",
                // minLength: {
                //   value: 6,
                //   message: "Minimo 6 caracteres"
                // }
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
              // value={ password }
              // onChange={ onInputChange }
            />
          </Grid>

          <Grid 
              container
              display={ errorMessage ? '': 'none' }
              sx={{ mt: 1 }}>
              <Grid 
                  item 
                  xs={ 12 }
                >
                <Alert severity='error'>{ errorMessage }</Alert>
              </Grid>
            </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
          <Button
            // disabled={ isAuthenticating }
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
