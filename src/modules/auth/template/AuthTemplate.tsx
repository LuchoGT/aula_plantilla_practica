import { Outlet } from "react-router-dom";
import { Grid, Stack, Typography } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import logo from '../../../images/logo.svg'
import "./AuthTemplate.scss";

export const AuthTemplate = () => {
  return (
    // <div className='auth-template'>
    //     <AuthHeader/>
    //     <Outlet/>
    //     {/* <AuthFooter/> */}
    // </div>
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "#1D1A2380", padding: 4 }}
    >
      <img src={logo} alt="Synnexa" className="img" />

      <Grid
        item
        xs={3}
        sx={{
          width: { sm: 550 },
          backgroundColor: "#22294980",
          padding: 3,
          borderRadius: 2,
        }}
      >
        <Stack direction="row" justifyContent="center">
          <AccountCircle sx={{color:"white", fontSize:"4.5rem"}}/>
        </Stack>
        <Typography color={"white"} variant="h5" textAlign="center" sx={{ fontWeight: '600' }} >Ingresa y explora tu aula virtual</Typography>
        <Typography color={"white"} variant="subtitle2" textAlign="center">Prepárate para aprender y crecer</Typography>
        <Outlet />
      </Grid>
    </Grid>
  );
};
