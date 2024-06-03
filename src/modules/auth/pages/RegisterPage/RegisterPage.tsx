import {
  Alert,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { User } from "@/interfaces/user";
import { useAuthStore } from "@/hooks/useAuthStore";
import { useEffect, useState } from "react";
import {
  CheckCircleOutline,
  CircleOutlined,
} from "@mui/icons-material";

export const RegisterPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
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
          <Grid item xs={12} sx={{ mt: 5 }}>
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

          <Grid item xs={12} sx={{ mt: 3 }}>
            <Typography>Contraseña</Typography>
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

          <FormGroup sx={{mt:2}}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={passwordChecks.hasUppercase}
                  icon={<CircleOutlined />}
                  checkedIcon={<CheckCircleOutline />}
                  disabled
                />
              }
              label="Mínimo 1 mayúscula"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={passwordChecks.hasLowercase}
                  icon={<CircleOutlined />}
                  checkedIcon={<CheckCircleOutline />}
                  disabled
                />
              }
              label="Mínimo 1 minúscula"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={passwordChecks.hasNumber}
                  icon={<CircleOutlined />}
                  checkedIcon={<CheckCircleOutline />}
                  disabled
                />
              }
              label="Mínimo 1 número"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={passwordChecks.isLengthValid}
                  icon={<CircleOutlined />}
                  checkedIcon={<CheckCircleOutline />}
                  disabled
                />
              }
              label="Mínimo 6 caracteres"
            />
          </FormGroup>

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
              sx={{padding:1.5, fontWeight:700, color: "white"}}
              disabled={
                !passwordChecks.hasLowercase ||
                !passwordChecks.hasNumber ||
                !passwordChecks.hasUppercase ||
                !passwordChecks.isLengthValid
              }
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
